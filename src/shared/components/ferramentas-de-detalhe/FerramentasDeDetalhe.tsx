import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  mostrarBotaoSalvarEFechar=true,

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

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
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
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            Salvar
          </Typography>
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60}/>)}
      

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}  
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            Salvar e Voltar
          </Typography>
          
        </Button>
      )}
      {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60}/>)}
      

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}  
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
           Apagar
          </Typography>
          
          
        </Button>
      )}
      {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60}/>)}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && !mdDown) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}  
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >            
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {(mostrarBotaoNovoCarregando && !smDown && !mdDown) && (<Skeleton width={110} height={60}/>)}
      
      {(
        mostrarBotaoVoltar && (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
      ) && (<Divider variant='middle' orientation='vertical'/>)}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(
        <Button 
          color={'primary'}
          disableElevation
          variant={'outlined'}
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}  
        >
          <Typography
            variant={'button'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            Voltar
          </Typography>
          
        </Button>
      )}
       {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60}/>)}
    </Box>
  )
}