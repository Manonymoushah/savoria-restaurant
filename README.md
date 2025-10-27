# 🍽️ Savoria Restaurant - Full-Stack Website# 🍽️ Savoria Restaurant - Full-Stack Website

A modern, elegant restaurant website with a complete Node.js backend, SQLite database, and beautiful responsive frontend.> **An Award-Winning, Full-Featured Restaurant Website with Node.js Backend**

## 🚀 FeaturesA modern, elegant, and fully responsive **full-stack** restaurant website featuring exceptional design, smooth animations, interactive elements, and a complete working backend with database integration. Built as a class project to showcase advanced web development skills.

- **10 Pages**: Home, About, Menu, Reservations, Gallery, Events, Blog, Contact, 404## 🚀 Full-Stack Features

- **Working Backend**: Node.js + Express + SQLite

- **Real Database**: All reservations, contacts, and subscriptions saved permanently### **Frontend** (HTML/CSS/JavaScript)

- **Admin Dashboard**: View all data in real-time

- **Email Notifications**: Automated confirmation emails- Bootstrap 5 responsive design

- **Responsive Design**: Works on all devices- Interactive forms and animations

- **Dark Mode**: Toggle between light and dark themes- Dark mode toggle

- Multi-page architecture

## 🛠️ Tech Stack

### **Backend** (Node.js + Express)

**Frontend:**

- HTML5, CSS3, JavaScript (ES6+)- RESTful API endpoints

- Bootstrap 5.3.2- SQLite database for data persistence

- Font Awesome 6.5.1- Email notifications (reservation confirmations)

- Google Fonts (Playfair Display + Lato)- Form processing and validation

**Backend:**### **Database** (SQLite)

- Node.js

- Express.js- Reservations management

- SQLite3- Contact form submissions

- Nodemailer (email)- Newsletter subscribers

- CORS, Body-Parser- Event inquiries

## 📦 Quick Start## ✨ Features

### Development (Local)### 🎨 Design & Aesthetics

