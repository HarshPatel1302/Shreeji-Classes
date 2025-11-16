# Quick Setup Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Key Features Implemented

✅ **Branding**: "SHREEJI CLASSES" prominently displayed  
✅ **Courses**: All classes (VIII-XII, JEE, NEET, Diploma, Engineering, Commerce)  
✅ **PAN India Online**: Highlighted for Diploma & Engineering  
✅ **Free Counselling**: Mentioned in multiple sections  
✅ **Smart Study Programs**: Featured prominently  
✅ **Working Hours**: 7 AM - 11 PM displayed  
✅ **Contact**: WhatsApp/Call - 7738758295  
✅ **Teaching Philosophy**: Dedicated section  
✅ **Educator Info**: S.VidhyaSagar (By IITian)  
✅ **Locations**: Panvel, Thane, Mumbai  
✅ **Contact Form**: Complete with all required fields  
✅ **Animations**: Smooth, modern animations throughout  
✅ **Mobile Responsive**: Fully optimized for all devices  

## Next Steps

1. **Replace Images**: Add your own images to `public/images/`
2. **Configure Email**: Set up email service in `app/api/contact/route.ts`
3. **Customize Content**: Update any text/content in component files
4. **Deploy**: Push to GitHub and deploy on Vercel/Netlify

## Important Files to Customize

- `components/Hero.tsx` - Main hero section and branding
- `components/AboutSection.tsx` - Educator information
- `components/ContactForm.tsx` - Form fields and validation
- `app/api/contact/route.ts` - Email integration
- `tailwind.config.ts` - Color scheme customization

## Image Replacement

All images are currently using Unsplash placeholders. To replace:

1. Add images to `public/images/`
2. Update `src` attributes in components
3. Example: Change `src="https://images.unsplash.com/..."` to `src="/images/your-image.jpg"`

## Email Setup (Optional but Recommended)

The form currently logs to console. To receive emails:

1. Sign up for Resend (recommended) or SendGrid
2. Get API key
3. Update `app/api/contact/route.ts`
4. Add `.env.local` with `RESEND_API_KEY` and `CONTACT_EMAIL`

See README.md for detailed instructions.

