


import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

interface IBarraDeFerramentasProps {
  textoDaBusca?: string
  mostrarInputBusca?: boolean
  aoMudarTextoBusca?: (novoTexto: string)=>void
  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  aoClicarEmNovo?:()=>void
}

export const BarraDeFerramenta: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca='',
  mostrarInputBusca=false,
  aoMudarTextoBusca,  
  textoBotaoNovo='Novo',
  mostrarBotaoNovo=true,
  aoClicarEmNovo
}) => {

  const theme = useTheme()

  return ( 
    <Box 
    gap={1}
    marginX={1}
    padding={1}
    paddingX={2}
    display={'flex'}
    alignItems={'center'}    
    height={theme.spacing(5)}
    component={Paper} 
    >
      {
        mostrarInputBusca && (
          <TextField 
          size={'small'}
          placeholder={'Pesquisar...'}
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
          />
        )
      }
      <Box flex={1} display={'flex'} justifyContent={'end'}>
        {mostrarBotaoNovo && ( 
          <Button 
          color={'primary'}
          disableElevation
          variant={'contained'}
          endIcon={<Icon>add</Icon>} 
          onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
      
    </Box>
  )
}