````bash- **Modern Fine Dining Theme**: Elegant color scheme (Gold #d4af37 + Black #1a1a1a)

# Install dependencies- **Glassmorphism Effects**: Frosted glass cards and overlays

npm install- **Smooth Animations**: AOS (Animate On Scroll) library integration

- **Dark Mode Toggle**: Switch between light and dark themes

# Start server- **Parallax Scrolling**: Immersive visual effects on scroll

npm start- **Responsive Design**: Mobile-first approach, works on all devices



# Open browser### 📄 Pages

http://localhost:3000

```1. **index.html** - Home Page



### Deploy to Cloud   - Full-screen hero with automatic slideshow

   - Featured menu items with hover effects

```bash   - Quick reservation widget

# Push to GitHub   - Upcoming events showcase

git push origin main   - Testimonials carousel

   - Newsletter signup

# Deploy to Railway (recommended)

# Go to railway.app → New Project → Deploy from GitHub2. **about.html** - About Us

````

- Restaurant story and mission

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions. - Interactive timeline of milestones

- Chef profiles with photos

## 📁 Project Structure - Awards and recognition

- Team photos gallery

````

/restaurant3. **menu.html** - Menu

  ├── index.html              # Home page

  ├── server.js               # Backend server   - Tabbed sections (Appetizers, Mains, Desserts, Beverages, Wine)

  ├── admin-dashboard.html    # Admin panel   - Dietary preference filters (Vegan, Gluten-Free, Chef's Pick)

  ├── api-test.html           # API testing   - Animated menu items with pricing

  ├── /css   - Print/download menu functionality

  │   └── style.css           # All styles

  ├── /js4. **reservations.html** - Reservations

  │   └── script.js           # Frontend logic + API calls

  ├── /pages   - Multi-step form with progress indicator

  │   ├── about.html   - Date picker with unavailable dates

  │   ├── menu.html   - Time slot selection

  │   ├── reservations.html   - Real-time form validation

  │   ├── gallery.html   - Confirmation modal with confetti animation

  │   ├── events.html   - Cancellation policy FAQ

  │   ├── blog.html

  │   ├── blog-post.html5. **gallery.html** - Photo Gallery

  │   └── contact.html

  └── savoria.db              # SQLite database   - Filterable categories (Food, Interior, Events, Team)

```   - Lightbox for full-size viewing (GLightbox)

   - Masonry grid layout

## 🔌 API Endpoints   - Smooth hover animations



| Endpoint | Method | Description |6. **events.html** - Events & Catering

|----------|--------|-------------|

| `/api/health` | GET | Server health check |   - Event packages showcase

| `/api/reservations` | POST | Create reservation |   - Inquiry form

| `/api/reservations` | GET | Get all reservations |   - Capacity information

| `/api/contact` | POST | Submit contact form |   - Past events highlights

| `/api/contact` | GET | Get all contacts |

| `/api/newsletter/subscribe` | POST | Subscribe newsletter |7. **blog.html** - Blog

| `/api/newsletter/subscribers` | GET | Get all subscribers |

| `/api/events/inquiry` | POST | Submit event inquiry |   - Blog post cards with excerpts

| `/api/events/inquiries` | GET | Get all inquiries |   - Category badges

   - Pagination

## 🎯 Key Features   - Read time estimates



### For Users8. **blog-post.html** - Individual Blog Post

- Make reservations with confirmation numbers

- Contact restaurant via form   - Full article layout

- Subscribe to newsletter   - Social sharing buttons

- Inquire about events and catering   - Related content suggestions

- View menu, gallery, and blog

9. **contact.html** - Contact

### For Admin

- View all reservations in dashboard   - Contact form with validation

- See contact submissions   - Google Maps integration

- Manage newsletter subscribers   - Operating hours

- Track event inquiries   - FAQ accordion

- All data stored in SQLite database   - Parking directions



## 📧 Email Configuration (Optional)10. **404.html** - Custom Error Page

    - Playful food-themed puns

Create a `.env` file:    - Animated design

    - Quick navigation links

```env

EMAIL_USER=your-email@gmail.com### 🚀 Interactive Features

EMAIL_PASS=your-app-password

RESTAURANT_EMAIL=restaurant@savoria.com- **Live Availability Counter**: Real-time table availability simulation

```- **Animated Reserve Button**: Pulse animation effect

- **Toast Notifications**: Success/error messages for form submissions

Get Gmail App Password: https://myaccount.google.com/apppasswords- **Confetti Effect**: Celebration animation for newsletter signup

- **Smooth Scroll**: Animated scrolling between sections

## 🧪 Testing- **Back to Top Button**: Auto-appearing scroll-to-top button

- **Sticky Navigation**: Shrinks and changes opacity on scroll

### Test API- **Active Page Indicator**: Highlights current page in navigation

```bash- **Keyboard Navigation**: Full accessibility support

# Open API test page- **Skip to Content**: Accessibility skip link

http://localhost:3000/api-test.html

```### 🛠️ Technologies Used



### Test Admin Dashboard#### Frontend Technologies

```bash

# Open admin panel- **HTML5**: Semantic markup

http://localhost:3000/admin-dashboard.html- **CSS3**: Custom properties, animations, flexbox, grid

```- **JavaScript (ES6+)**: Vanilla JS with async/await for API calls

- **Bootstrap 5.3.2**: Responsive grid and components

### Test Database

```bash#### Backend Technologies

# View database

sqlite3 savoria.db "SELECT * FROM reservations;"- **Node.js**: JavaScript runtime

```- **Express.js**: Web application framework

- **SQLite3**: Lightweight database

## 📚 Documentation- **Nodemailer**: Email sending

- **CORS**: Cross-origin resource sharing

- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy to Railway/Vercel- **Body-Parser**: Request body parsing

- [BACKEND-README.md](BACKEND-README.md) - Backend API documentation

- [PRESENTATION-GUIDE.md](PRESENTATION-GUIDE.md) - Class presentation tips#### Libraries & Plugins



## 🎓 Class Project- **Font Awesome**: Icons (v6.5.1)

- **Google Fonts**: Playfair Display + Lato

This full-stack application demonstrates:- **Flatpickr**: Date picker for reservations

- ✅ Modern web development with Node.js- **GLightbox**: Image lightbox gallery

- ✅ RESTful API design- **Bootstrap Bundle**: Includes Popper.js

- ✅ Database integration (CRUD operations)

- ✅ Frontend-backend communication### 📁 Project Structure

- ✅ Responsive design

- ✅ Production deployment```

/restaurant

## 📄 License  ├── index.html              # Home page

  ├── 404.html                # Custom error page

MIT License - Feel free to use for your own projects!  ├── server.js               # Node.js backend server ⭐ NEW

  ├── package.json            # Node dependencies ⭐ NEW

## 🙏 Acknowledgments  ├── .env.example            # Environment variables template ⭐ NEW

  ├── .gitignore              # Git ignore file ⭐ NEW

Built with ❤️ as a class project to showcase full-stack web development skills.  ├── start.sh                # Quick start script ⭐ NEW

  ├── api-test.html           # API testing page ⭐ NEW

---  ├── README.md               # This file

  ├── BACKEND-README.md       # Backend documentation ⭐ NEW

**Live Demo:** [Coming soon - deploy to see your URL here!]  ├── PRESENTATION-GUIDE.md   # Class presentation guide

  ├── /css
  │   └── style.css           # All custom styles (1497 lines)
  ├── /js
  │   └── script.js           # Frontend + API integration (700+ lines) ⭐ UPDATED
  ├── /images
  │   ├── /food               # Food photography
  │   ├── /interior           # Restaurant interior shots
  │   └── /team               # Staff photos
  └── /pages
      ├── about.html          # About us page
      ├── menu.html           # Menu page
      ├── reservations.html   # Reservation system
      ├── gallery.html        # Photo gallery
      ├── events.html         # Events & catering
      ├── blog.html           # Blog listing
      ├── blog-post.html      # Individual blog post
      └── contact.html        # Contact page
````

### 🗄️ Database Schema

**SQLite Database: `savoria.db`** (auto-created on first run)

1. **reservations** - Customer reservations
2. **contact_submissions** - Contact form messages
3. **newsletter_subscribers** - Email subscribers
4. **event_inquiries** - Event booking requests

### 🎯 Bootstrap Components Used

- Navbar (with collapse)
- Cards
- Carousel
- Accordion
- Modal (for confirmations)
- Toast notifications
- Tabs & Pills
- Forms & Validation
- Grid System (Container, Row, Col)
- Buttons
- Badges
- Alerts

### 🎨 Custom CSS Features

- CSS Custom Properties (Variables)
- Keyframe Animations
- Transitions & Transforms
- Flexbox & Grid Layouts
- Media Queries (Responsive)
- Pseudo-elements (::before, ::after)
- Box Shadows & Gradients
- Backdrop Filters (Glassmorphism)
- Print Styles (@media print)

### 💻 JavaScript Functionality

#### Frontend Features

- Dark mode toggle with persistent state (in-memory)
- Smooth scroll for anchor links
- Lazy loading for images
- Debounced window resize handler
- Active navigation highlighting
- Error handling and logging

#### Backend Integration ⭐ NEW

- **API Client**: Fetch-based HTTP requests
- **Reservation System**: Full booking workflow with confirmations
- **Contact Forms**: Direct database storage
- **Newsletter**: Subscription management
- **Email Notifications**: Automated confirmations
- **Error Handling**: User-friendly error messages

#### Page-Specific

- **Home**: Hero slideshow, availability counter, newsletter subscription
- **Menu**: Dietary filters, tab switching
- **Reservations**: Multi-step form, API submission, confirmation numbers
- **Gallery**: Category filtering, lightbox initialization
- **Contact**: Form validation and API submission
- **Events**: Event inquiry submission

#### Helper Functions

- Email validation
- Phone validation
- Date validation
- Toast notification system
- Confetti animation creator
- Back-to-top button
- API call wrapper (async/await) ⭐ NEW

### ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- Skip-to-content link
- Color contrast compliance
- Screen reader friendly

### 📱 Responsive Breakpoints

```css
- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: 768px - 992px
- Large Desktop: 992px - 1200px
- Extra Large: > 1200px
```

### 🔍 SEO Optimization

- Meta descriptions on all pages
- Semantic HTML structure
- Schema.org Restaurant markup
- Open Graph tags ready
- Descriptive alt text
- Clean URL structure
- Fast load times

### 🚀 Performance Optimizations

- CSS loaded in `<head>`
- JavaScript loaded before `</body>`
- CDN-hosted libraries
- Lazy loading for images
- Debounced scroll/resize handlers
- Efficient CSS selectors
- Minimal DOM manipulation

### � Quick Start

#### Option 1: Frontend Only (Static)

1. **Open index.html** in a web browser
2. Browse the website (forms won't save data)

#### Option 2: Full-Stack (Recommended) ⭐

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Configure Email (Optional)**

   ```bash
   cp .env.example .env
   # Edit .env with your email credentials
   ```

3. **Start the Server**

   ```bash
   npm start
   # OR use the quick start script
   ./start.sh
   ```

4. **Open in Browser**

   ```
   http://localhost:3000
   ```

5. **Test the API**
   ```
   Open: http://localhost:3000/api-test.html
   ```

#### Quick Commands

```bash
# Install dependencies
npm install

# Start server (production)
npm start

# Start server (development with auto-reload)
npm run dev

# Test API endpoint
curl http://localhost:3000/api/health
```

### 📡 API Endpoints

All endpoints are prefixed with `/api`:

- `POST /api/reservations` - Create a reservation
- `GET /api/reservations` - Get all reservations (admin)
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/events/inquiry` - Submit event inquiry
- `GET /api/health` - Health check

**Full API Documentation**: See `BACKEND-README.md`

### 🌐 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ⚠️ IE11 (Partial - Bootstrap 5 doesn't fully support)

### 🎓 Educational Value

This project demonstrates:

- Advanced Bootstrap 5 usage and customization
- Modern CSS techniques (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (DOM manipulation, event handling)
- Responsive design best practices
- UI/UX design principles
- Accessibility standards
- Project organization and structure

### 🎨 Color Palette

```css
Primary Gold:      #d4af37
Primary Dark:      #b8941f
Primary Light:     #e8d192
Secondary Black:   #1a1a1a
Secondary Light:   #2d2d2d
Accent White:      #ffffff
Medium Gray:       #6c757d
```

### 📝 Typography

- **Headings**: Playfair Display (Serif) - Elegant, Classic
- **Body**: Lato (Sans-serif) - Clean, Readable

### 🤝 Credits

**Design Inspiration:**

- Nobelhart & Schmutzig
- MAIDO By Mitsuharu
- The Chairman
- Federalist Pig
- Sweetgreen

**Images:**

- Unsplash (placeholder images)
- Pravatar (avatar placeholders)

**Icons:**

- Font Awesome

### 📄 License

This is a student project created for educational purposes. Feel free to use it as inspiration for your own projects!

### 👨‍💻 Author

**[Your Name]**

- Created as a class project
- Demonstrates advanced web development skills
- Award-winning design and functionality

### 🌟 Highlights for Presentation

When showcasing this project, emphasize:

1. **Multi-step reservation form** with progress indicators
2. **Dark mode implementation** without localStorage
3. **Glassmorphism effects** and modern design trends
4. **Filterable menu** and gallery with smooth animations
5. **Custom JavaScript** - no jQuery or heavy frameworks
6. **Fully responsive** - works beautifully on all devices
7. **Accessibility features** - keyboard navigation, ARIA labels
8. **Performance** - fast loading, optimized code

### 📞 Support

For questions about this project, please refer to the contact page or reach out to your instructor.

---

**Built with ❤️ and lots of ☕ for [Your Class Name]**

_Remember: This restaurant website is a demonstration project. All content is fictional and for educational purposes only._
