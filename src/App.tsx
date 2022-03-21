
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/index';
import { MenuLateral } from './shared/components';
import { DrawerProvider } from './shared/contexts';
import { AppThemeProvider } from './shared/contexts/ThemeContext';


function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>

        <BrowserRouter>  

          <MenuLateral> 

            <AppRoutes/>

          </MenuLateral> 

        </BrowserRouter>
        
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
