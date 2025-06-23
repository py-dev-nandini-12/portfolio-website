# 🌟 Nandini's Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, and **TypeScript**, showcasing my journey from Physics education to software development.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern Design & UX**

- **Responsive design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light mode** support with smooth transitions
- **Gradient animations** and micro-interactions
- **Glass-morphism effects** with modern styling
- **Smooth scrolling** and page transitions

### 🚀 **Latest React 19 Features**

- **`use` hook** for promise handling and async data
- **useTransition** for non-blocking UI updates
- **Suspense boundaries** with loading states
- **Modern hooks patterns** (useCallback, useMemo)
- **Concurrent rendering** optimizations

### 📱 **Sections**

- **Hero** - Dynamic introduction with call-to-actions
- **About** - Personal story and background
- **Skills** - Interactive button-style skill showcase
- **Experience** - Professional background and roles
- **Projects** - Portfolio of work with live demos
- **Contact** - Direct contact information and social links

### ⚡ **Performance Optimized**

- **Next.js 15** App Router for optimal performance
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for efficient styling
- **Image optimization** with Next.js Image component
- **SEO optimized** with proper meta tags

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### **Styling & Animations**

- **CSS Gradients** - Beautiful color transitions
- **Custom animations** - Smooth micro-interactions
- **Responsive design** - Mobile-first approach
- **Modern UI patterns** - Glass-morphism, cards, buttons

### **Development Tools**

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
portfolio-website/
├── public/                    # Static assets
│   ├── profile-photo.jpg     # Profile image
│   ├── Nc_python_cv.pdf      # Resume/CV
│   └── *.svg                 # Icons and graphics
├── src/
│   ├── app/                  # Next.js 15 App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   └── api/              # API routes (if needed)
│   └── components/           # React components
│       ├── Hero.tsx          # Landing section
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Skills showcase
│       ├── Experience.tsx    # Work experience
│       ├── Projects.tsx      # Portfolio projects
│       ├── Contact.tsx       # Contact information
│       └── Navigation.tsx    # Navigation component
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### **Colors & Branding**

- Edit `tailwind.config.ts` for custom color schemes
- Update gradients in component files
- Modify `globals.css` for global styling

### **Content**

- **Personal Info**: Update `About.tsx` with your story
- **Skills**: Modify skill lists in `Skills.tsx`
- **Projects**: Add your projects in `Projects.tsx`
- **Contact**: Update contact details in `Contact.tsx`

### **Resume/CV**

- Replace `public/Nc_python_cv.pdf` with your resume
- Update the filename references in components

## 📤 Deployment

### **Vercel (Recommended)**

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically

### **Netlify**

1. Build the project: `npm run build`
2. Deploy `out` folder to [Netlify](https://netlify.com)

### **Other Platforms**

- **GitHub Pages**: Configure in `next.config.ts`
- **AWS/Azure**: Use their static hosting services

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🌟 Key Features Showcase

### **Modern React 19 Patterns**

```tsx
// Using the new 'use' hook for async data
const ContactMetadata = ({ promise }) => {
  const data = use(promise);
  return <div>{data.responseTime}</div>;
};

// useTransition for smooth UX
const [isPending, startTransition] = useTransition();
```

### **Professional Skill Display**

- **Button-style skills** with hover effects
- **Progress indicators** with animation
- **Categorized grouping** for easy scanning
- **Professional color schemes**

### **Responsive Design**

```css
/* Mobile-first approach */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-4
.text-sm sm:text-base lg:text-lg
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Nandini Chatterjee**

- **Email**: [phy.nandini@gmail.com](mailto:phy.nandini@gmail.com)
- **Location**: London, UK
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/nandini-chatterjee-41b3a885/)
- **GitHub**: [Your GitHub Profile](https://github.com/py-dev-nandini-12)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js 15, React 19, and modern web technologies.**

_Showcasing the journey from Physics education to modern software development._
