# Shweta Solar Website - Setup Instructions

## Email Notifications Setup (Resend)

To enable email notifications for contact form submissions, follow these steps:

### 1. Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Create a free account
3. Verify your email address

### 2. Get your API Key
1. Log in to your Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Name it "Shweta Solar Production" (or any relevant name)
5. Copy the API key (it starts with `re_`)

### 3. Add Environment Variable to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (the one you copied in step 2)
   - **Environment:** Select all (Production, Preview, Development)
4. Click **Save**

### 4. Redeploy
After adding the environment variable:
1. Go to your Vercel project
2. Click **Deployments**
3. Click the three dots on the latest deployment
4. Click **Redeploy**

### 5. Test the Form (Works Immediately!)
The forms will work right away using Resend's default email address:
1. Visit your website's contact page
2. Fill out and submit the form
3. Check rasinrohit@gmail.com for the notification email
4. Check the Supabase `contact_submissions` table to verify the data was saved

**Note:** Emails will be sent from `onboarding@resend.dev` until you verify your domain (optional step below).

### 6. (Optional) Verify Your Domain for Professional Emails
To send emails from your own domain (e.g., `notifications@shwetasolar.com`):

1. In Resend dashboard, go to **Domains**
2. Add your domain: `shwetasolar.com`
3. Follow the DNS verification steps provided by Resend
4. Wait for domain verification (usually takes a few minutes to a few hours)
5. Once verified, update `lib/actions/contact.ts` line 44:
   \`\`\`typescript
   from: 'Shweta Solar <notifications@shwetasolar.com>',
   \`\`\`
   Change from `onboarding@resend.dev` to any email using your verified domain:
   - `notifications@shwetasolar.com`
   - `noreply@shwetasolar.com`
   - `contact@shwetasolar.com`
6. Redeploy your site

## Google reCAPTCHA Setup

To protect contact forms from spam and bot submissions, follow these steps:

### 1. Get reCAPTCHA Keys
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **Create** or **+** to register a new site
3. Fill in the form:
   - **Label:** Shweta Solar Website
   - **reCAPTCHA type:** Select **reCAPTCHA v3**
   - **Domains:** Add `shwetasolar.in` and `shwetasolar.com` (and any other domains you use)
   - Accept the terms
4. Click **Submit**
5. You'll receive two keys:
   - **Site Key** (starts with `6L...`) - Used in the frontend
   - **Secret Key** (starts with `6L...`) - Used in the backend

### 2. Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add two new environment variables:
   
   **First Variable:**
   - **Name:** `RECAPTCHA_SITE_KEY`
   - **Value:** Your reCAPTCHA Site Key (the one starting with `6L...`)
   - **Environment:** Select all (Production, Preview, Development)
   
   **Second Variable:**
   - **Name:** `RECAPTCHA_SECRET_KEY`
   - **Value:** Your reCAPTCHA Secret Key
   - **Environment:** Select all (Production, Preview, Development)

4. Click **Save** for each variable

### 3. Redeploy
After adding the environment variables:
1. Go to your Vercel project
2. Click **Deployments**
3. Click the three dots on the latest deployment
4. Click **Redeploy**

### 4. Test reCAPTCHA
1. Visit your website's contact page
2. Fill out and submit the form
3. The form should submit successfully (reCAPTCHA v3 works invisibly in the background)
4. Check the Google reCAPTCHA admin console to see analytics and scores

**Note:** reCAPTCHA v3 is invisible and doesn't require user interaction. It analyzes user behavior and assigns a score (0.0 - 1.0). Scores above 0.5 are considered human.

### Troubleshooting reCAPTCHA

**Forms not submitting?**
- Check that both `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are set correctly in Vercel
- Ensure you've redeployed after adding the variables
- Check browser console for reCAPTCHA errors
- Verify your domain is added in the reCAPTCHA admin console

**Getting "reCAPTCHA verification failed" errors?**
- Check that the secret key is correct
- Ensure the domain matches what's registered in reCAPTCHA admin
- Check Vercel function logs for detailed error messages

### Emails not being sent?
- Check that `RESEND_API_KEY` is set in Vercel environment variables
- Check Vercel function logs for errors
- Ensure you've redeployed after adding the environment variable
- If using a custom domain email, verify the domain is verified in Resend

### Form submissions not saving to database?
- Check Supabase connection in Vercel
- Verify the `contact_submissions` table exists
- Check browser console for errors

### reCAPTCHA not working?
- Verify both `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are set
- Check that your domain is registered in Google reCAPTCHA admin
- Look for errors in browser console and Vercel function logs

### Need Help?
- Resend Documentation: https://resend.com/docs
- Google reCAPTCHA Documentation: https://developers.google.com/recaptcha/docs/v3
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
