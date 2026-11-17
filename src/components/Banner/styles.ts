import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    box-sizing: border-box;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  color: ${cores.branco};
`

export const Origem = styled.p`
  font-size: 32px;
  color: ${cores.branco};
  font-weight: 100;
`
