import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.amareloClaro};
  padding: 40px 0;
  font-size: 14px;
  margin-top: 40px;
  text-align: center;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 24px;
  justify-content: center;
`

export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 80px;
  align-items: center;
`
