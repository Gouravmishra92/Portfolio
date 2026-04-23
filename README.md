# 🚀 Gourav Mishra — Portfolio

A modern, fully responsive personal portfolio built with React + Vite. Features a dark/light theme toggle, smooth scroll-reveal animations, an image carousel for projects, and a working contact form powered by EmailJS.

---

## ✨ Features

- **Dark / Light mode** — persisted in `localStorage`, smooth transition
- **Typing animation** — role titles cycle with a blinking cursor in the Hero section
- **Scroll reveal** — sections fade in as you scroll down
- **Project image carousel** — multiple screenshots per project with prev/next arrows and dot indicators
- **Filter by category** — Frontend / Full Stack filter on the Projects section
- **Working contact form** — sends emails via EmailJS, no backend required
- **Scroll to top** button — appears after scrolling down
- **Fully responsive** — optimised for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS + inline design tokens |
| State | React Context API |
| Email | EmailJS (`@emailjs/browser`) |
| Deployment | Vercel |

---

---
### Installation

```bash
# Clone the repository
git clone https://github.com/Gouravmishra92/Portfolio.git

# Navigate into the project
cd Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✉️ EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** and an **Email Template**
3. Update the credentials in `src/sections/Contact.jsx`:

```js
await emailjs.send(
  'YOUR_SERVICE_ID',   
  'YOUR_TEMPLATE_ID',
  { from_name, from_email, message },
  'YOUR_PUBLIC_KEY'
);
```

---

## 🎨 Customisation

All content lives in one file — `src/constants/data.js`:

- **`NAV_LINKS`** — navigation items
- **`ROLES`** — typing animation role titles
- **`SKILLS`** — skill categories, icons, and accent colours
- **`PROJECTS`** — project title, description, tech stack, images array, and links
- **`EDUCATION`** — degree, school, period, and grade

To add a new project, append an object to `PROJECTS`:

```js
{
  id: 3,
  title: "Your Project",
  subtitle: "Short tagline",
  description: "What it does and how you built it.",
  tech: ["React", "Node.js"],
  category: "Full Stack",       // used for the filter button
  accent: "#a78bfa",            // hex colour for borders/badges
  images: [
    "/your-screenshot.png",     // place in /public
    "https://example.com/img.jpg",
  ],
  live: "https://your-live-url.com",
  repo: "https://github.com/you/repo",
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 768px` | Full two-column layout, desktop nav |
| `≤ 768px` | Single column, hamburger menu, hero image hidden |
| `≤ 480px` | Reduced padding on hero section |

---

## 🌐 Deployment

The portfolio is deployed on **Vercel**. To deploy your own fork:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Framework preset: **Vite** (auto-detected)
4. Click **Deploy** — done

---

<p align="center">Designed & built by <strong>Gourav Mishra</strong></p>
