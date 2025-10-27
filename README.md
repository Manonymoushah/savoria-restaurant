# 🍽️ Savoria Restaurant - Full-Stack Website# 🍽️ Savoria Restaurant - Full-Stack Website# 🍽️ Savoria Restaurant - Full-Stack Website



> **A modern, elegant restaurant website with complete Node.js backend and SQLite database**A modern, elegant restaurant website with a complete Node.js backend, SQLite database, and beautiful responsive frontend.> **An Award-Winning, Full-Featured Restaurant Website with Node.js Backend**



An award-winning full-stack restaurant website featuring exceptional design, smooth animations, interactive elements, and a complete working backend with database integration. Built to showcase advanced web development skills.## 🚀 FeaturesA modern, elegant, and fully responsive **full-stack** restaurant website featuring exceptional design, smooth animations, interactive elements, and a complete working backend with database integration. Built as a class project to showcase advanced web development skills.



---- **10 Pages**: Home, About, Menu, Reservations, Gallery, Events, Blog, Contact, 404## 🚀 Full-Stack Features



## ✨ Features- **Working Backend**: Node.js + Express + SQLite



### 🎨 Frontend- **Real Database**: All reservations, contacts, and subscriptions saved permanently### **Frontend** (HTML/CSS/JavaScript)

- **10 Beautiful Pages**: Home, About, Menu, Reservations, Gallery, Events, Blog, Contact, 404

- **Responsive Design**: Mobile-first approach, works on all devices- **Admin Dashboard**: View all data in real-time

- **Dark Mode Toggle**: Switch between light and dark themes

- **Smooth Animations**: AOS library with parallax effects- **Email Notifications**: Automated confirmation emails- Bootstrap 5 responsive design

- **Interactive Forms**: Real-time validation with loading states

- **Glassmorphism Effects**: Modern frosted glass UI elements- **Responsive Design**: Works on all devices- Interactive forms and animations



### 🔧 Backend- **Dark Mode**: Toggle between light and dark themes- Dark mode toggle

- **RESTful API**: 14 endpoints for complete CRUD operations

- **SQLite Database**: Persistent data storage- Multi-page architecture

- **Admin Dashboard**: View and manage all data in real-time

- **Email Notifications**: Automated confirmation emails (optional)## 🛠️ Tech Stack

- **Form Processing**: Reservation, contact, newsletter, events

### **Backend** (Node.js + Express)

### 📊 Database Tables

1. **reservations** - Customer bookings with confirmation numbers**Frontend:**

2. **contact_submissions** - Contact form messages

3. **newsletter_subscribers** - Email subscriber list- HTML5, CSS3, JavaScript (ES6+)- RESTful API endpoints

4. **event_inquiries** - Event and catering requests

- Bootstrap 5.3.2- SQLite database for data persistence

---

- Font Awesome 6.5.1- Email notifications (reservation confirmations)

## 🛠️ Tech Stack

- Google Fonts (Playfair Display + Lato)- Form processing and validation

**Frontend:**

- HTML5, CSS3, JavaScript ES6+**Backend:**### **Database** (SQLite)

- Bootstrap 5.3.2

- Font Awesome 6.5.1- Node.js

- Google Fonts (Playfair Display + Lato)

- AOS (Animate On Scroll)- Express.js- Reservations management

- GLightbox (Image Gallery)

- SQLite3- Contact form submissions

**Backend:**

- Node.js + Express.js- Nodemailer (email)- Newsletter subscribers

- SQLite3

- Nodemailer (Email)- CORS, Body-Parser- Event inquiries

- CORS, Body-Parser

## 📦 Quick Start## ✨ Features

---

### Development (Local)### 🎨 Design & Aesthetics

## 🚀 Quick Start

