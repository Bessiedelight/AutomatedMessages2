// services/smsService.js
const twilio = require('twilio');
require('dotenv').config();
const logger = require('../utils/logger');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

class SmsService {
  async sendSms(recipient, message) {
    try {
      const sms = await client.messages.create({
        to: recipient,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: message,
      });
      logger.log(`SMS sent successfully to ${recipient}`);
      return sms.sid;
    } catch (error) {
      logger.error(`Failed to send SMS to ${recipient}: ${error.message}`);
      throw new Error(`Failed to send SMS: ${error.message}`);
    }
  }
}

module.exports = new SmsService();