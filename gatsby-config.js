module.exports = {
  siteMetadata: {
    title: 'Botfabrik',
    siteUrl: 'https://botfabrik.ch', // also needed in gatsby-plugin-sitemap
    about: `In der Botfabrik entwickeln wir individuelle Chatbot-Lösungen von A-Z für alle Lebenslagen. 
    Wir hecken Strategien aus, erstellen Konzepte und setzen diese schliesslich um. 
    Es entstehen Chatbots für den Kundendienst, das Marketing, die Produktivität oder im Bereich des E-Commerces.
    Unsere Bots schwatzen nicht nur mit Personen, sondern auch mit Systemen (CRM, CMS, ERP usw.).
    Seit der Gründung 2016 konnte die Botfabrik namhafte Kunden gewinnen und mit erfolgreichen Projekten überzeugen: 
    Ringier, Roche AG, Energie 360° AG, Allianz Cinema, Suva und die Post CH AG. 
    Aber auch kleinere Unternehmen konnte die Botfabrik mit interessanten Lösungen begeistern.`,
    description:
      'Sorgen sie für echte Entlastung mit integrierten, passgenauen Chatbots, die ihre Anwender begeistern.',
    logo: `/img/logo-1200x630.png`,
    twitter: '@ApptivaTeam',
    fbAppId: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: { formats: ['auto', 'avif'] },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
              linkImagesToOriginal: false, // because of zoom
              wrapperStyle: fluidResult => {
                return fluidResult.aspectRatio < 1.2
                  ? 'max-width: 360px !important;'
                  : 'width: 100%;'
              },
            },
          },
          `gatsby-remark-images-medium-zoom`,
          `gatsby-remark-static-images`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-embedder`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-66015649-4', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-sitemap`, // siteUrl needs to be in siteMetadata for this plugin to work
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Botfabrik`,
        short_name: `Botfabrik`,
        start_url: `/`,
        icon: `src/img/logo.svg`,
        background_color: `#ffffff`,
        theme_color: `#009FDC`,
        display: `standalone`,
      },
    },
  ],
}
