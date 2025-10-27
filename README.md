# 🍽️ Savoria Restaurant

Full-stack restaurant website with a modern frontend (HTML/CSS/JS) and a complete Node.js + Express + SQLite backend for reservations, contact forms, newsletter subscriptions, and event inquiries.

**🌐 Live Demo:** https://savoria-restaurant-production.up.railway.app/

## ✨ Highlights

- 10+ pages: Home, About, Menu, Reservations, Gallery, Events, Blog, Blog Post, Contact, 404
- Responsive design with smooth animations and dark mode
- Real database (SQLite) with CRUD APIs and an admin dashboard
- Optional email notifications via Nodemailer

## 🛠️ Tech Stack

- Frontend: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, AOS, GLightbox, Font Awesome, Google Fonts
- Backend: Node.js, Express.js, SQLite3, Nodemailer, CORS, body-parser

## 📁 Project Structure

```
.
├── index.html
├── admin-dashboard.html
├── server.js
├── package.json
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── food/
│   ├── interior/
│   └── team/
└── pages/
    ├── about.html
    ├── menu.html
    ├── reservations.html
    ├── gallery.html
    ├── events.html
    ├── blog.html
    ├── blog-post.html
    └── contact.html
```

## 🚀 Quick Start

Requirements: Node.js 14+

1. Install dependencies

```bash
npm install
```

2. (Optional) Configure email notifications

Create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RESTAURANT_EMAIL=restaurant@savoria.com
NODE_ENV=production
```

Note: The site works perfectly without email configuration.

3. Start the server

```bash
npm start
```

4. Open the site

```
http://localhost:3000
```

5. Access admin dashboard

```
http://localhost:3000/admin-dashboard.html
```

## 📡 API Overview

All endpoints are prefixed with `/api`:

- POST /api/reservations — Create reservation (returns confirmation number)
- GET /api/reservations — List reservations (admin)
- GET /api/reservations/:id — Get a reservation by ID
- PUT /api/reservations/:id — Update reservation status
- DELETE /api/reservations/:id — Delete reservation
- POST /api/contact — Submit contact form
- GET /api/contact — List contact submissions (admin)
- DELETE /api/contact/:id — Delete contact submission
- POST /api/newsletter/subscribe — Subscribe to newsletter
- GET /api/newsletter/subscribers — List subscribers (admin)
- DELETE /api/newsletter/subscribers/:id — Remove subscriber
- POST /api/events/inquiry — Submit event inquiry
- GET /api/events/inquiries — List event inquiries (admin)
- DELETE /api/events/inquiries/:id — Delete event inquiry
- GET /api/health — Health check

## 🧪 Troubleshooting

- Port already in use: Stop the other process or change the PORT environment variable
- Database issues: Delete `savoria.db` and restart (it will be auto-recreated)

## 🚀 Deployment

The site is deployed on Railway with persistent SQLite storage. You can deploy your own copy:

1. Fork this repository
2. Sign up at [Railway](https://railway.app)
3. Create a new project from your GitHub fork
4. Railway will automatically detect Node.js and deploy
5. (Optional) Add environment variables for email functionality

## 📄 License

MIT License — free to use for your own projects.

## 🙏 Credits

Built as a class project to showcase full‑stack web development skills.
