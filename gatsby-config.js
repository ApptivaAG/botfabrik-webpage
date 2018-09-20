module.exports = {
  siteMetadata: {
    title: 'Botfabrik',
    url: 'botfabrik.netlify.com',
    about: `Die Botfabrik entwickelt individuelle Chatbot-Lösungen von A-Z für alle Lebenslagen. 
    Es entstehen Chatbots für den Kundendienst, das Marketing, die Produktivität oder im Bereich des E-Commerces. 
    Seit der Gründung 2016 konnte die Botfabrik namhafte Kunden gewinnen und mit erfolgreichen Projekten überzeugen: Ringier, Sanagate AG, Energie 360° AG, Allianz Cinema und die Post CH AG. 
    Aber auch kleinere Unternehmen konnte die Botfabrik mit interessanten Lösungen begeistern.`,
    about2: `In der Botfabrik entwickeln wir Bots und Chatbots. 
    Wir hecken Strategien aus, erstellen Konzepte und setzen diese schliesslich um. 
    Unsere Bots schwatzen nicht nur mit Personen, sondern auch mit Systemen (CRM, CMS, ERP usw.). 
    Den Erfolg der Bots stellen wir mit einem intensiven Training sicher.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
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
            },
          },
        ],
      },
    },
  ],
}
