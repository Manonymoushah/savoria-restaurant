# 🏗️ Savoria Full-Stack Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (Client-Side)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  index.html  │  │   menu.html  │  │ contact.html │  ...     │
│  │   (Home)     │  │              │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  css/style.css (1497 lines)                             │   │
│  │  - Bootstrap 5 styling                                  │   │
│  │  - Custom gold/black theme                              │   │
│  │  - Responsive design                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  js/script.js (700+ lines)                              │   │
│  │  - Form validation                                      │   │
│  │  - API integration (NEW!)                               │   │
│  │  - User interactions                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP Requests (Fetch API)
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        BACKEND (Server-Side)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  server.js (Node.js + Express)                          │   │
│  │                                                          │   │
│  │  📡 API Routes:                                          │   │
│  │  ├─ POST /api/reservations                              │   │
│  │  ├─ GET  /api/reservations                              │   │
│  │  ├─ POST /api/contact                                   │   │
│  │  ├─ POST /api/newsletter/subscribe                      │   │
│  │  ├─ POST /api/events/inquiry                            │   │
│  │  └─ GET  /api/health                                    │   │
│  │                                                          │   │
│  │  📧 Email Service (Nodemailer):                          │   │
│  │  ├─ Reservation confirmations                           │   │
│  │  ├─ Contact notifications                               │   │
│  │  └─ Newsletter welcome emails                           │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              │ SQL Queries                       │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  savoria.db (SQLite Database)                           │   │
│  │                                                          │   │
│  │  📊 Tables:                                              │   │
│  │  ├─ reservations (bookings)                             │   │
│  │  ├─ contact_submissions (messages)                      │   │
│  │  ├─ newsletter_subscribers (emails)                     │   │
│  │  └─ event_inquiries (events)                            │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════
                         DATA FLOW EXAMPLE
═══════════════════════════════════════════════════════════════════

USER ACTION: Makes a reservation
│
├─ Step 1: Fill out form on reservations.html
│          (Name, Email, Phone, Date, Time, Guests)
│
├─ Step 2: JavaScript validates form data
│          ✓ Email format check
│          ✓ Phone format check
│          ✓ Date is in future
│
├─ Step 3: Frontend calls API
│          SavoriaUtils.submitReservation(formData)
│          ↓
│          POST http://localhost:3000/api/reservations
│          Content-Type: application/json
│          Body: { name, email, phone, date, time, guests }
│
├─ Step 4: Backend receives request
│          server.js handles POST /api/reservations
│          ↓
│          Validates required fields
│          ↓
│          Inserts into database:
│          INSERT INTO reservations (name, email, ...) VALUES (...)
│          ↓
│          Gets reservation ID (e.g., 1)
│          ↓
│          Sends confirmation email via Nodemailer
│          ↓
│          Returns JSON response:
│          {
│            success: true,
│            confirmationNumber: "SAV-000001",
│            reservationId: 1
│          }
│
├─ Step 5: Frontend receives response
│          Shows success toast notification
│          ↓
│          Displays confirmation number
│          ↓
│          Triggers confetti animation 🎉
│
└─ Step 6: Data persisted in database
           Available via GET /api/reservations


═══════════════════════════════════════════════════════════════════
                         TECHNOLOGY STACK
═══════════════════════════════════════════════════════════════════

Frontend:
├─ HTML5 (Semantic markup)
├─ CSS3 (Custom properties, animations)
├─ JavaScript ES6+ (Async/await, Fetch API)
├─ Bootstrap 5.3.2 (Responsive framework)
├─ Font Awesome 6.5.1 (Icons)
└─ Google Fonts (Playfair Display, Lato)

Backend:
├─ Node.js (JavaScript runtime)
├─ Express.js (Web framework)
├─ SQLite3 (Database)
├─ Nodemailer (Email service)
├─ CORS (Cross-origin requests)
└─ Body-Parser (Request parsing)

Development:
├─ NPM (Package manager)
├─ Nodemon (Auto-restart - dev only)
└─ Git (Version control)


═══════════════════════════════════════════════════════════════════
                         DEPLOYMENT FLOW
═══════════════════════════════════════════════════════════════════

Development:
┌──────────────────┐
│  npm install     │  Install dependencies
└────────┬─────────┘
         │
┌────────▼─────────┐
│  npm start       │  Start server on localhost:3000
└────────┬─────────┘
         │
┌────────▼─────────┐
│  Test locally    │  Use api-test.html
└──────────────────┘

Production:
┌──────────────────┐
│  Railway.app     │  Deploy to cloud
└────────┬─────────┘
         │
┌────────▼─────────┐
│  Set ENV vars    │  Configure email credentials
└────────┬─────────┘
         │
┌────────▼─────────┐
│  Deploy          │  Automatic from GitHub
└────────┬─────────┘
         │
┌────────▼─────────┐
│  Live website!   │  https://savoria.up.railway.app
└──────────────────┘


═══════════════════════════════════════════════════════════════════
                         FILE STRUCTURE
═══════════════════════════════════════════════════════════════════

restaurant/
│
├── 📄 Frontend Files
│   ├── index.html (Home page with hero slideshow)
│   ├── pages/
│   │   ├── about.html (Restaurant story)
│   │   ├── menu.html (Food menu with filters)
│   │   ├── reservations.html (Booking form) ⭐ API
│   │   ├── contact.html (Contact form) ⭐ API
│   │   ├── gallery.html (Photo gallery)
│   │   ├── events.html (Event inquiries) ⭐ API
│   │   ├── blog.html (Blog listing)
│   │   └── blog-post.html (Single post)
│   ├── css/
│   │   └── style.css (All styling)
│   └── js/
│       └── script.js (Frontend + API calls) ⭐ Updated
│
├── 🖥️ Backend Files
│   ├── server.js (Express server) ⭐ NEW
│   ├── package.json (Dependencies) ⭐ NEW
│   ├── .env.example (Config template) ⭐ NEW
│   └── savoria.db (SQLite database - auto-created)
│
├── 📚 Documentation
│   ├── README.md (Main documentation)
│   ├── BACKEND-README.md (Backend guide) ⭐ NEW
│   ├── FULLSTACK-SUMMARY.md (Overview) ⭐ NEW
│   ├── QUICK-START.md (Quick reference) ⭐ NEW
│   └── PRESENTATION-GUIDE.md (Class presentation)
│
└── 🧪 Testing
    └── api-test.html (API testing page) ⭐ NEW


═══════════════════════════════════════════════════════════════════
                         SECURITY NOTES
═══════════════════════════════════════════════════════════════════

✓ Environment variables for sensitive data (.env)
✓ .gitignore prevents committing secrets
✓ CORS enabled for frontend/backend communication
✓ Input validation on both frontend and backend
✓ SQL injection prevention (parameterized queries)
✓ Email credentials stored securely

⚠️ For Production:
  - Use HTTPS (not HTTP)
  - Add rate limiting
  - Implement authentication for admin routes
  - Use production database (PostgreSQL/MySQL)
  - Set up proper email service (SendGrid, etc.)


═══════════════════════════════════════════════════════════════════

This architecture gives you a complete, production-ready full-stack
application that will impress your class and could actually be used
by a real restaurant!

```
