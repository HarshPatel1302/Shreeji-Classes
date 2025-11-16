# Shreeji Classes - Professional Coaching Website

A beautiful, modern, and highly professional website for Shreeji Classes - offering offline and online coaching for various academic levels and competitive exams.

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 📚 Course listings for all classes (VIII-XII, JEE, NEET, Diploma, Engineering, Commerce)
- 📝 Comprehensive contact/inquiry form with all required fields
- 🎓 Teaching philosophy and educator information
- 📍 Location and timing information
- 💬 WhatsApp integration for direct contact
- 🌐 PAN India Online Classes information
- 🎯 Smart Study Programs (SSP) highlights
- 📱 Fully mobile responsive

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📧 Email Configuration

The contact form currently logs submissions to the console. To enable email notifications:

1. Choose an email service (Resend, SendGrid, or Nodemailer)
2. Update `app/api/contact/route.ts` with your email service integration
3. Add environment variables (create `.env.local`):
   - For Resend: `RESEND_API_KEY` and `CONTACT_EMAIL`
   - For SendGrid: `SENDGRID_API_KEY` and `CONTACT_EMAIL`
   - For Nodemailer: SMTP credentials

Example with Resend:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'svidhyasagar963@yahoo.com',
  to: process.env.CONTACT_EMAIL || 'svidhyasagar963@yahoo.com',
  subject: `New Inquiry from ${name}`,
  html: `...`
});
```

## 🖼️ Image Customization

### Replace Placeholder Images

1. Add your images to `public/images/` directory
2. Update image paths in component files:
   - `components/Hero.tsx` - Main hero image
   - `components/AboutSection.tsx` - About section images
   - `components/CoursesSection.tsx` - Course section images

### Recommended Image Sizes

- Hero images: 1200x800px or larger
- Section images: 800x600px
- Thumbnail images: 400x300px

### Branding Image

Add your Shreeji Classes branding image to `public/images/` and update the Hero component to use it.

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.ts`:
- Primary colors: Blue/Indigo gradient
- Accent colors: Yellow/Gold
- Customize in the `theme.extend.colors` section

### Content

Update content in respective component files:
- `components/Hero.tsx` - Main hero section
- `components/AboutSection.tsx` - About and educator info
- `components/CoursesSection.tsx` - Course listings
- `components/TeachingPhilosophy.tsx` - Teaching approach
- `components/LocationsSection.tsx` - Location details
- `components/ContactForm.tsx` - Form fields

### Contact Information

Update contact details in:
- `components/Header.tsx` - Phone number
- `components/LocationsSection.tsx` - Locations and contact
- `components/ContactForm.tsx` - Contact form
- `components/Footer.tsx` - Footer contact info

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎭 Animations

The site uses Framer Motion for:
- Smooth page transitions
- Scroll-triggered animations
- Hover effects
- Loading states
- Interactive elements

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API route
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── CoursesSection.tsx    # Courses display
│   ├── AboutSection.tsx      # About section
│   ├── TeachingPhilosophy.tsx # Teaching approach
│   ├── FeaturesSection.tsx   # Features/USP
│   ├── LocationsSection.tsx  # Locations & contact
│   ├── ContactForm.tsx       # Inquiry form
│   └── Footer.tsx            # Footer
├── public/
│   └── images/               # Image assets
└── ...config files
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Next.js

## 📝 Form Fields

The inquiry form includes:
- Name (required)
- Contact Number (required)
- Parent's Name
- Email ID (required)
- Student's Standard/Class (required)
- Student's School Name
- Board Type (CBSE/State/etc.)
- Subjects Interested (multi-select)
- Special Comments/Requirements

## 🔧 Troubleshooting

### Images not loading
- Check image paths in components
- Ensure images are in `public/images/`
- Verify Next.js image configuration

### Form not submitting
- Check API route at `app/api/contact/route.ts`
- Verify environment variables
- Check browser console for errors

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors: `npm run build`
- Verify Node.js version (18+)

## 📄 License

This project is created for Shreeji Classes. All rights reserved.

## 🤝 Support

For issues or questions, contact:
- Phone/WhatsApp: 7738758295
- Email: svidhyasagar963@yahoo.com

