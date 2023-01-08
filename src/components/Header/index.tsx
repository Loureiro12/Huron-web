import logo from '../../assets/logoHuron.png'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Huron" />
    </HeaderContainer>
  )
}