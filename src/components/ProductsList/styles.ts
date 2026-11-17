import styled from 'styled-components'

import type { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'prato' | '$grid'>
>`
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'white' ? cores.branco : cores.laranja};
  }
`

export const List = styled.ul<Omit<Props, 'title' | 'prato' | 'background'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$grid === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) => (props.$grid === 'home' ? '80px' : '32px')};
  margin-top: ${(props) => (props.$grid === 'home' ? '80px' : '56px')};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
