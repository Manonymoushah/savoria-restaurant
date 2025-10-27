# 🍽️ Savoria Restaurant - Full-Stack Website

> **An Award-Winning, Full-Featured Restaurant Website with Node.js Backend**

A modern, elegant, and fully responsive **full-stack** restaurant website featuring exceptional design, smooth animations, interactive elements, and a complete working backend with database integration. Built as a class project to showcase advanced web development skills.

## 🚀 Full-Stack Features

### **Frontend** (HTML/CSS/JavaScript)

- Bootstrap 5 responsive design
- Interactive forms and animations
- Dark mode toggle
- Multi-page architecture

### **Backend** (Node.js + Express)

- RESTful API endpoints
- SQLite database for data persistence
- Email notifications (reservation confirmations)
- Form processing and validation

### **Database** (SQLite)

- Reservations management
- Contact form submissions
- Newsletter subscribers
- Event inquiries

## ✨ Features

### 🎨 Design & Aesthetics

- **Modern Fine Dining Theme**: Elegant color scheme (Gold #d4af37 + Black #1a1a1a)
- **Glassmorphism Effects**: Frosted glass cards and overlays
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Dark Mode Toggle**: Switch between light and dark themes
- **Parallax Scrolling**: Immersive visual effects on scroll
- **Responsive Design**: Mobile-first approach, works on all devices

### 📄 Pages

1. **index.html** - Home Page

   - Full-screen hero with automatic slideshow
   - Featured menu items with hover effects
   - Quick reservation widget
   - Upcoming events showcase
   - Testimonials carousel
   - Newsletter signup

2. **about.html** - About Us

   - Restaurant story and mission
   - Interactive timeline of milestones
   - Chef profiles with photos
   - Awards and recognition
   - Team photos gallery

3. **menu.html** - Menu

   - Tabbed sections (Appetizers, Mains, Desserts, Beverages, Wine)
   - Dietary preference filters (Vegan, Gluten-Free, Chef's Pick)
   - Animated menu items with pricing
   - Print/download menu functionality

4. **reservations.html** - Reservations

   - Multi-step form with progress indicator
   - Date picker with unavailable dates
   - Time slot selection
   - Real-time form validation
   - Confirmation modal with confetti animation
   - Cancellation policy FAQ

5. **gallery.html** - Photo Gallery

   - Filterable categories (Food, Interior, Events, Team)
   - Lightbox for full-size viewing (GLightbox)
   - Masonry grid layout
   - Smooth hover animations

6. **events.html** - Events & Catering

   - Event packages showcase
   - Inquiry form
   - Capacity information
   - Past events highlights

7. **blog.html** - Blog

   - Blog post cards with excerpts
   - Category badges
   - Pagination
   - Read time estimates

8. **blog-post.html** - Individual Blog Post

   - Full article layout
   - Social sharing buttons
   - Related content suggestions

9. **contact.html** - Contact

   - Contact form with validation
   - Google Maps integration
   - Operating hours
   - FAQ accordion
   - Parking directions

10. **404.html** - Custom Error Page
    - Playful food-themed puns
    - Animated design
    - Quick navigation links

### 🚀 Interactive Features

- **Live Availability Counter**: Real-time table availability simulation
- **Animated Reserve Button**: Pulse animation effect
- **Toast Notifications**: Success/error messages for form submissions
- **Confetti Effect**: Celebration animation for newsletter signup
- **Smooth Scroll**: Animated scrolling between sections
- **Back to Top Button**: Auto-appearing scroll-to-top button
- **Sticky Navigation**: Shrinks and changes opacity on scroll
- **Active Page Indicator**: Highlights current page in navigation
- **Keyboard Navigation**: Full accessibility support
- **Skip to Content**: Accessibility skip link

### 🛠️ Technologies Used

#### Frontend Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, flexbox, grid
- **JavaScript (ES6+)**: Vanilla JS with async/await for API calls
- **Bootstrap 5.3.2**: Responsive grid and components

#### Backend Technologies

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **SQLite3**: Lightweight database
- **Nodemailer**: Email sending
- **CORS**: Cross-origin resource sharing
- **Body-Parser**: Request body parsing

#### Libraries & Plugins

- **Font Awesome**: Icons (v6.5.1)
- **Google Fonts**: Playfair Display + Lato
- **Flatpickr**: Date picker for reservations
- **GLightbox**: Image lightbox gallery
- **Bootstrap Bundle**: Includes Popper.js

### 📁 Project Structure

```
/restaurant
  ├── index.html              # Home page
  ├── 404.html                # Custom error page
  ├── server.js               # Node.js backend server ⭐ NEW
  ├── package.json            # Node dependencies ⭐ NEW
  ├── .env.example            # Environment variables template ⭐ NEW
  ├── .gitignore              # Git ignore file ⭐ NEW
  ├── start.sh                # Quick start script ⭐ NEW
  ├── api-test.html           # API testing page ⭐ NEW
  ├── README.md               # This file
  ├── BACKEND-README.md       # Backend documentation ⭐ NEW
  ├── PRESENTATION-GUIDE.md   # Class presentation guide
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
```

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
