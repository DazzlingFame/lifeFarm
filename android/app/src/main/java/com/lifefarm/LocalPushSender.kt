package com.lifefarm

import android.content.Context
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.work.Worker
import androidx.work.WorkerParameters
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit
import java.util.*

class LocalPushSender(
        private val context: Context,
        workerParams: WorkerParameters
) : Worker(context, workerParams) {

    override fun doWork(): Result {
        val timeOfLastUsage = LocalDateTime
                .parse(inputData.getString(LocalDateTime.now().toString()))
        val now = LocalDateTime.now()

        var notificationTitle: String = ""
        var notificationText: String = ""

        when (ChronoUnit.WEEKS.between(timeOfLastUsage, now) % 2) {
            1L -> {
                notificationTitle = "Week one"
                notificationText = "This is first of two notifications"
            }
            2L -> {
                notificationTitle = "Week two"
                notificationText = "This is second of two notifications"
            }
        }

        val builder = NotificationCompat.Builder(context, "channelId")
                .setContentTitle(notificationTitle)
                .setContentText(notificationText)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)

//        NotificationManagerCompat.from(context).notify(Random.nextInt(), builder.build())


        return Result.success()
    }
}