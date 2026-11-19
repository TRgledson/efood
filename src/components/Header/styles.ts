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
    justify-self: center;
  }

  .container {
    display: ${(props) => (props.$variant === 'flex' ? 'grid' : 'block')};
    grid-template-columns: ${(props) => (props.$variant === 'flex' ? '1fr auto 1fr' : 'none')};
    align-items: center;
  }
`

export const Titulo = styled.h1<Props>`
  font-size: ${(props) => (props.$variant === 'flex' ? '18px' : '36px')};
  font-weight: 900;
  margin-bottom: ${(props) => (props.$variant === 'flex' ? '80px' : '40px')};
  margin-top: ${(props) => (props.$variant === 'flex' ? '80px' : '136px')};
  justify-self: start;
  text-align: left;

  &:last-child {
    justify-self: end;
    text-align: right;
  }

  @media (max-width: 768px) {
    padding: 8px;
    margin: 40px auto 40px auto;
  }
`
