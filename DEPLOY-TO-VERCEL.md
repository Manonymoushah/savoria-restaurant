# 🚀 Deploy Savoria Restaurant to Vercel

## ✅ Why Vercel is Perfect for Your Project

- ✅ **Free tier** - No credit card needed
- ✅ **Automatic deployments** - Push to GitHub, it deploys
- ✅ **Fast CDN** - Website loads super fast worldwide
- ✅ **HTTPS included** - Free SSL certificate
- ✅ **Custom domain** - savoria-restaurant.vercel.app
- ✅ **Easy setup** - Deploy in 5 minutes

---

## 📋 Prerequisites

1. ✅ GitHub account (create at github.com if you don't have)
2. ✅ Vercel account (create at vercel.com - use GitHub to sign in)
3. ✅ Your restaurant project (you already have this!)

---

## 🚀 Step-by-Step Deployment Guide

### **Step 1: Initialize Git Repository** (If not done)

```bash
cd /home/manthan/repos/restaurant

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Savoria Restaurant full-stack website"
```

### **Step 2: Create GitHub Repository**

1. Go to **https://github.com/new**
2. Repository name: `savoria-restaurant`
3. Description: `Full-stack restaurant website with Node.js backend`
4. Choose **Public** (for free hosting)
5. **Don't** initialize with README (you already have files)
6. Click **"Create repository"**

### **Step 3: Push to GitHub**

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/savoria-restaurant.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Step 4: Deploy to Vercel**

#### **Option A: Using Vercel Website** (Easiest!)

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your GitHub account
4. Find **"savoria-restaurant"** repository
5. Click **"Import"**
6. **Configure Project:**
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: Leave default
   - Output Directory: Leave default
7. Click **"Deploy"**
8. Wait 2-3 minutes... ☕
9. **🎉 Your site is live!**

#### **Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? savoria-restaurant
# - Directory? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

## ⚠️ Important: SQLite on Vercel

### **Problem:** 
Vercel is **serverless** - each request runs in a new container. SQLite database changes won't persist between requests.

### **Solutions:**

#### **Option 1: Use Vercel Postgres** (Recommended for production)

```bash
# In your Vercel project dashboard:
# 1. Go to "Storage" tab
# 2. Create "Postgres" database
# 3. Get connection string
# 4. Update server.js to use Postgres
```

#### **Option 2: Use Railway + Vercel** (Split deployment)

```bash
# Deploy backend to Railway (keeps SQLite)
# Deploy frontend to Vercel
# Point frontend API calls to Railway URL
```

#### **Option 3: Use Supabase** (Free PostgreSQL)

```bash
# 1. Create Supabase account
# 2. Get database URL
# 3. Update server.js
```

#### **Option 4: Deploy Everything to Railway Instead**

```bash
# Railway supports SQLite and is similar to Vercel
# Go to railway.app
# Connect GitHub repo
# Deploy - keeps your SQLite database!
```

---

## 🎯 **RECOMMENDED: Deploy to Railway Instead!**

**Why Railway is better for your project:**
- ✅ Supports SQLite database
- ✅ No need to change your code
- ✅ Free tier included
- ✅ Easy as Vercel
- ✅ Persistent storage

### **Quick Railway Deployment:**

```bash
# 1. Go to https://railway.app
# 2. Sign in with GitHub
# 3. Click "New Project"
# 4. Select "Deploy from GitHub repo"
# 5. Choose savoria-restaurant
# 6. Railway auto-detects Node.js
# 7. Click "Deploy"
# 8. Done! Your SQLite database persists!
```

---

## 🔧 Environment Variables (Both Platforms)

### **Set these in your deployment platform:**

```env
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RESTAURANT_EMAIL=restaurant@savoria.com
PORT=3000
```

### **How to Set:**

**Vercel:**
1. Project Settings → Environment Variables
2. Add each variable
3. Redeploy

**Railway:**
1. Project → Variables
2. Add each variable
3. Auto-redeploys

---

## 📦 Files I Created for Deployment

✅ **vercel.json** - Vercel configuration
✅ **package.json** - Updated with build scripts
✅ **.gitignore** - Already exists

---

## 🧪 Testing After Deployment

Once deployed, test these URLs:

```
# Your live website
https://savoria-restaurant.vercel.app

# API health check
https://savoria-restaurant.vercel.app/api/health

# Admin dashboard
https://savoria-restaurant.vercel.app/admin-dashboard.html

# Test reservation
https://savoria-restaurant.vercel.app/pages/reservations.html
```

---

## 🎨 Custom Domain (Optional)

### **Free Vercel Domain:**
- Automatic: `savoria-restaurant.vercel.app`

### **Custom Domain:**
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Vercel Dashboard → Project → Settings → Domains
3. Add your domain
4. Update DNS records
5. Done!

---

## 🔄 Continuous Deployment

Once set up, every time you push to GitHub:

```bash
git add .
git commit -m "Updated menu items"
git push

# Vercel/Railway automatically detects and deploys!
# No manual deployment needed! 🎉
```

---

## 🚀 Quick Start Commands

```bash
# 1. Push to GitHub
cd /home/manthan/repos/restaurant
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/savoria-restaurant.git
git push -u origin main

# 2. Deploy to Railway (Recommended!)
# Go to railway.app → New Project → Deploy from GitHub → Select repo

# OR Deploy to Vercel
# Go to vercel.com/new → Import → Select repo

# 3. Set environment variables
# Add EMAIL_USER, EMAIL_PASS in dashboard

# 4. Done! Your site is live! 🎉
```

---

## 📊 Comparison: Vercel vs Railway

| Feature | Vercel | Railway |
|---------|--------|---------|
| SQLite Support | ❌ No (serverless) | ✅ Yes |
| Free Tier | ✅ Generous | ✅ $5/month credit |
| Setup | ✅ Super easy | ✅ Super easy |
| Speed | ✅ Very fast CDN | ✅ Fast |
| Best For | Static + API | Full apps with DB |
| **For Your Project** | ⚠️ Needs DB change | ✅ **RECOMMENDED** |

---

## 💡 My Recommendation

### **Best Option: Deploy to Railway**

1. Go to **https://railway.app**
2. Sign in with GitHub
3. New Project → Deploy from GitHub
4. Select savoria-restaurant
5. Add environment variables
6. **Done!** Your SQLite database works perfectly!

**URL will be:** `https://savoria-restaurant-production.up.railway.app`

---

## 🆘 Troubleshooting

### **"Database is read-only"**
- You're on Vercel → Switch to Railway or use Postgres

### **"Cannot find module"**
- Run: `npm install` before deploying
- Make sure package.json has all dependencies

### **"Port already in use"**
- Deployment platforms handle ports automatically
- Don't specify port in deployment

### **Email not working**
- Set EMAIL_USER and EMAIL_PASS in environment variables
- Use Gmail App Password, not regular password

---

## 🎓 For Your Class Presentation

**Show your deployed website live!**

1. **"I built a full-stack restaurant website"**
2. **"It's deployed and accessible worldwide"**
3. **"Here's the live URL: [your-url]"**
4. **Make a reservation on the live site**
5. **Show it in the admin dashboard**
6. **"All data is stored in a real database"**

**This will BLOW AWAY your classmates!** 🎉

---

## 📚 Next Steps

1. ✅ Push code to GitHub
2. ✅ Choose platform (Railway recommended)
3. ✅ Deploy
4. ✅ Test live site
5. ✅ Add environment variables
6. ✅ Share link with class!

---

**Ready to deploy? Let me know if you need help with any step!** 🚀
