import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Overdrive from 'react-overdrive'

const Project = styled.article`
  position: relative;

  .project-details {
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    position: absolute;
    bottom: 0;
    h3 {
      padding: 1em;
      margin-bottom: 0px;
      text-align: center;
      text-decoration: none;
      a {
        text-decoration: inherit;
      }
    }
  }

  @media (min-width: 555px) {
    flex-wrap: nowrap;
  }
`

export default ({ details }) => {
  return (
    <Project>
      <Link to={`projects/${details.uid}`}>
        {details.data.featured_img.localFile && (
          <Overdrive duration={500} id={`${details.data.title.text}-cover`}>
            <Img
              fluid={details.data.featured_img.localFile.childImageSharp.fluid}
            />
          </Overdrive>
        )}
      </Link>
      <div className="project-details">
        <h3>
          <Link to={`projects/${details.uid}`}>{details.data.title.text}</Link>
        </h3>
      </div>
    </Project>
  )
}