````bash- **Modern Fine Dining Theme**: Elegant color scheme (Gold #d4af37 + Black #1a1a1a)

### 1. Install Dependencies

```bash# Install dependencies- **Glassmorphism Effects**: Frosted glass cards and overlays

npm install

```npm install- **Smooth Animations**: AOS (Animate On Scroll) library integration



### 2. Configure Email (Optional)- **Dark Mode Toggle**: Switch between light and dark themes

Create a `.env` file:

```env# Start server- **Parallax Scrolling**: Immersive visual effects on scroll

EMAIL_USER=your-email@gmail.com

EMAIL_PASS=your-gmail-app-passwordnpm start- **Responsive Design**: Mobile-first approach, works on all devices

RESTAURANT_EMAIL=restaurant@savoria.com

NODE_ENV=development

```

# Open browser### 📄 Pages

> Get Gmail App Password: https://myaccount.google.com/apppasswords

http://localhost:3000

**Note:** Email is optional - the site works perfectly without it!

```1. **index.html** - Home Page

### 3. Start the Server

```bash

npm start

```### Deploy to Cloud   - Full-screen hero with automatic slideshow



### 4. Open in Browser   - Featured menu items with hover effects

```

http://localhost:3000```bash   - Quick reservation widget

```

# Push to GitHub   - Upcoming events showcase

### 5. Access Admin Dashboard

```git push origin main   - Testimonials carousel

http://localhost:3000/admin-dashboard.html

```   - Newsletter signup



---# Deploy to Railway (recommended)



## 📁 Project Structure# Go to railway.app → New Project → Deploy from GitHub2. **about.html** - About Us



```````

/restaurant

  ├── index.html              # Home page- Restaurant story and mission

  ├── server.js               # Backend server (570+ lines)

  ├── admin-dashboard.html    # Admin panel with CRUD opsSee [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions. - Interactive timeline of milestones

  ├── savoria.db              # SQLite database (auto-created)

  ├── package.json            # Dependencies- Chef profiles with photos

  ├── /css

  │   └── style.css           # All styles (1500+ lines)## 📁 Project Structure - Awards and recognition

  ├── /js

  │   └── script.js           # Frontend + API (800+ lines)- Team photos gallery

  ├── /images

  │   ├── /food````

  │   ├── /interior

  │   └── /team/restaurant3. **menu.html** - Menu

  └── /pages

      ├── about.html  ├── index.html              # Home page

      ├── menu.html

      ├── reservations.html  ├── server.js               # Backend server   - Tabbed sections (Appetizers, Mains, Desserts, Beverages, Wine)

      ├── gallery.html

      ├── events.html  ├── admin-dashboard.html    # Admin panel   - Dietary preference filters (Vegan, Gluten-Free, Chef's Pick)

      ├── blog.html

      ├── blog-post.html  ├── api-test.html           # API testing   - Animated menu items with pricing

      ├── contact.html

      └── 404.html  ├── /css   - Print/download menu functionality

```

  │   └── style.css           # All styles

---

  ├── /js4. **reservations.html** - Reservations

## 🔌 API Endpoints

  │   └── script.js           # Frontend logic + API calls

| Endpoint | Method | Description |

|----------|--------|-------------|  ├── /pages   - Multi-step form with progress indicator

| `/api/health` | GET | Server health check |

| `/api/reservations` | POST | Create reservation |  │   ├── about.html   - Date picker with unavailable dates

| `/api/reservations` | GET | Get all reservations |

| `/api/reservations/:id` | PUT | Update reservation status |  │   ├── menu.html   - Time slot selection

| `/api/reservations/:id` | DELETE | Delete reservation |

| `/api/contact` | POST | Submit contact form |  │   ├── reservations.html   - Real-time form validation

| `/api/contact` | GET | Get all contacts |

| `/api/contact/:id` | DELETE | Delete contact |  │   ├── gallery.html   - Confirmation modal with confetti animation

| `/api/newsletter/subscribe` | POST | Subscribe to newsletter |

| `/api/newsletter/subscribers` | GET | Get all subscribers |  │   ├── events.html   - Cancellation policy FAQ

| `/api/newsletter/subscribers/:id` | DELETE | Delete subscriber |

| `/api/events/inquiry` | POST | Submit event inquiry |  │   ├── blog.html

| `/api/events/inquiries` | GET | Get all inquiries |

| `/api/events/inquiries/:id` | DELETE | Delete inquiry |  │   ├── blog-post.html5. **gallery.html** - Photo Gallery



**Full API Documentation:** See [BACKEND-README.md](BACKEND-README.md)  │   └── contact.html



---  └── savoria.db              # SQLite database   - Filterable categories (Food, Interior, Events, Team)



## 🎯 Key Features by Page```   - Lightbox for full-size viewing (GLightbox)



### 1. **Home** (`index.html`)   - Masonry grid layout

- Full-screen hero with automatic slideshow

- Live availability counter## 🔌 API Endpoints   - Smooth hover animations

- Featured menu items with hover effects

- Upcoming events showcase

- Testimonials carousel

- Newsletter signup with backend integration| Endpoint | Method | Description |6. **events.html** - Events & Catering



### 2. **About** (`about.html`)|----------|--------|-------------|

- Restaurant story and mission

- Interactive timeline| `/api/health` | GET | Server health check |   - Event packages showcase

- Chef profiles with photos

- Awards and recognition| `/api/reservations` | POST | Create reservation |   - Inquiry form



### 3. **Menu** (`menu.html`)| `/api/reservations` | GET | Get all reservations |   - Capacity information

- Tabbed sections (Appetizers, Mains, Desserts, Beverages, Wine)

- Dietary filters (Vegan, Gluten-Free, Chef's Pick)| `/api/contact` | POST | Submit contact form |   - Past events highlights

- Animated items with pricing

- Print/download functionality| `/api/contact` | GET | Get all contacts |



### 4. **Reservations** (`reservations.html`)| `/api/newsletter/subscribe` | POST | Subscribe newsletter |7. **blog.html** - Blog

- Multi-step form with progress indicator

- Date picker with unavailable dates| `/api/newsletter/subscribers` | GET | Get all subscribers |

- Real-time validation

- Confirmation modal with confetti| `/api/events/inquiry` | POST | Submit event inquiry |   - Blog post cards with excerpts

- Real confirmation numbers (SAV-000001)

- Saves to database via API| `/api/events/inquiries` | GET | Get all inquiries |   - Category badges



### 5. **Gallery** (`gallery.html`)   - Pagination

- Filterable categories

- Lightbox for full-size viewing## 🎯 Key Features   - Read time estimates

- Masonry grid layout

- Smooth hover animations



### 6. **Events** (`events.html`)### For Users8. **blog-post.html** - Individual Blog Post

- Event packages showcase

- Inquiry form connected to backend- Make reservations with confirmation numbers

- Capacity information

- Past events highlights- Contact restaurant via form   - Full article layout



### 7. **Contact** (`contact.html`)- Subscribe to newsletter   - Social sharing buttons

- Contact form with backend integration

- Google Maps integration- Inquire about events and catering   - Related content suggestions

- Operating hours

- FAQ accordion- View menu, gallery, and blog



### 8. **Admin Dashboard** (`admin-dashboard.html`)9. **contact.html** - Contact

- View all database data in real-time

- Statistics cards (total counts)### For Admin

- Delete entries with one click

- Update reservation status (pending ⇄ confirmed)- View all reservations in dashboard   - Contact form with validation

- Auto-refresh every 30 seconds

- Manual refresh buttons per table- See contact submissions   - Google Maps integration



---- Manage newsletter subscribers   - Operating hours



## 🧪 Testing- Track event inquiries   - FAQ accordion



### Test the API- All data stored in SQLite database   - Parking directions

```bash

# Open API test page

http://localhost:3000/api-test.html

## 📧 Email Configuration (Optional)10. **404.html** - Custom Error Page

# Or use curl

curl http://localhost:3000/api/health    - Playful food-themed puns

```

Create a `.env` file:    - Animated design

### Test Database

```bash    - Quick navigation links

# View reservations

sqlite3 savoria.db "SELECT * FROM reservations;"```env



# Count subscribersEMAIL_USER=your-email@gmail.com### 🚀 Interactive Features

sqlite3 savoria.db "SELECT COUNT(*) FROM newsletter_subscribers;"

```EMAIL_PASS=your-app-password



---RESTAURANT_EMAIL=restaurant@savoria.com- **Live Availability Counter**: Real-time table availability simulation



## 🌐 Deployment```- **Animated Reserve Button**: Pulse animation effect



### Deploy to Railway (Recommended)- **Toast Notifications**: Success/error messages for form submissions



Railway supports SQLite with persistent storage!Get Gmail App Password: https://myaccount.google.com/apppasswords- **Confetti Effect**: Celebration animation for newsletter signup



```bash- **Smooth Scroll**: Animated scrolling between sections

# 1. Push to GitHub

git push origin main## 🧪 Testing- **Back to Top Button**: Auto-appearing scroll-to-top button



# 2. Go to railway.app- **Sticky Navigation**: Shrinks and changes opacity on scroll

# 3. Create new project from GitHub

# 4. Deploy automatically!### Test API- **Active Page Indicator**: Highlights current page in navigation

```

```bash- **Keyboard Navigation**: Full accessibility support

**Full Deployment Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md)

# Open API test page- **Skip to Content**: Accessibility skip link

### Private Repository Note

http://localhost:3000/api-test.html

**✅ YES - Your deployed website will work even with a private GitHub repo!**

```### 🛠️ Technologies Used

Once deployed to Railway or Vercel:

- The website is **publicly accessible** on the internet

- Anyone with the URL can visit your site

- The GitHub repo can stay **private**### Test Admin Dashboard#### Frontend Technologies

- Only you can see the source code on GitHub

- The deployed site is independent of GitHub visibility```bash



**Example:**# Open admin panel- **HTML5**: Semantic markup

- GitHub Repo: `github.com/yourusername/savoria-restaurant` (🔒 Private)

- Live Site: `savoria-restaurant.up.railway.app` (🌐 Public)http://localhost:3000/admin-dashboard.html- **CSS3**: Custom properties, animations, flexbox, grid



---```- **JavaScript (ES6+)**: Vanilla JS with async/await for API calls



## 📚 Additional Documentation- **Bootstrap 5.3.2**: Responsive grid and components



- **[DEPLOYMENT.md](DEPLOYMENT.md)** - How to deploy to Railway/Vercel### Test Database

- **[BACKEND-README.md](BACKEND-README.md)** - Backend API documentation

- **[PRESENTATION-GUIDE.md](PRESENTATION-GUIDE.md)** - Class presentation tips```bash#### Backend Technologies



---# View database



## 🎨 Design Highlightssqlite3 savoria.db "SELECT * FROM reservations;"- **Node.js**: JavaScript runtime



**Color Palette:**```- **Express.js**: Web application framework

- Primary Gold: `#d4af37`

- Secondary Black: `#1a1a1a`- **SQLite3**: Lightweight database

- Accent Colors: Success, Warning, Danger badges

## 📚 Documentation- **Nodemailer**: Email sending

**Typography:**

- Headings: **Playfair Display** (Elegant Serif)- **CORS**: Cross-origin resource sharing

- Body: **Lato** (Clean Sans-serif)

- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy to Railway/Vercel- **Body-Parser**: Request body parsing

**Effects:**

- Glassmorphism cards- [BACKEND-README.md](BACKEND-README.md) - Backend API documentation

- Parallax scrolling

- Smooth page transitions- [PRESENTATION-GUIDE.md](PRESENTATION-GUIDE.md) - Class presentation tips#### Libraries & Plugins

- Hover animations

- Loading spinners

- Confetti celebrations

## 🎓 Class Project- **Font Awesome**: Icons (v6.5.1)

---

- **Google Fonts**: Playfair Display + Lato

## 🎓 Class Project Highlights

This full-stack application demonstrates:- **Flatpickr**: Date picker for reservations

This project demonstrates:

- ✅ Modern web development with Node.js- **GLightbox**: Image lightbox gallery

✅ Modern full-stack web development  

✅ RESTful API design and implementation  - ✅ RESTful API design- **Bootstrap Bundle**: Includes Popper.js

✅ Database integration (CRUD operations)  

✅ Frontend-backend communication  - ✅ Database integration (CRUD operations)

✅ Responsive design principles  

✅ Production-ready deployment  - ✅ Frontend-backend communication### 📁 Project Structure

✅ Clean, maintainable code structure  

- ✅ Responsive design

---

- ✅ Production deployment```

## 🤝 Support

/restaurant

Need help? Check out:

- [DEPLOYMENT.md](DEPLOYMENT.md) for deployment issues## 📄 License  ├── index.html              # Home page

- [BACKEND-README.md](BACKEND-README.md) for API questions

- [PRESENTATION-GUIDE.md](PRESENTATION-GUIDE.md) for demo tips  ├── 404.html                # Custom error page



---MIT License - Feel free to use for your own projects!  ├── server.js               # Node.js backend server ⭐ NEW



## 📄 License  ├── package.json            # Node dependencies ⭐ NEW



MIT License - Feel free to use for your own projects!## 🙏 Acknowledgments  ├── .env.example            # Environment variables template ⭐ NEW



---  ├── .gitignore              # Git ignore file ⭐ NEW



## 🙏 CreditsBuilt with ❤️ as a class project to showcase full-stack web development skills.  ├── start.sh                # Quick start script ⭐ NEW



**Built with:**  ├── api-test.html           # API testing page ⭐ NEW

- Bootstrap 5

- Font Awesome---  ├── README.md               # This file

- Google Fonts

- AOS Animation Library  ├── BACKEND-README.md       # Backend documentation ⭐ NEW

- GLightbox

**Live Demo:** [Coming soon - deploy to see your URL here!]  ├── PRESENTATION-GUIDE.md   # Class presentation guide

**Design Inspiration:**

- Modern fine dining restaurants  ├── /css

- Award-winning restaurant websites  │   └── style.css           # All custom styles (1497 lines)

  ├── /js

---  │   └── script.js           # Frontend + API integration (700+ lines) ⭐ UPDATED

  ├── /images

**Built with ❤️ as a class project to showcase full-stack web development skills**  │   ├── /food               # Food photography

  │   ├── /interior           # Restaurant interior shots

**Live Demo:** [Your deployed URL will go here after deployment!]  │   └── /team               # Staff photos

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
