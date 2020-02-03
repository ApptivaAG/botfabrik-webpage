import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import fontFace from './font-face'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${fontFace}

  html, body, #___gatsby {
    height: 100%;
  }
  #___gatsby > div {
    height: 100%;
  }

  html {
    font-size: 20px;
    color: ${p => p.theme.text};
    font-family: Gentona, sans-serif;
    font-weight: 300;
  }

  p {
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    ${'' /* higher contrast for accessability */}
    color: ${p => p.theme.primarySave};
    font-weight: 500;
    
    .gatsby-image-wrapper {
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.06);
      }
    }
  }

  li {
    margin-bottom: 0.5em;
  }

  pre {
    padding: 1rem;
    background-color: hsla(0, 0%, 0%, 0.02);
    overflow-x: auto;
    border: 1px #eee solid;
  }

  blockquote {
    margin: 1rem;
    background: ${p => p.theme.lightBg};
    padding: 0 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.04) ;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04) ;
    border-right: 1px solid rgba(0, 0, 0, 0.04) ;
    border-left: 3px solid ${p => p.theme.primary};
  }

  svg {
    fill: currentColor;
  }

  iframe {
    border: 0;
  }
`

export default GlobalStyle
