import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.amareloClaro};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  border: none;
  padding: 4px;
  margin-top: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  color: ${cores.amareloClaro};
  background-color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  margin: 8px;
  display: inline-block;
`
