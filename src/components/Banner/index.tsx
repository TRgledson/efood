import { Imagem, Origem, Titulo } from './styles'

import bannerImg from '../../assets/images/la_dolce_vita_trattoria.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Origem>Italiana</Origem>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner
