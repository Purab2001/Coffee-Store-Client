import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
// Material UI + Tailwind integration
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
// Layouts and Components
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './features/coffee/AddCoffee.jsx';
import UpdateCoffee from './features/coffee/UpdateCoffee.jsx';
import CoffeeDetails from './features/coffee/CoffeeDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import SignIn from './features/user/SignIn.jsx';
import SignUp from './features/user/SignUp.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Users from './features/user/Users.jsx';
import UserDetails from './features/user/UserDetails.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch('https://coffee-store-server-gtbz.onrender.com/coffees'),
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
          fetch(`https://coffee-store-server-gtbz.onrender.com/coffees/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "update-coffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-gtbz.onrender.com/coffees/${params.id}`),
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
          fetch('https://coffee-store-server-gtbz.onrender.com/users'),
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
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StyledEngineProvider>
  </StrictMode>
);
