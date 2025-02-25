const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(cors());


// Nodemailer transporter setup for Gmail (or other email service)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email function
const sendEmail = (formData) => {
  const mailOptions = {
  from: `"${formData.name}" <${formData.email}>`, 
  to: 'robbsautomotive@gmail.com',
  replyTo: formData.email,
  subject: `New Booking from ${formData.name}`,
  text: `
    You have received a new booking!

    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Vehicle: ${formData.vehicle}
    Vehicle RegoNumber: ${formData.vehicleNumber}
    Appointment Date: ${formData.appointmentDate}
    Service Required: ${formData.serviceRequired}
    Additional Notes: ${formData.additionalNotes}
  `,
};
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to send emails');
  }
});

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Define POST route for booking submissions
app.post('/api/send-appointment', (req, res) => {
  const formData = req.body; // Get form data from the frontend
  console.log('Received booking data:', formData);  // Log the received data to check if it's correct

  // Send email with the booking details
  sendEmail(formData);

  // Respond with a success message
  res.status(200).json({ message: 'Booking submitted successfully' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
