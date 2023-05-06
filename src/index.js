import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { SideBarProvider } from './contexts/sidebar/sideBar.context';

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
          <App/>
        </SideBarProvider>
      </BrowserRouter>
      </QueryClientProvider> 
    </React.StrictMode>
);

