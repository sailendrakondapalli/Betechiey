# Feedback System - How It Works

## Current Setup

The feedback system now uses **Vercel Serverless Functions** to share feedbacks across all users.

### How it works:

1. **On Vercel (Production)**:
   - Feedbacks are stored in server memory
   - All users see the same feedbacks
   - When someone submits a review, everyone can see it
   - Note: Feedbacks reset when Vercel redeploys (every ~12 hours of inactivity)

2. **Local Development**:
   - Uses localStorage (browser storage)
   - Only you see your feedbacks locally
   - Once deployed to Vercel, it will work for all users

### To Deploy to Vercel:

1. Push your code to GitHub (already done!)
2. Go to https://vercel.com/
3. Import your repository: `sailendrakondapalli/Betechiey`
4. Set Root Directory: `betechiey-website`
5. Deploy!

### After Deployment:

✅ All users will see the same feedbacks
✅ Real-time sharing works automatically
✅ No database setup needed

### For Permanent Storage (Optional):

If you want feedbacks to persist forever (not reset), you can:
- Add a free MongoDB database (MongoDB Atlas)
- Add a free PostgreSQL database (Supabase)
- Use Vercel KV storage

But for now, the current setup works great for demonstration!
