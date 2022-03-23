import { createContext, useCallback, useContext, useState } from 'react';


interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOption[];
  toggleDrawerOpen: () => void;
  setDrawerOptions:(newDrawerOptions: IDrawerOption[])=>void;
}
const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

export const DrawerProvider: React.FC = ({ children }) => {

  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, []) 

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions)
  }, []) 

  return (
    <DrawerContext.Provider value={{
      isDrawerOpen, 
      drawerOptions, 
      toggleDrawerOpen, 
      setDrawerOptions: handleSetDrawerOptions }}
    >
      {children}
    </DrawerContext.Provider>
  )
}