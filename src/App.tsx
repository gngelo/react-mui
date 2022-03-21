
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/index';
import { MenuLateral } from './shared/components';
import { AppThemeProvider } from './shared/contexts/ThemeContext';


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>  
        <MenuLateral>        
          <AppRoutes/>
        </MenuLateral> 
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
