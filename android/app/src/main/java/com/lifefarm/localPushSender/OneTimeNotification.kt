package com.lifefarm.localPushSender

import android.content.Context
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.work.Worker
import androidx.work.WorkerParameters
import com.lifefarm.R
import kotlin.random.Random

class OneTimeNotification(
        val context: Context,
        workerParams: WorkerParameters
): Worker(context, workerParams) {
    override fun doWork(): Result {
        val header = inputData.getString("HEADER")
        val text = inputData.getString("TEXT")
        var builder = NotificationCompat.Builder(context, "${context.packageName}-${context.getString(R.string.app_name)}")
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(header)
            .setContentText(text)
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setChannelId("${context.packageName}-${context.getString(R.string.app_name)}")

        with(NotificationManagerCompat.from(context)) {
            notify(Random.nextInt(), builder.build())
        }
        return Result.success()
    }
}