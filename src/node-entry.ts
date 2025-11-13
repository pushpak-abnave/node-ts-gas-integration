require('dotenv').config();     // If using CommonJS

// src/node-entry.ts
require('dotenv').config();
const { hello } = require("./utils");

module.exports = { hello };

const slackWebhookUrl = process.env.SLACK_WEBHOOK;   // In your code
console.log("Slack Webhook:", slackWebhookUrl); // This will print whatever value is set in .env
