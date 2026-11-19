import styled from 'styled-components'
import { cores } from '../../styles'

import type { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.amareloClaro};
  font-size: ${(props) => (props.size === 'big' ? '18px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '0' : '4px 6px')};
  display: inline-block;
`
