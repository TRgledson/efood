import * as S from './styles'
import Button from '../Button'

type Props = {
  description: string
  image: string
  title: string
}

const CardMenu = ({ description, image, title }: Props) => (
  <S.Card>
    <S.ImageCard src={image} alt={title} />
    <S.Titulo>{title}</S.Titulo>
    <S.Descricao>{description}</S.Descricao>
    <Button
      type="button"
      to="/perfil"
      title="Clique aqui para adcionar ao carrinho."
    >
      Adicionar ao carrinho
    </Button>
  </S.Card>
)

export default CardMenu
