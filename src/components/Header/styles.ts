import { styled } from 'styled-components'
import type { Props } from '.'

export const HeaderBar = styled.header<Props>`
  height: ${(props) => (props.$variant === 'flex' ? '186px' : '384px')};
  margin-bottom: ${(props) => (props.$variant === 'flex' ? 'auto' : '80px')};
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin-top: ${(props) => (props.$variant === 'flex' ? 'auto' : '64px')};
  }

  .container {
    display: ${(props) => (props.$variant === 'flex' ? 'grid' : 'block')};
    grid-template-columns: ${(props) => (props.$variant === 'flex' ? '1fr 1fr 1fr' : 'none')};
    justify-content: space-between;
    align-items: center;
  }
`

export const Titulo = styled.h1<Props>`
  font-size: ${(props) => (props.$variant === 'flex' ? '18px' : '36px')};
  font-weight: bold;
  margin-bottom: ${(props) => (props.$variant === 'flex' ? '80px' : '40px')};
  margin-top: ${(props) => (props.$variant === 'flex' ? '80px' : '136px')};
  @media (max-width: 768px) {
    padding: 8px;
    margin: 40px auto 40px auto;
  }
`
