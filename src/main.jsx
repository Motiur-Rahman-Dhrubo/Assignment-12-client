import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './routes/Router';
import { APIProvider } from '@vis.gl/react-google-maps';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_apiKey_map}>
      <RouterProvider router={Router} />
    </APIProvider>
  </StrictMode>
)
