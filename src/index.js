import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { SideBarProvider } from './contexts/sidebar/sideBar.context';
import { MovieDetailsProvider } from './contexts/sidebar/movieDetails.context';

const queryClient = new QueryClient({
  queries:{
    refetchOnWindowFocus:false
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SideBarProvider>
          <MovieDetailsProvider>
              <App/>
          </MovieDetailsProvider>
        </SideBarProvider>
      </BrowserRouter>
      </QueryClientProvider> 
    </React.StrictMode>
);

