const express = require("express");
const cors = require("cors"); // Add CORS package
const smsController = require("./controllers/smscontroller");

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(express.json()); // Parse JSON request bodies // Add this line

app.post("/send-sms", smsController.sendSms);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
