import { Box } from '@mui/material';
import { FerramentasDaListagem, FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {

  return(
    <LayoutBaseDePagina 
    titulo='Página inicial' 
    barraDeFerramentas={(
      <FerramentasDaListagem 
        mostrarInputBusca
        textoBotaoNovo={'Nova'}
      />
      )}>
      <FerramentasDeDetalhe/>
      <Box>
      Testando
      </Box>
      
      
    </LayoutBaseDePagina>
  )
}