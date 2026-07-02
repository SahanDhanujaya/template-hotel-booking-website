# 🏨 Hotel Booking Template

A modern, full-featured hotel booking web app built with **React + Vite**. Includes a public-facing marketing site (rooms, food court, reviews, contact) and an authenticated user dashboard (bookings, vouchers, loyalty program, transaction history, profile) backed by **Supabase Auth**.

---

## ✨ Features

### Public site
- **Hero & booking widget** — animated hero section with an inline check-availability form (check-in/out, rooms, guests)
- **Rooms & Suites** — room grid with ratings, pricing, and a panoramic slider for featured suites
- **Amenities grid** — iconized list of hotel facilities
- **Food Court** — featured dining offers and packages
- **Reviews** — paginated customer review carousel with star ratings
- **Contact** — contact form with an embedded map
- **Responsive navbar & footer** — mobile drawer navigation, language selector, quick links

### User dashboard (authenticated)
- **My Bookings** — upcoming/past reservations with expandable detail cards and a booking journey timeline
- **Vouchers** — filterable voucher wallet (valid / used / expired) with category & sort filters
- **Loyalty Dashboard** — points balance, tier progress (Gold / Jade / Diamond), and a member benefits comparison table
- **Transaction History** — points activity log with period filters (3 / 12 / 24 months) and date range selection
- **Profile** — editable personal details, password/security settings, notification preferences, and account deletion
- **Sidebar navigation** — collapsible desktop sidebar + mobile slide-out drawer

### Auth
- **Login / Register** — Supabase-backed email/password auth with email verification handling
- **Custom Alert system** — non-native alert/toast component for form validation and API feedback
- **Toast notifications** — `react-toastify` for success/error feedback on auth actions

---

## 🛠 Tech Stack

| Category | Tools |
|---|---|
| Framework | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Routing | [React Router](https://reactrouter.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Auth / Backend | [Supabase](https://supabase.com/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── offers/                 # Marketing/offer images
├── components/
│   ├── customAlert/
│   │   └── Alert.tsx           # Reusable alert banner (info/success/warning/error)
│   ├── loaders/
│   │   └── Loader.tsx          # Full-page loading state
│   └── layout/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── Sidebar.tsx         # Authenticated dashboard sidebar
├── config/
│   └── supabase.ts             # Supabase client instance
├── context/
│   ├── AuthProvider.tsx        # Auth state, login/logout, current user
│   └── LoaderProvider.tsx      # Global loading state
├── pages/
│   ├── home/
│   │   ├── HomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── RoomsSection.tsx
│   │   ├── FoodSection.tsx
│   │   ├── ReviewSection.tsx
│   │   └── ContactSection.tsx
│   ├── auth/
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   └── user/
│       ├── Dashboard.tsx
│       ├── TrackMyBookings.tsx
│       ├── Voucher.tsx
│       ├── LoyaltyDashboard.tsx
│       ├── Activity.tsx        # Transaction history
│       └── Profile.tsx
├── types/
│   ├── authType.ts
│   └── bookingTypes.ts
├── App.tsx
└── main.tsx
```

> Folder names above reflect the app's logical structure — adjust to match your actual routing setup.

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+**
- A [Supabase](https://supabase.com/) project (for auth)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/hotel-booking-template.git
cd hotel-booking-template

# Install dependencies
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint across the project |

---

## 🎨 Design System

The UI follows a consistent token set applied across every page and component:

| Token | Value | Usage |
|---|---|---|
| Page background | `#F5F6F8` | App shell / section backgrounds |
| Surface | `#FFFFFF` | Cards, forms, panels |
| Text primary | `zinc-900` | Headings, primary copy |
| Text secondary | `zinc-500` / `zinc-400` | Body copy, labels, meta text |
| Accent | `teal-700` (`#0F766E`) | Buttons, links, active states, icons |
| Border | `zinc-200` / `zinc-100` | Card borders, dividers |
| Radius | `rounded-lg` / `rounded-xl` / `rounded-2xl` | Inputs / small elements / cards |
| Font | System sans (`font-sans`) | Used throughout — no serif |

Reusable patterns:
- **Segmented pill tabs** (`bg-zinc-100` wrapper, white active pill with `shadow-sm`)
- **Filled inputs**: `bg-zinc-50` + `border-zinc-200`, focus ring `ring-teal-600/10`
- **Icon badges**: `teal-50` background, `teal-700` icon, `rounded-xl`
- **Status pills**: soft-tinted rounded-full badges with a colored dot

---

## 🔐 Authentication Flow

1. User submits the **Login** or **Register** form
2. Request is sent to **Supabase Auth**
3. On success:
   - Register → confirmation alert + email verification (if enabled)
   - Login → success toast → redirect to `/user` dashboard
4. `AuthProvider` exposes `user`, `login`, `logout` to the rest of the app via context
5. Protected `/user/*` routes read from `AuthProvider` to gate access and populate the sidebar/profile

---

## 🧩 Notable Implementation Details

- **Mock data first**: dashboard pages (`TrackMyBookings`, `Voucher`, `Activity`, `LoyaltyDashboard`) ship with local mock arrays and `// TODO` markers — swap in real API/Supabase queries when your backend endpoints are ready.
- **Responsive by default**: sidebar collapses to icons on desktop and becomes a slide-out drawer on mobile; all grids fall back to a single column below `md`.
- **Accessible forms**: all inputs have associated `<label>` elements; interactive icon-only buttons include `aria-label`.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Imagery courtesy of [Unsplash](https://unsplash.com/)
- Icons by [Lucide](https://lucide.dev/)