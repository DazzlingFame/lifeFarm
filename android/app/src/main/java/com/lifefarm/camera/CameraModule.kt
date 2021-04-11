package com.lifefarm.camera

import android.content.ActivityNotFoundException
import android.content.Intent
import android.provider.MediaStore
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CameraModule internal constructor(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "CameraModule"
    }

    private val REQUEST_IMAGE_CAPTURE = 1;

    private fun dispatchTakePictureIntent() {
        val takePictureIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        try {
            this.currentActivity?.startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE)
        } catch (e: ActivityNotFoundException) {
            Log.e("CameraModule", "Cant launch activity");
        }
    }

    @ReactMethod
    fun createCameraEvent() {
        this.dispatchTakePictureIntent()
        Log.d("CameraModule", "Create camera event");
    }
}