import styled from 'styled-components'

require('prismjs/themes/prism.css')

const Markdown = styled.div`
  margin-bottom: 4rem;

  h1,
  h2,
  h3 {
    margin-top: 1.6em;
    margin-bottom: 0.6em;
  }

  img,
  video {
    max-width: 100%;
  }
  img[src$='.svg'] {
    max-height: 22rem;
  }

  a {
    word-break: break-all;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    max-width: 960px;
    padding-right: 1em;
    padding-left: 1em;
  }

  .full-width {
    position: relative;
    width: 100vw;
    left: 49.4%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .dark-section {
    background-color: #f6f6f6;
    padding-top: 1px;
    padding-bottom: 4em;
  }

  .full-width + .dark-section {
    margin-top: 4em;
  }

  .custom-block-left {
    @media (min-width: 640px) {
      float: left;
      width: 16rem;
      max-width: 100%;
      margin-right: 2rem;
    }
  }

  .custom-block-right {
    @media (min-width: 640px) {
      float: right;
      width: 16rem;
      max-width: 100%;
      margin-left: 2rem;
    }
  }

  .custom-block-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;

    .custom-block-col {
      flex: 1 1 14rem;
      margin: 0 1rem 1rem;
    }
  }

  .custom-block-avatar {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid #ececec;
    border-radius: 50%;
    overflow: hidden;

    & > p {
      margin: 0;
    }
    @media (min-width: 640px) {
      width: 200px;
    }
  }

  .custom-block-no-margin > * {
    margin: 0 !important;
  }

  @media (min-width: 400px) {
    .gatsby-resp-image-wrapper {
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.06);
      }
    }
  }

  .gatsby-resp-image-background-image {
    background-image: none !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
  }

  .gatsby-resp-image-wrapper[style*='float:right'] {
    max-width: 240px !important;
    margin-left: 2em !important;
    img {
      position: relative !important;
    }
    span {
      padding-bottom: 0 !important;
    }
  }

  .emojione {
    height: 1em;
    bottom: -3px;
    position: relative;
  }

  .gatsby-highlight {
    font-size: 0.8em;
  }
`

const Content = ({ content, className }) => (
  <Markdown className={className}>{content}</Markdown>
)

export const HTMLContent = ({ content, className }) => (
  <Markdown
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default Content
