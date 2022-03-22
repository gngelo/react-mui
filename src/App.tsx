


import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { DrawerProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom'
import { MenuLateral } from './shared/components';
import { AppRoutes } from './routes/index';


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
