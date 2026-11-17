import Tag from '../Tag'
import * as S from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  description: string
  image: string
  infos: string[]
  score: string
  title: string
}

const Product = ({ description, image, infos, score, title }: Props) => (
  <S.Card>
    <S.ImageMenu src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.Conteudo>
      <S.Titulo>{title}</S.Titulo>
      <div>
        <S.Titulo>{score}</S.Titulo>
        <S.Estrela src={estrela} alt="estrela" />
      </div>
    </S.Conteudo>
    <S.Descricao>{description}</S.Descricao>
    <Button
      type="link"
      to="/perfil"
      title="Clique aqui para escolher esse prato."
    >
      Saiba mais
    </Button>
  </S.Card>
)

export default Product
