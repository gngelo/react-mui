import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';


interface IFerramentasDaListagemProps {
  textoDaBusca?: string
  textoBotaoNovo?: string
  mostrarInputBusca?: boolean
  mostrarBotaoNovo?: boolean
  aoMudarTextoBusca?: (novoTexto: string)=>void
  aoClicarEmNovo?:()=>void
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca='',
  textoBotaoNovo='Novo',
  mostrarInputBusca=false,
  mostrarBotaoNovo=true,
  aoMudarTextoBusca,  
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
