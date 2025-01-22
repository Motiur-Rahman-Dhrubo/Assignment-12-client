import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './routes/Router';
import { APIProvider } from '@vis.gl/react-google-maps';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <APIProvider apiKey={import.meta.env.VITE_apiKey_map}>
          <RouterProvider router={Router} />
        </APIProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
