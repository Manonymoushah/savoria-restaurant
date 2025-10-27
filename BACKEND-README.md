# 🍽️ Savoria Restaurant - Full-Stack Backend Guide

## Overview

Your restaurant website now has a complete Node.js backend with:

- ✅ **RESTful API** for all forms
- ✅ **SQLite Database** for data storage
- ✅ **Email Notifications** for confirmations
- ✅ **Reservation System** with confirmation numbers
- ✅ **Contact Form** processing
- ✅ **Newsletter** subscriptions
- ✅ **Event Inquiries** management

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email (Optional but Recommended)

Create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` and add your email credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RESTAURANT_EMAIL=restaurant@savoria.com
```

**For Gmail:**

1. Enable 2-Factor Authentication
2. Create App Password: https://myaccount.google.com/apppasswords
3. Use the App Password in `.env`

### 3. Start the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The server will start at: **http://localhost:3000**

---

## 📡 API Endpoints

### Reservations

**Create Reservation**

```
POST /api/reservations
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "date": "2024-12-25",
  "time": "19:00",
  "guests": 4,
  "occasion": "Birthday",
  "special_requests": "Window seat please"
}
```

**Get All Reservations (Admin)**

```
GET /api/reservations
```

**Get Single Reservation**

```
GET /api/reservations/:id
```

### Contact Form

**Submit Contact Form**

```
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "555-5678",
  "subject": "Private Dining",
  "message": "I would like to inquire about..."
}
```

### Newsletter

**Subscribe to Newsletter**

```
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "subscriber@example.com",
  "name": "Subscriber Name"
}
```

### Event Inquiries

**Submit Event Inquiry**

```
POST /api/events/inquiry
Content-Type: application/json

{
  "name": "Company Name",
  "email": "events@company.com",
  "phone": "555-9999",
  "event_type": "Corporate Event",
  "event_date": "2024-12-31",
  "guest_count": 50,
  "message": "Corporate holiday party"
}
```

---

## 💾 Database

The backend uses **SQLite** (file-based database - no installation needed!).

Database file: `savoria.db` (created automatically)

### Tables:

1. **reservations** - All reservation bookings
2. **contact_submissions** - Contact form messages
3. **newsletter_subscribers** - Email subscribers
4. **event_inquiries** - Event booking requests

### View Database (Optional)

Install SQLite browser or use CLI:

```bash
sqlite3 savoria.db
```

```sql
-- View all reservations
SELECT * FROM reservations;

-- View today's reservations
SELECT * FROM reservations WHERE date = date('now');

-- View all contact submissions
SELECT * FROM contact_submissions;
```

---

## 🔗 Connecting Frontend to Backend

### Update Your Forms

The frontend forms need to send data to the API. Here's how:

**Example: Reservation Form (pages/reservations.html)**

```javascript
// Replace the existing form submit handler with:
async function handleReservationSubmit(formData) {
  try {
    const response = await fetch("http://localhost:3000/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert(
        `Reservation confirmed! Confirmation #: ${data.confirmationNumber}`
      );
      // Show success message
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit reservation. Please try again.");
  }
}
```

---

## 📧 Email Notifications

### What Gets Sent:

1. **Reservation Confirmation** → Customer receives confirmation email with:

   - Confirmation number
   - Date, time, party size
   - Contact information

2. **Contact Form Notification** → Restaurant receives email with:

   - Customer details
   - Subject and message

3. **Newsletter Welcome** → New subscribers receive welcome email

### Configure Email Service:

**Gmail** (Recommended for testing):

- Enable 2FA
- Create App Password
- Add to `.env` file

**Other Services** (SendGrid, Mailgun, etc.):
Update `nodemailer` configuration in `server.js`

---

## 🛠️ Development Tips

### Testing the API

Use **Postman**, **Thunder Client**, or **curl**:

```bash
# Test health check
curl http://localhost:3000/api/health

# Test reservation creation
curl -X POST http://localhost:3000/api/reservations \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","phone":"555-0000","date":"2024-12-25","time":"19:00","guests":2}'
```

### Hot Reload During Development

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when you make changes.

### View Logs

The server logs all requests and errors to the console. Watch for:

- ✅ Database connections
- 📧 Email sending status
- ❌ Error messages

---

## 🚀 Deployment Options

### Option 1: Heroku (Free Tier)

1. Install Heroku CLI
2. Create Heroku app:
   ```bash
   heroku create savoria-restaurant
   ```
3. Add environment variables:
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-password
   ```
4. Deploy:
   ```bash
   git push heroku main
   ```

### Option 2: Railway.app (Recommended)

1. Go to https://railway.app
2. Connect your GitHub repository
3. Add environment variables in dashboard
4. Deploy automatically on push

### Option 3: DigitalOcean / AWS / GCP

1. Create a server instance
2. Install Node.js
3. Clone your repository
4. Run `npm install && npm start`
5. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   pm2 save
   ```

---

## 🔒 Production Considerations

### Security

1. **Use HTTPS** - Never send passwords over HTTP
2. **Rate Limiting** - Add rate limiting to prevent spam
3. **Input Validation** - Validate all user inputs
4. **Environment Variables** - Never commit `.env` file

### Add Rate Limiting:

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use("/api/", limiter);
```

### Database Backups

```bash
# Backup SQLite database
cp savoria.db savoria-backup-$(date +%Y%m%d).db
```

---

## 📊 Admin Dashboard (Future Enhancement)

You can create an admin panel to:

- View all reservations
- Manage bookings (confirm/cancel)
- View contact submissions
- Export data to CSV
- Send bulk emails to newsletter subscribers

---

## 🆘 Troubleshooting

**Server won't start:**

- Check if port 3000 is already in use
- Run: `lsof -i :3000` to find process
- Kill process: `kill -9 <PID>`

**Database errors:**

- Delete `savoria.db` and restart (will recreate tables)

**Email not sending:**

- Check `.env` configuration
- Verify Gmail App Password
- Check console for error messages

**CORS errors:**

- The server has CORS enabled by default
- For production, restrict CORS to your domain

---

## 📚 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Configure email in `.env`
3. ✅ Start server: `npm start`
4. ✅ Update frontend forms to use API
5. ✅ Test all forms
6. ✅ Deploy to production

---

## 🎓 For Your Class Presentation

**Talking Points:**

1. **Full-Stack Architecture:**

   - Frontend: HTML, CSS, JavaScript
   - Backend: Node.js, Express
   - Database: SQLite
   - Email: Nodemailer

2. **RESTful API Design:**

   - Clear endpoint structure
   - Proper HTTP methods (GET, POST)
   - JSON responses

3. **Data Persistence:**

   - SQLite database for permanent storage
   - Four different tables for different data types

4. **Email Integration:**

   - Automated confirmation emails
   - Professional HTML email templates

5. **Production Ready:**
   - Environment variables for security
   - Error handling
   - Validation

---

**Need help?** Check the console logs or add `console.log()` statements to debug!

Happy coding! 🚀
