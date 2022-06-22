import type { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      id="chatbot"
      key="chatbot"
      type="text/javascript"
      data-server="https://pit.botfabrik.ch/webclient"
      defer
      src="https://pit.botfabrik.ch/webclient/embed/bundle.js"
    />,
  ])
}