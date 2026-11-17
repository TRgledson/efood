import { Link, useLocation } from 'react-router-dom'

import { HeaderBar, Titulo } from './styles'

import headerImg from '../../assets/images/fundoHeader.png'
import logo from '../../assets/images/logo.png'

export type Props = {
  $variant: 'flex' | 'block'
}

const Header = ({ $variant }: Props) => {
  const location = useLocation()
  const estaEmPerfil = location.pathname === '/perfil'

  if (estaEmPerfil === true) {
    return (
      <HeaderBar
        $variant={$variant}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="container">
          <Titulo $variant={$variant}>Restaurantes</Titulo>
          <Link to="/">
            <img src={logo} alt="EFOOD"></img>
          </Link>
          <Titulo $variant={$variant}>0 produto(s) no carrinho</Titulo>
        </div>
      </HeaderBar>
    )
  }
  return (
    <HeaderBar
      $variant={$variant}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="container">
        <img src={logo} alt="EFOOD"></img>
        <Titulo $variant={$variant}>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Titulo>
      </div>
    </HeaderBar>
  )
}

export default Header
