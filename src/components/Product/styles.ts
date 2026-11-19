import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  margin-bottom: 48px;
  border: solid 1px;
  padding: 0;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const ImageMenu = styled.img`
  display: block;
  height: 217px;
  width: calc(100% + 2px);
  object-fit: cover;
  margin: -1px -1px 0 -1px;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  font-weight: 400;
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Conteudo = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;

  ${TagContainer} {
    background-color: transparent;
    color: ${cores.laranja};
  }

  div {
    display: flex;
  }
`

export const Estrela = styled.img`
  height: 21px;
  width: 21px;
  margin: 0;
  margin: -2px 0 0 8px;
`
