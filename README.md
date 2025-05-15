# Espresso Emporium - Coffee Store Web Application

![Espresso Emporium Logo](/logo1.png)

## Project Overview

Espresso Emporium is a full-stack web application for managing a coffee store's online presence. Built with modern React and a beautiful coffee-themed UI, this application allows users to browse, add, update, and delete coffee products.

## 🚀 Live Demo

Visit the live site: [coffee-store-purab2001.surge.sh](https://coffee-store-purab2001.surge.sh)

## ✨ Features

- **Coffee Management**
  - View a comprehensive list of coffees
  - Add new coffee products with detailed information
  - Update existing coffee details
  - View detailed information about each coffee product
  - Delete coffee entries with confirmation

- **UI/UX**
  - Responsive design works on mobile and desktop
  - Elegant animations powered by Framer Motion
  - Coffee-themed color palette and styling
  - Loading states with custom animations
  - Toast notifications for user actions
  - Sweet alerts for confirmations

- **Layout**
  - Beautiful hero section
  - Instagram-style gallery
  - Coffee features highlights
  - Contact form
  - Animated footer with social links

## 🛠️ Technology Stack

- **Frontend**
  - React 19 with React Router
  - TailwindCSS with DaisyUI components
  - Framer Motion for animations
  - SweetAlert2 for modals
  - React Toastify for notifications
  - React Icons for UI icons

- **Backend**
  - API hosted at `https://coffee-store-server-3443.onrender.com`
  - RESTful endpoints for CRUD operations

- **Build Tools**
  - Vite for lightning-fast development
  - ESLint for code quality

## 📋 Project Structure

```
src/
├── assets/        # Images and icons
├── components/    # UI components 
├── layouts/       # Layout components
├── index.css      # Global styles
└── main.jsx       # Application entry point
```

## 🏗️ Setup and Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd coffee-store-client
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## 👩‍💻 Development Notes

- Custom fonts (Rancho and Raleway) are imported from Google Fonts
- The project uses a carefully crafted coffee-themed color palette
- API endpoints are configured to work with the deployed backend

## 🌐 Deployment

The site is deployed on Surge. To deploy your own version:

```bash
npm run build
cd dist
cp index.html 200.html
surge . <your-domain>.surge.sh
```

## 📄 License

This project is open source and available under the MIT License.

## 📬 Contact

For inquiries or feedback, please reach out through the contact form on the website or via GitHub.

---

Designed with ☕ and code by [Purab2001](https://github.com/Purab2001)
