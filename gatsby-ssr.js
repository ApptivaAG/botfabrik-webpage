const React = require('react')
const fs = require('fs')
const CleanCSS = require('clean-css')

const normalize = fs.readFileSync(
  'node_modules/normalize.css/normalize.css',
  'utf8'
)
const style = `
  ${normalize}

  @font-face {
    font-family: 'Gentona';
    font-display: fallback;
    src: url('/font/Gentona-ExtraBold.woff2') format('woff2'),
      url('/font/Gentona-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gentona';
    font-display: fallback;
    src: url('/font/Gentona-Bold.woff2') format('woff2'),
      url('/font/Gentona-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gentona';
    font-display: fallback;
    src: url('/font/Gentona-Medium.woff2') format('woff2'),
      url('/font/Gentona-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gentona';
    font-display: fallback;
    src: url('/font/Gentona-Book.woff2') format('woff2'),
      url('/font/Gentona-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gentona';
    font-display: fallback;
    src: url('/font/Gentona-Light.woff2') format('woff2'),
      url('/font/Gentona-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gentona';
    font-display: fallback;
    src: url('/font/Gentona-ExtraLight.woff2') format('woff2'),
      url('/font/Gentona-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
`
// eslint-disable-next-line no-underscore-dangle
const __html = new CleanCSS().minify(style).styles

exports.onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <style
      key="font-face"
      data-normalize
      data-font-face
      data-defined-in="gatsby-ssr.js"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html,
      }}
    />,
  ])
  setPostBodyComponents([
    // <script
    //   id="chatbot"
    //   key="chatbot"
    //   type="text/javascript"
    //   data-server="https://pit.botfabrik.ch/webclient"
    //   defer
    //   src="https://pit.botfabrik.ch/webclient/embed/bundle.js"
    // />,
  ])
}
