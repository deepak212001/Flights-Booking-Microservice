const cron = require('node-cron');

const { BookingService } = require('../../services');

function scheduleCrons() {
    cron.schedule('0 */10 * * * *', async () => {
        console.log("start")
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;