/* ========================================
   SAVORIA RESTAURANT - BACKEND SERVER
   Node.js + Express + SQLite
   ======================================== */

const express = require("express");
const cors = require("cors");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files

// Database setup
const db = new sqlite3.Database("./savoria.db", (err) => {
  if (err) {
    console.error("Error opening database:", err);
  } else {
    console.log("✅ Connected to SQLite database");
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  // Reservations table
  db.run(`
    CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      guests INTEGER NOT NULL,
      occasion TEXT,
      special_requests TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'pending'
    )
  `);

  // Contact submissions table
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'new'
    )
  `);

  // Newsletter subscribers table
  db.run(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      name TEXT,
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'active'
    )
  `);

  // Event inquiries table
  db.run(`
    CREATE TABLE IF NOT EXISTS event_inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      event_type TEXT NOT NULL,
      event_date TEXT NOT NULL,
      guest_count INTEGER NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'pending'
    )
  `);

  console.log("✅ Database tables initialized");
}

// Email configuration (configure with your email service)
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
});

// ========================================
// API ROUTES
// ========================================

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Savoria backend is running" });
});

// ========================================
// RESERVATIONS
// ========================================

// Create a new reservation
app.post("/api/reservations", (req, res) => {
  const { name, email, phone, date, time, guests, occasion, special_requests } =
    req.body;

  // Validation
  if (!name || !email || !phone || !date || !time || !guests) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  // Insert into database
  const sql = `
    INSERT INTO reservations (name, email, phone, date, time, guests, occasion, special_requests)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [name, email, phone, date, time, guests, occasion, special_requests],
    function (err) {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Error creating reservation",
        });
      }

      const reservationId = this.lastID;

      // Send confirmation email
      sendReservationEmail(email, name, { date, time, guests, reservationId });

      res.json({
        success: true,
        message: "Reservation created successfully",
        reservationId: reservationId,
        confirmationNumber: `SAV-${String(reservationId).padStart(6, "0")}`,
      });
    }
  );
});

// Get all reservations (for admin)
app.get("/api/reservations", (req, res) => {
  const sql = "SELECT * FROM reservations ORDER BY created_at DESC";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Error fetching reservations" });
    }
    res.json({ success: true, reservations: rows });
  });
});

// Get reservation by ID
app.get("/api/reservations/:id", (req, res) => {
  const sql = "SELECT * FROM reservations WHERE id = ?";

  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Error fetching reservation" });
    }
    if (!row) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }
    res.json({ success: true, reservation: row });
  });
});

// ========================================
// CONTACT FORM
// ========================================

app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required",
    });
  }

  const sql = `
    INSERT INTO contact_submissions (name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, [name, email, phone, subject, message], function (err) {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        success: false,
        message: "Error submitting contact form",
      });
    }

    // Send notification email to restaurant
    sendContactNotification({ name, email, phone, subject, message });

    res.json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    });
  });
});

// ========================================
// NEWSLETTER
// ========================================

app.post("/api/newsletter/subscribe", (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const sql = `
    INSERT INTO newsletter_subscribers (email, name)
    VALUES (?, ?)
  `;

  db.run(sql, [email, name], function (err) {
    if (err) {
      if (err.message.includes("UNIQUE constraint failed")) {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed",
        });
      }
      return res.status(500).json({
        success: false,
        message: "Error subscribing to newsletter",
      });
    }

    // Send welcome email
    sendWelcomeEmail(email, name);

    res.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    });
  });
});

// Get all newsletter subscribers (for admin)
app.get("/api/newsletter/subscribers", (req, res) => {
  const sql =
    "SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Error fetching subscribers" });
    }
    res.json({ success: true, subscribers: rows });
  });
});

// ========================================
// EVENT INQUIRIES
// ========================================

app.post("/api/events/inquiry", (req, res) => {
  const { name, email, phone, event_type, event_date, guest_count, message } =
    req.body;

  if (!name || !email || !phone || !event_type || !event_date || !guest_count) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql = `
    INSERT INTO event_inquiries (name, email, phone, event_type, event_date, guest_count, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [name, email, phone, event_type, event_date, guest_count, message],
    function (err) {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Error submitting event inquiry",
        });
      }

      res.json({
        success: true,
        message:
          "Event inquiry submitted successfully! We will contact you soon.",
      });
    }
  );
});

// Get all event inquiries (for admin)
app.get("/api/events/inquiries", (req, res) => {
  const sql = "SELECT * FROM event_inquiries ORDER BY created_at DESC";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Error fetching inquiries" });
    }
    res.json({ success: true, inquiries: rows });
  });
});

// Get all contact submissions (for admin)
app.get("/api/contact", (req, res) => {
  const sql = "SELECT * FROM contact_submissions ORDER BY created_at DESC";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Error fetching contact submissions",
        });
    }
    res.json({ success: true, submissions: rows });
  });
});

// ========================================
// EMAIL FUNCTIONS
// ========================================

function sendReservationEmail(to, name, details) {
  const mailOptions = {
    from: process.env.EMAIL_USER || "noreply@savoria.com",
    to: to,
    subject: "Reservation Confirmation - Savoria Restaurant",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d4af37;">Thank you for your reservation!</h2>
        <p>Dear ${name},</p>
        <p>Your reservation at Savoria has been confirmed.</p>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Reservation Details:</h3>
          <p><strong>Confirmation Number:</strong> SAV-${String(
            details.reservationId
          ).padStart(6, "0")}</p>
          <p><strong>Date:</strong> ${details.date}</p>
          <p><strong>Time:</strong> ${details.time}</p>
          <p><strong>Party Size:</strong> ${details.guests} guests</p>
        </div>
        <p>We look forward to serving you!</p>
        <p style="color: #666; font-size: 12px;">If you need to modify or cancel your reservation, please contact us at (555) 728-6742</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
    } else {
      console.log("Confirmation email sent:", info.response);
    }
  });
}

function sendContactNotification(data) {
  const mailOptions = {
    from: process.env.EMAIL_USER || "noreply@savoria.com",
    to: process.env.RESTAURANT_EMAIL || "restaurant@savoria.com",
    subject: `New Contact Form Submission - ${data.subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${data.subject || "General Inquiry"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
    }
  });
}

function sendWelcomeEmail(to, name) {
  const mailOptions = {
    from: process.env.EMAIL_USER || "noreply@savoria.com",
    to: to,
    subject: "Welcome to Savoria Newsletter",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d4af37;">Welcome to Savoria!</h2>
        <p>Dear ${name || "Food Lover"},</p>
        <p>Thank you for subscribing to our newsletter. You'll receive updates on:</p>
        <ul>
          <li>Seasonal menu items</li>
          <li>Special events and wine tastings</li>
          <li>Exclusive offers for subscribers</li>
        </ul>
        <p>We look forward to keeping you updated!</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
    }
  });
}

// ========================================
// SERVE FRONTEND
// ========================================

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║   🍽️  SAVORIA RESTAURANT BACKEND  🍽️      ║
╚═══════════════════════════════════════════╝

✅ Server running on http://localhost:${PORT}
✅ Database: SQLite (savoria.db)
✅ API endpoints available at /api/*

📋 Available endpoints:
   - POST /api/reservations
   - GET  /api/reservations
   - POST /api/contact
   - POST /api/newsletter/subscribe
   - POST /api/events/inquiry
  `);
});

// Graceful shutdown
process.on("SIGINT", () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("\n✅ Database connection closed");
    process.exit(0);
  });
});
