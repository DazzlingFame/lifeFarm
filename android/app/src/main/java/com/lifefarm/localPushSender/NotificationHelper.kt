package com.lifefarm.localPushSender

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import com.lifefarm.R

fun createNotificationChannel(context: Context, importance: Int, showBadge: Boolean, name: String, description: String) {
    val channelId = "${context.packageName}-${context.getString(R.string.app_name)}"
    val channel = NotificationChannel(channelId, name, importance)
    channel.description = description
    channel.setShowBadge(showBadge)

    val notificationManager = context.getSystemService(NotificationManager::class.java)
    notificationManager.createNotificationChannel(channel)
}