import React from 'react'
import { graphql } from 'gatsby'

const Generic = ({ data }) => {
  const {markdownRemark} = data
  return (
    <div>
      <h2>{markdownRemark.frontmatter.title}</h2>
      <p>{markdownRemark.frontmatter.description}</p>
      <p>Testing line</p>
      <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}></div>
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        slug
        title
      }
    }
  }
`

export default Generic
