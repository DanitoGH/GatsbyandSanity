import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/BlogPostPreviewGrid/BlogPostPreviewGrid'
import { Container, Box, Grid } from '@chakra-ui/react'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/SEO/SEO'
import Layout from "../containers/layout"

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
const BlogPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Box>
        <GraphQLErrorList errors={errors} />
      </Box>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Grid>
      <SEO title="Blog" />
      <Layout mt="4">
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewGrid nodes={postNodes} />
        )}
      </Layout>
    </Grid>
  )
}

export default BlogPage