import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-3443.onrender.com/coffees'),
        Component: Home,
      },
      {
        path: "add-coffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
        loader: ({ params }) => fetch(`https://coffee-store-server-3443.onrender.com/coffees/${params.id}`),
      },
      {
        path: "update-coffee/:id",
        loader: ({ params }) => fetch(`https://coffee-store-server-3443.onrender.com/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
