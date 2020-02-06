import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Section, Container } from '../styles'

const EmployeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
`
const EmployeeWrapper = styled.div`
  font-size: 0.8em;
  flex: 1 0 10rem;
  margin: 2rem 0.5rem;

  @media (max-width: 500px) {
    text-align: center;
  }
`
const Employee = styled.div`
  width: 10rem;
  margin-left: auto;
  margin-right: auto;
`
const Avatar = styled(Img)`
  border: 3px solid ${p => p.theme.primary};
  border-radius: 50%;
  margin-right: 1em;
  transform: translateZ(0); /* Safari bug rounded image flicker  */
`
const Info = styled.div``

const Name = styled.h2`
  margin: 0;
  color: ${props => props.theme.primary};
`
const Claim = styled.div`
  font-size: 0.8em;
`
const Contact = styled.div`
  font-size: 0.9em;
  margin-top: 1em;
  a {
    display: block;
    margin-top: 0.4em;
    color: #777;
    white-space: nowrap;

    svg {
      font-size: 0.9em;
      margin-right: 0.4em;
      color: #aaa;
    }
  }
`
const query = graphql`
  query {
    employees: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___name] }
      filter: { frontmatter: { templateKey: { eq: "employee" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            templateKey
            name
            claim
            contact {
              tel
              mail
              twitter
            }
            preview {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default () => {
  const { employees } = useStaticQuery(query)

  return (
    <Section id="team" dark>
      <Container>
        <h2>Team</h2>
        <p>
          Die Botfabrik besteht heute aus einer statthafter Anzahl
          Teammitglieder. Zusätzlich verreichten einen Hand voll Bots ihre
          Arbeit bei uns; unter anderem der Fabrik-Bot Pit.
        </p>
        <EmployeeList>
          {employees.edges.map(edge => {
            const { name, claim, contact, preview } = edge.node.frontmatter
            return (
              <EmployeeWrapper key={edge.node.id}>
                <Employee>
                  <Info>
                    <Avatar fixed={preview.childImageSharp.fixed} />
                    <Name>{name}</Name>
                    <Claim>{claim}</Claim>
                  </Info>
                  <Contact>
                    <a href={`tel:${contact.tel}`}>{contact.tel}</a>
                    <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
                    {contact.twitter && (
                      <a href={`https://twitter.com/${contact.twitter}`}>
                        @{contact.twitter}
                      </a>
                    )}
                  </Contact>
                </Employee>
              </EmployeeWrapper>
            )
          })}
        </EmployeeList>
      </Container>
    </Section>
  )
}
