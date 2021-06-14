package com.lifefarm.localPushSender

import androidx.work.Data
import androidx.work.ExistingPeriodicWorkPolicy
import androidx.work.PeriodicWorkRequest
import androidx.work.WorkManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.concurrent.TimeUnit

class LocalPushSenderModule internal constructor(var reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "LocalPushSenderModule"
    }

    @ReactMethod
    fun scheduleNotification(timeToWait: Int, header: String?, text: String?) {
        val data = Data.Builder().putString("HEADER", header).putString("TEXT", text).build();
        
        WorkManager.getInstance(reactContext).enqueueUniquePeriodicWork(
            "SEND_PUSH",
            ExistingPeriodicWorkPolicy.REPLACE,
            PeriodicWorkRequest.Builder(OneTimeNotification::class.java, 5, TimeUnit.SECONDS)
                .setInitialDelay(timeToWait.toLong(), TimeUnit.SECONDS)
                .addTag("Tag")
                .setInputData(data)
                .build()
        )
    }
}