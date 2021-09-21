import cron from 'node-cron';
import instaRefreshCron from "./crons/instaRefresh.cron";

// run immediately after server starts
instaRefreshCron();

// refresh instaAccessToken eg: weekly(every Sat)
cron.schedule('* * * * * 7', async () => {
    await instaRefreshCron();
});