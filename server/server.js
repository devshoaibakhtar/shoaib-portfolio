import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* --------------------------
   Middleware
-------------------------- */

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);

app.use(express.json());

/* --------------------------
   Test Route
-------------------------- */

app.get("/", (req, res) => {
  res.send("Contact API is running");
});

/* --------------------------
   Nodemailer Transporter
-------------------------- */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* Verify SMTP connection */

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP server ready to send emails");
  }
});

/* --------------------------
   Contact API
-------------------------- */

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields",
    });
  }

  try {
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`,
      html: `
<h3>New Portfolio Contact Message</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

/* --------------------------
   Start Server
-------------------------- */

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});