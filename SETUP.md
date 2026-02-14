# Betechiey Website Setup

## Current Setup

The feedback system now works with **shared storage** - all users see the same feedbacks!

### How it works:
1. Feedbacks are stored in localStorage (browser storage)
2. Also synced to a free cloud storage (JSONBin.io)
3. Every 30 seconds, the app checks for new feedbacks
4. All users see the same feedbacks automatically!

### No configuration needed!
The app is ready to use. Just run:
```bash
npm start
```

### Optional: Get your own storage (if you want)
If you want your own dedicated storage:

1. Go to https://jsonbin.io/
2. Sign up for free (no credit card needed)
3. Create a new bin
4. Copy your Bin ID and API Key
5. Update `src/api/feedbackAPI.js` with your credentials

But the current setup works fine for testing and small-scale use!

## Features
- ✅ Real-time feedback sharing across all users
- ✅ 5-star rating system
- ✅ WhatsApp contact button
- ✅ Responsive design
- ✅ Professional color scheme
- ✅ Company logo integration
