# 🚀 Quick Reference Card

## Start Server

```bash
npm start
# OR
./start.sh
# OR
node server.js
```

## Test Backend

```
http://localhost:3000/api-test.html
```

## View Website

```
http://localhost:3000
```

## API Endpoints

- POST `/api/reservations` - Create reservation
- GET `/api/reservations` - Get all reservations
- POST `/api/contact` - Submit contact form
- POST `/api/newsletter/subscribe` - Subscribe
- POST `/api/events/inquiry` - Event inquiry
- GET `/api/health` - Health check

## Check Database

```bash
sqlite3 savoria.db
sqlite> SELECT * FROM reservations;
sqlite> .tables
sqlite> .exit
```

## Email Setup

1. Copy: `cp .env.example .env`
2. Edit: `.env` with your Gmail App Password
3. Get App Password: https://myaccount.google.com/apppasswords
4. Restart server

## Useful Commands

```bash
# Install dependencies
npm install

# Start with auto-reload
npm run dev

# View all reservations via curl
curl http://localhost:3000/api/reservations

# Test health endpoint
curl http://localhost:3000/api/health
```

## Frontend API Usage

```javascript
// Reservation
await SavoriaUtils.submitReservation({
  name,
  email,
  phone,
  date,
  time,
  guests,
});

// Contact
await SavoriaUtils.submitContactForm({
  name,
  email,
  subject,
  message,
});

// Newsletter
await SavoriaUtils.subscribeToNewsletter(email, name);
```

## Troubleshooting

- **Port in use**: `lsof -i :3000` then `kill -9 <PID>`
- **Database reset**: Delete `savoria.db` and restart
- **Dependencies**: Run `npm install`
- **Email not working**: Check `.env` credentials

## Files to Know

- `server.js` - Backend server
- `js/script.js` - Frontend + API calls
- `api-test.html` - Test all endpoints
- `BACKEND-README.md` - Full backend docs
- `FULLSTACK-SUMMARY.md` - Complete overview
- `.env` - Email configuration (create from `.env.example`)

## Demo for Class

1. Start server: `npm start`
2. Open: `http://localhost:3000`
3. Fill reservation form
4. Show confirmation number
5. Open: `http://localhost:3000/api-test.html`
6. Click "Fetch All Reservations"
7. Show data in database! 🎉
