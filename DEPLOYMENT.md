# 🚂 Deploy to Railway - RECOMMENDED!

## Why Railway > Vercel for Your Project

✅ **Supports SQLite** - Your database works as-is!
✅ **No code changes** - Deploy exactly what you have
✅ **Free $5/month credit** - Plenty for your project
✅ **Persistent storage** - Database changes are saved
✅ **Easy as Vercel** - Same simple deployment

---

## 🚀 Quick Railway Deployment (5 Minutes!)

### **Step 1: Push to GitHub**

```bash
cd /home/manthan/repos/restaurant

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Savoria Restaurant - Full-stack website"

# Create GitHub repo and push (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/savoria-restaurant.git
git branch -M main
git push -u origin main
```

### **Step 2: Deploy to Railway**

1. **Go to** https://railway.app
2. **Click** "Start a New Project"
3. **Sign in** with GitHub
4. **Click** "Deploy from GitHub repo"
5. **Select** `savoria-restaurant`
6. **Railway automatically:**

   - ✅ Detects Node.js
   - ✅ Runs `npm install`
   - ✅ Starts your server
   - ✅ Gives you a URL

7. **Wait 2-3 minutes** ☕
8. **🎉 Your site is LIVE!**

**That's it! Skip to Step 4 to get your URL.** ⬇️

### **Step 3: Environment Variables (OPTIONAL - Skip for Now!)**

**Your site works 100% without these!** Only add if you want email notifications.

<details>
<summary>Click to expand if you want to add email functionality later</summary>

1. **Click** your project
2. **Go to** "Variables" tab
3. **Add** these variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RESTAURANT_EMAIL=restaurant@savoria.com
NODE_ENV=production
```

4. **Click** "Deploy" to restart with new variables

**Note:** EMAIL_PASS requires a Gmail App Password (not your regular password).
Get it at: https://myaccount.google.com/apppasswords

</details>

**Without these variables:**

- ✅ Reservations still save to database
- ✅ Forms still work perfectly
- ✅ Admin dashboard shows all data
- ❌ No confirmation emails sent (that's okay!)

### **Step 4: Get Your URL**

Your site will be at:

```
https://savoria-restaurant-production.up.railway.app
```

**Copy this URL and share it!** 🎉

---

## ✅ What Works on Railway (Without Email Setup)

✅ All reservations save to database
✅ Contact forms work perfectly
✅ Newsletter subscriptions persist
✅ Admin dashboard shows real data
✅ SQLite database keeps all data
✅ Forms show success messages
✅ Confirmation numbers generated (SAV-000001, etc.)

_Email notifications require optional email setup (Step 3)_

---

## 🧪 Test Your Deployed Site

```
# Home page
https://your-app.up.railway.app

# Make a reservation
https://your-app.up.railway.app/pages/reservations.html

# Admin dashboard
https://your-app.up.railway.app/admin-dashboard.html

# API health check
https://your-app.up.railway.app/api/health
```

---

## 🔄 Auto-Deploy on Push

Once set up, every time you update:

```bash
# Make changes to your code
git add .
git commit -m "Updated menu"
git push

# Railway automatically:
# 1. Detects the push
# 2. Rebuilds your app
# 3. Deploys the new version
# 4. Done in 1-2 minutes!
```

---

## 💰 Pricing

**Free tier includes:**

- ✅ $5/month credit
- ✅ 500 hours execution time
- ✅ Multiple projects
- ✅ Custom domains

**Your project will use:**

- ~$2-3/month (well within free tier!)

---

## 📊 Railway Dashboard Features

- 📈 **Metrics** - See CPU, memory usage
- 📝 **Logs** - View server logs in real-time
- 🔄 **Deployments** - See deployment history
- ⚙️ **Variables** - Manage environment variables
- 🌐 **Domains** - Add custom domains

---

## 🎓 For Your Class

**Show off your deployed site:**

1. "Here's my live website [show URL]"
2. "Let me make a reservation..." [fill form]
3. "And here it is in the admin dashboard!" [show data]
4. "It's deployed on Railway with a real database"
5. "Anyone in the world can access it right now"

**Your professor will be impressed!** 🎉

---

## 🆘 Common Issues

### **"Application failed to respond"**

- Check logs in Railway dashboard
- Make sure PORT is not hardcoded (Railway assigns it)

### **"Database is locked"**

- This won't happen on Railway! ✅
- SQLite works perfectly

### **"npm install failed"**

- Make sure package.json is in the root
- Check that all dependencies are listed

---

## 🎯 Ready to Deploy?

**Just run these commands:**

```bash
# 1. Make sure you're in the project directory
cd /home/manthan/repos/restaurant

# 2. Check if git is initialized
git status

# 3. If not initialized, run:
git init
git add .
git commit -m "Initial commit"

# 4. Create GitHub repo and push
# (Create repo on github.com first)
git remote add origin https://github.com/YOUR_USERNAME/savoria-restaurant.git
git push -u origin main

# 5. Go to railway.app and deploy!
```

**Need help? Let me know which step you're on!** 🚀
