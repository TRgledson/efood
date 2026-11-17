import { useLocation } from 'react-router-dom'

import Prato from '../../models/Prato'
import Product from '../Product'
import { Container, List } from './styles'
import CardMenu from '../CardMenu'

export type Props = {
  background: 'white' | 'black'
  prato: Prato[]
  $grid: 'home' | 'prefil'
}

const ProductsList = ({ background, prato, $grid }: Props) => {
  const location = useLocation()
  const estaEmPerfil = location.pathname === '/perfil'

  return (
    <Container background={background}>
      <div className="container">
        <List $grid={$grid}>
          {estaEmPerfil
            ? prato.map((pratoItem) => (
                <CardMenu
                  key={pratoItem.id}
                  description={pratoItem.description}
                  image={pratoItem.image}
                  title={pratoItem.title}
                />
              ))
            : prato.map((pratoItem) => (
                <Product
                  key={pratoItem.id}
                  description={pratoItem.description}
                  image={pratoItem.image}
                  infos={pratoItem.infos as []}
                  title={pratoItem.title}
                  score={pratoItem.score as string}
                />
              ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
