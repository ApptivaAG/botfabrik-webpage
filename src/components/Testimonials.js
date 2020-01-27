import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Section as SectionDefault, Container } from '../styles'

const Section = styled(SectionDefault)`
  padding-top: 4em;
`

const TestimonialStyle = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1 1 18em;
  max-width: 24rem;
  padding: 1rem;
`
const Person = styled.div`
  display: flex;
  color: #444;

  p {
    line-height: 1;
  }
`
const Avatar = styled(Img)`
  border: 2px solid #e2e2e2;
  border-radius: 50%;
  margin-right: 1em;
  transform: translateZ(0); /* Safari bug rounded image flicker  */
`
const Name = styled.p`
  font-weight: 500;
  margin: 0;
`
const Position = styled.p`
  margin: 0;
`
const Company = styled.p`
  font-weight: 800;
  margin: 0;
`
const Statement = styled.p`
  font-style: italic;
  margin-top: 0.8em;
`
const Testimonial = ({
  testimonial: { name, position, testimonial, image, organisation },
}) => {
  return (
    <TestimonialStyle>
      <Person>
        <Avatar fixed={image.asset.localFile.childImageSharp.fixed} />
        <div>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Company>{organisation}</Company>
        </div>
      </Person>
      <Statement>«{testimonial}» </Statement>
    </TestimonialStyle>
  )
}

const TestimonialsStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.8rem;
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 0;
  list-style: none;
`

const query = graphql`
  query testimonialsQuery {
    data: allSanityTestimonials {
      nodes {
        id
        organisation
        name
        position: function
        image {
          asset {
            localFile {
              childImageSharp {
                fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

const Testimonials = () => {
  const {
    data: { nodes: testimonials },
  } = useStaticQuery(query)

  return (
    <Section>
      <Container>
        <TestimonialsStyle>
          {testimonials.map(testimonial => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </TestimonialsStyle>
      </Container>
    </Section>
  )
}

export default Testimonials
