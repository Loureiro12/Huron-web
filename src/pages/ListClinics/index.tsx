import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { styled, alpha } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import EditIcon from '@mui/icons-material/Edit'

import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FloatingBox } from '../../components/FloatingBox'
import { Header } from '../../components/Header'

import {
  Container,
  Content,
  ContentBox,
  TextPosition,
  Text,
  ContentHeaderPage,
  TextHeaderPage,
  TextFloatingBox,
  ContainerFloatingBox,
  ButtonBox,
} from './styles'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export function ListClinics() {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContentHeaderPage>
            <TextHeaderPage>Clinicas Cadastradas</TextHeaderPage>
            <Button
              text="Criar nova"
              type="button"
              onClick={() => navigate('/create-clinic')}
            />
          </ContentHeaderPage>
          <Box style={{ mg: '1.375rem 0rem' }}>
            <ContentBox>
              <TextPosition>01</TextPosition>
              <Text>Nome da clínica</Text>
              <Text>(31) 99415-2935</Text>

              <div>
                <ButtonBox onClick={handleClick}>
                  <MoreVertIcon />
                </ButtonBox>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <CheckIcon />
                    Entrar
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <DeleteIcon />
                    Excluir
                  </MenuItem>
                </StyledMenu>
              </div>
            </ContentBox>
          </Box>
        </Content>
      </Container>
      <FloatingBox>
        <ContainerFloatingBox>
          <LogoutIcon />
          <TextFloatingBox>Sair</TextFloatingBox>
        </ContainerFloatingBox>
      </FloatingBox>
    </>
  )
}
