# Espresso Emporium - Coffee Store Web Application

![Espresso Emporium Logo](public/logo1.png)

## Project Overview

Espresso Emporium is a modern, full-stack web application for managing a coffee store's online presence. Users can browse, add, update, and delete coffee products through an intuitive interface with a beautiful coffee-themed design.

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

4. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Technology Stack

- **Frontend**
  - React 19, React Router
  - TailwindCSS, DaisyUI
  - Framer Motion (animations)
  - SweetAlert2 (modals)
  - React Toastify (notifications)
  - React Icons

- **Backend**
  - REST API: [`https://coffee-store-server-ten-tau.vercel.app`](https://coffee-store-server-ten-tau.vercel.app)
  - CRUD endpoints for coffee management

- **Build Tools**
  - Vite
  - ESLint

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

- **Layout**
  - Hero section, gallery, feature highlights
  - Contact form
  - Animated footer with social links

---

## 📋 Project Structure

```
src/
├── assets/        # Images and icons
├── components/    # UI components 
├── contexts/      # React context providers
├── layouts/       # Layout components
├── index.css      # Global styles
└── main.jsx       # App entry point
```

---

## ⚙️ Configuration

- No environment variables are required for the frontend by default.
- The API base URL is set to the deployed backend. To use a local backend, update the API endpoints in the codebase.

---

## 🧑‍💻 Usage Example

- **Browse Coffees:** Home page lists all coffees.
- **Add Coffee:** Click "Add Coffee" and fill out the form.
- **Edit/Delete:** Use the action buttons on each coffee card.
- **Authentication:** Sign up or sign in to access protected routes.

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
