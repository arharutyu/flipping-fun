import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';

import MainLayout from './layouts/MainLayout';
import AddOns from './routes/AddOns';
import Home from './routes/Home';
import { AddOnsProvider } from './context/AddOnsContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-ons",
        element:
          <AddOnsProvider>
            <AddOns />
          </AddOnsProvider>,
      },

    ],
  },
]);

function App() {

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

export default App
