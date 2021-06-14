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
        var builder = NotificationCompat.Builder(context, "${context.packageName}-${context.getString(R.string.app_name)}")
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(inputData.getString("HEADER"))
            .setContentText(inputData.getString("TEXT"))
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setChannelId("${context.packageName}-${context.getString(R.string.app_name)}")

        with(NotificationManagerCompat.from(context)) {
            notify(Random.nextInt(), builder.build())
        }
        return Result.success()
    }
}