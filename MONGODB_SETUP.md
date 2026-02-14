# MongoDB Setup Guide - Step by Step

Follow these simple steps to set up MongoDB for permanent feedback storage.

## Step 1: Create MongoDB Account (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/GitHub (easiest) or email
3. It's 100% FREE - no credit card needed!

## Step 2: Create a Free Cluster (3 minutes)

1. After login, click **"Build a Database"**
2. Choose **"M0 FREE"** tier (512MB storage - perfect for your needs)
3. Select a cloud provider and region (choose closest to you):
   - AWS, Google Cloud, or Azure
   - Pick a region near your location
4. Cluster Name: Keep default or name it "Betechiey"
5. Click **"Create"**
6. Wait 1-3 minutes for cluster creation

## Step 3: Create Database User (1 minute)

1. You'll see "Security Quickstart"
2. Create a database user:
   - Username: `betechiey` (or any name you want)
   - Password: Click "Autogenerate Secure Password" and COPY IT!
   - Save this password somewhere safe!
3. Click **"Create User"**

## Step 4: Set Network Access (1 minute)

1. Still in Security Quickstart
2. Under "Where would you like to connect from?"
3. Click **"Add My Current IP Address"**
4. Also add: **"0.0.0.0/0"** (allows access from anywhere - needed for Vercel)
5. Click **"Finish and Close"**

## Step 5: Get Connection String (2 minutes)

1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Driver: **Node.js**, Version: **5.5 or later**
4. Copy the connection string - looks like:
   ```
   mongodb+srv://betechiey:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password from Step 3
6. Add database name at the end: `/betechiey`
   
   Final string should look like:
   ```
   mongodb+srv://betechiey:YourPassword123@cluster0.xxxxx.mongodb.net/betechiey?retryWrites=true&w=majority
   ```

## Step 6: Add to Vercel (2 minutes)

### For Local Testing:
1. Create file `.env.local` in `betechiey-website` folder
2. Add this line:
   ```
   MONGODB_URI=mongodb+srv://betechiey:YourPassword123@cluster0.xxxxx.mongodb.net/betechiey?retryWrites=true&w=majority
   ```
3. Save the file
4. Restart your dev server: `npm start`

### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add new variable:
   - Name: `MONGODB_URI`
   - Value: Your full connection string
   - Environment: Production, Preview, Development (select all)
4. Click **"Save"**
5. Redeploy your site

## Step 7: Test It! (1 minute)

1. Open your website
2. Submit a feedback
3. Refresh the page - feedback should still be there!
4. Open in incognito/another browser - you should see the same feedback!

## ✅ Done!

Now your feedbacks are:
- ✅ Stored permanently in MongoDB
- ✅ Shared across all users worldwide
- ✅ Never reset or disappear
- ✅ Free forever (up to 512MB)

## Troubleshooting

**Error: "MongoServerError: bad auth"**
- Check your password is correct in the connection string
- Make sure you replaced `<password>` with actual password

**Error: "Connection timeout"**
- Add IP address `0.0.0.0/0` in Network Access
- Wait a few minutes for changes to apply

**Feedbacks not showing**
- Check browser console for errors (F12)
- Make sure MONGODB_URI is set in Vercel environment variables
- Redeploy after adding environment variables

## Need Help?

The MongoDB Atlas interface is very user-friendly. If you get stuck:
1. Check their docs: https://www.mongodb.com/docs/atlas/
2. Or just ask me!
