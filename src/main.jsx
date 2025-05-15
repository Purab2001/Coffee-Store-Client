import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
// Layouts and Components
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch('https://coffee-store-server-3443.onrender.com/coffees'),
        hydrateFallbackElement: <LoadingSpinner />,
        Component: Home,
      },
      {
        path: "add-coffee",
        Component: () => (
          <ProtectedRoute>
            <AddCoffee />
          </ProtectedRoute>
        ),
      },
      {
        path: "coffee/:id",
        Component: (props) => (
          <ProtectedRoute>
            <CoffeeDetails {...props} />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-3443.onrender.com/coffees/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "update-coffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-3443.onrender.com/coffees/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
        Component: (props) => (
          <ProtectedRoute>
            <UpdateCoffee {...props} />
          </ProtectedRoute>
        ),
      },
      {
        path: "sign-in",
        Component: SignIn,
      },
      {
        path: "sign-up",
        Component: SignUp,
      },
      {
        path: "users",
        loader: () =>
          fetch('http://localhost:3000/users'),
        hydrateFallbackElement: <LoadingSpinner />,
        Component: Users,
      },
      {
        path: "user-details",
        Component: UserDetails,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
