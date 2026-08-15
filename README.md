# ☕ The Cozy Bean — Artisan Cafe & Bakery Landing Page

A modern, responsive landing page for an artisan coffee shop and bakery. Built with **React 19**, **Vite**, **Tailwind CSS**, and **Three.js** to deliver an immersive visual experience with smooth momentum scrolling, 3D ambient visuals, and interactive booking features.

---

## ✨ Features

- **🎨 Modern Glassmorphic UI:** Custom dark-roast aesthetic with frosted-glass cards, glow effects, and warm coffee-toned gradients.
- **🌐 3D Canvas Background:** Floating, dynamically distorting geometric meshes rendered in real time using React Three Fiber and `@react-three/drei`.
- **🚀 Smooth Momentum Scrolling:** Butter-smooth scroll feel powered by Lenis integrated with GSAP ScrollTrigger.
- **📜 Dynamic Menu Showcase:** Categorized culinary presentations for brews, artisan bakery goods, Italian bites, and healthy bowls.
- **📅 Table Reservation System:** Interactive booking form with input validation powered by `react-hook-form`.
- **🖼️ Interactive Gallery:** Responsive masonry grid layout with a full-screen image lightbox modal.
- **💬 3D Testimonials Deck:** Fluid coverflow touch/swipe review carousel configured with Swiper.
- **❓ Animated FAQ Accordion:** Clean collapsible question-and-answer section with Framer Motion layout transitions.
- **📍 Interactive Contact Hub:** Embedded Google Maps location, opening hours, and direct inquiry messaging.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework & Build** | React 19, Vite 8 |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **3D & Canvas** | Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei` |
| **Animations** | Framer Motion, GSAP, Lenis Smooth Scroll |
| **Forms & Validation** | React Hook Form, `@emailjs/browser` |
| **UI Components & Icons** | Lucide React, React Icons, Swiper |

---

## 📁 Project Structure

```text
src/
├── assets/              # Static media assets and brand vectors
├── components/
│   ├── 3d/              # React Three Fiber canvas & floating blob meshes
│   ├── home/            # Landing page sections (Hero, Menu, Story, FAQ, etc.)
│   ├── layout/          # Persistent Layout, Navbar, and Footer
│   └── ui/              # Reusable UI primitives (GlassCard, GlowButton, Counters)
├── hooks/               # Custom hooks (Lenis + GSAP smooth scrolling)
├── pages/               # Page route views
├── App.jsx              # Application router setup
├── index.css            # Global stylesheet & Tailwind directives
└── main.jsx             # React entry point
```

---

## 🚀 How to Run Locally

Follow these step-by-step instructions to set up and run the project locally on your machine:

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- [Git](https://git-scm.com/)

---

### 2. Clone the Repository
Open your terminal and clone the repository:
```bash
git clone [https://github.com/tech697info-stack/the-cozy-bean.git](https://github.com/tech697info-stack/the-cozy-bean.git)
cd the-cozy-bean
```

---

### 3. Install Dependencies
Install all required project packages:
```bash
npm install
```
> **Note:** If you encounter peer dependency conflicts with React 19 / Three.js packages, run:
> ```bash
> npm install --legacy-peer-deps
> ```

---

### 4. Start the Development Server
Launch the local Vite development server:
```bash
npm run dev
```

Once the terminal outputs the local URL, open your browser and navigate to:
```text
http://localhost:5173
```

---

### 5. Build for Production
To generate an optimized, minified production build:
```bash
npm run build
```

To locally preview the production build output:
```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite dev server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production assets into the `dist/` directory. |
| `npm run preview` | Spins up a local web server to test production build output. |
| `npm run lint` | Runs Oxlint to check code quality and syntax standards across files. |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
