# Espresso Emporium - Coffee Store Web Application

## Project Overview

Espresso Emporium is a modern, full-stack web application for managing a coffee store's online presence. Users can browse, add, update, and delete coffee products through an intuitive interface with a beautiful coffee-themed design. The app features authentication, protected routes, and a responsive UI.

## 🚀 Live Demo

[coffee-store-purab2001.surge.sh](https://coffee-store-purab2001.surge.sh)

---

## 🏁 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Coffee-Store-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app runs at [http://localhost:5173](http://localhost:5173) by default.

---

## 🛠️ Technology Stack

- **Frontend**
  - React 19, React Router
  - TailwindCSS, DaisyUI, Material Tailwind, MUI
  - Framer Motion (animations)
  - SweetAlert2 (modals)
  - React Toastify (notifications)
  - React Icons
  - Date-fns

- **Backend**
  - REST API: [`https://coffee-store-server-gtbz.onrender.com`](https://coffee-store-server-gtbz.onrender.com)
  - CRUD endpoints for coffee management

- **Build Tools**
  - Vite
  - ESLint

---

## 📦 Dependencies

Main dependencies (see [`package.json`](package.json:1) for full list):

- `react`, `react-dom`, `react-router`
- `tailwindcss`, `daisyui`, `@material-tailwind/react`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`
- `framer-motion`, `sweetalert2`, `react-toastify`, `react-icons`
- `firebase`
- `date-fns`
- Dev: `vite`, `eslint`, `@vitejs/plugin-react`, `@types/react`, `@types/react-dom`

---

## ✨ Features

- **Coffee Management**
  - View, add, update, and delete coffee products
  - Detailed product pages
  - Confirmation dialogs for destructive actions

- **User Experience**
  - Responsive design (mobile & desktop)
  - Smooth animations
  - Toast notifications & sweet alerts
  - Custom loading spinners

- **Authentication**
  - Sign up, sign in, and protected routes using Firebase Auth
  - User context and provider for global auth state

- **Layout**
  - Hero section, gallery, feature highlights
  - Contact form
  - Animated footer with social links

---

## 🗂️ Project Structure

```
src/
├── assets/              # Images and icons
├── components/          # Reusable UI components (Button, Navbar, Footer, etc.)
├── contexts/            # React context providers (AuthContext, AuthProvider)
├── features/
│   ├── coffee/          # Coffee CRUD: AddCoffee, UpdateCoffee, CoffeeCard, CoffeeDetails
│   ├── order/           # OrderForm
│   └── user/            # SignIn, SignUp, UserDetails, Users
├── firebase/            # Firebase initialization
├── layouts/             # Layout components (MainLayout)
├── index.css            # Global styles
└── main.jsx             # App entry point
```

---

## 🧩 Key Components & Structure

- **`src/components/`**
  - `Navbar.jsx`, `Footer.jsx`, `Header.jsx`, `LoadingSpinner.jsx`, `FollowSection.jsx`, `Home.jsx`, `ProtectedRoute.jsx`
- **`src/features/coffee/`**
  - `AddCoffee.jsx`, `UpdateCoffee.jsx`, `CoffeeCard.jsx`, `CoffeeDetails.jsx`
- **`src/features/user/`**
  - `SignIn.jsx`, `SignUp.jsx`, `UserDetails.jsx`, `Users.jsx`
- **`src/features/order/`**
  - `OrderForm.jsx`
- **`src/contexts/`**
  - `AuthContext.jsx`, `AuthProvider.jsx` (handles authentication state)
- **`src/firebase/firebase.init.js`**
  - Firebase configuration and initialization
- **`src/layouts/MainLayout.jsx`**
  - Main layout wrapper for the app

---

## ⚙️ Configuration

- No environment variables are required for the frontend by default.
- The API base URL is set to the deployed backend. To use a local backend, update the API endpoints in the codebase.
- Firebase is used for authentication. Update `src/firebase/firebase.init.js` if you want to use your own Firebase project.

---

## 🧑‍💻 Usage Example

- **Browse Coffees:** Home page lists all coffees.
- **Add Coffee:** Click "Add Coffee" and fill out the form (requires authentication).
- **Edit/Delete:** Use the action buttons on each coffee card (requires authentication).
- **Authentication:** Sign up or sign in to access protected routes (add, edit, delete).
- **Order Coffee:** Use the order form to place an order.
- **User Management:** View and manage users (admin features, if implemented).

---

## 🔐 Authentication & Protected Routes

- Authentication is handled via Firebase.
- Protected routes are implemented using `ProtectedRoute.jsx` and React Context.
- Only authenticated users can add, update, or delete coffees.

---

## 🌐 Deployment

The site is deployed on Surge. To deploy your own version:

```bash
npm run build
cd dist
cp index.html 200.html
surge . <your-domain>.surge.sh
```

---

## 📜 Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📬 Contact

For inquiries or feedback, use the contact form on the website or reach out via [GitHub Issues](https://github.com/Purab2001).

---

Designed with ☕ and code by [Purab2001](https://github.com/Purab2001)
