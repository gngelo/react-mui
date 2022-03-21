import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
import { useDrawerContext } from './../shared/contexts/DrawerContext';

export const AppRoutes =()=>{

  const { toggleDrawerOpen } = useDrawerContext();
  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Teste</Button>}/>
      <Route path="*" element={<Navigate to="pagina-inicial"/>}/>
    </Routes>
  )
} 