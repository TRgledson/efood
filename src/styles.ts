import { createGlobalStyle } from 'styled-components'

export const cores = {
  pele: '#fef8f0', //cor do fundo da pagina
  amareloClaro: '#FFEBD9', // cor da letra do botão, letra header
  laranja: '#E66767', //Cor do botão, borda do card, letra card,
  branco: '#fefffe'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.pele};
    color: ${cores.laranja};
    font-size: 14px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`
