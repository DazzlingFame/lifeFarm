package com.lifefarm.localPushSender

import android.os.Build
import androidx.annotation.RequiresApi
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

    @RequiresApi(Build.VERSION_CODES.GINGERBREAD)
    @ReactMethod
    fun scheduleNotification(timeToWait: Int, header: String?, text: String?) {
        val data = Data.Builder().putString("HEADER", header).putString("TEXT", text).build();
        
        WorkManager.getInstance(reactContext).enqueueUniquePeriodicWork(
            header ?: "SEND_PUSH",
            ExistingPeriodicWorkPolicy.REPLACE,
            PeriodicWorkRequest.Builder(OneTimeNotification::class.java, timeToWait.toLong(), TimeUnit.DAYS)
                .setInitialDelay(timeToWait.toLong(), TimeUnit.DAYS)
                .addTag(header ?: "Tag")
                .setInputData(data)
                .build()
        )
    }
}