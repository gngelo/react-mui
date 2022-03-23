import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';
import React from 'react';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string

  mostrarBotaoNovo?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvarEFechar?: boolean

  mostrarBotaoNovoCarregando?: boolean
  mostrarBotaoSalvarCarregando?: boolean
  mostrarBotaoVoltarCarregando?: boolean
  mostrarBotaoApagarCarregando?: boolean
  mostrarBotaoSalvarEFecharCarregando?: boolean

  aoClicarEmNovo?: ()=>void
  aoClicarEmVoltar?: ()=>void
  aoClicarEmApagar?: ()=>void
  aoClicarEmSalvar?: ()=>void
  aoClicarEmSalvarEFechar?: ()=>void
} 


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo= true,
  mostrarBotaoVoltar=true,
  mostrarBotaoApagar=true,
  mostrarBotaoSalvar=true,
  mostrarBotaoSalvarEFechar=false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {

  const theme = useTheme()
  return(
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

      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button 
          color={'primary'}
          disableElevation
          variant={'contained'}
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}  
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60}/>)}
      

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}  
        >
          Salvar e Voltar
        </Button>
      )}
      {mostrarBotaoSalvarEFecharCarregando && (<Skeleton width={180} height={60}/>)}
      

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}  
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60}/>)}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}  
        >
          {textoBotaoNovo}
        </Button>
      )}
      {mostrarBotaoNovoCarregando && (<Skeleton width={110} height={60}/>)}
      
      <Divider variant='middle' orientation='vertical'/>

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}  
        >
          Voltar
        </Button>
      )}
       {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60}/>)}
    </Box>
  )
}