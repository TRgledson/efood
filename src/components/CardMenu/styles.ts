import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 32px;
  padding: 8px;
  color: ${cores.amareloClaro};
`

export const ImageCard = styled.img`
  height: 167px;
  width: 100%;
  object-fit: cover;
`

export const Titulo = styled.h3`
  margin-top: 8px;
  font-weight: bold;
  font-size: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  font-weight: 400;
  margin-top: 8px;
`
