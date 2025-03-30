// controllers/smsController.js
const smsService = require('../services/smsService');

class SmsController {
  async sendSms(req, res) {
    const { recipient, message } = req.body;
    if (!recipient || !message) {
      return res.status(400).json({ error: 'Missing recipient or message' });
    }
    try {
      const sid = await smsService.sendSms(recipient, message);
      res.json({ sid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SmsController();