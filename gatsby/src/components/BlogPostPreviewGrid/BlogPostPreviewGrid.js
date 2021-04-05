import { Link } from "gatsby"
import React from "react"
import BlogPostPreview from "../BlogPostPreview/BlogPostPreview"
import { Box } from '@chakra-ui/react'


function BlogPostPreviewGrid(props) {
  return (
    <Box maxW="sm">
      {props.title && <h2 className='headline'>{props.title}</h2>}
      <Box className='grid'>
        {props.nodes &&
          props.nodes.map((node) => (
            <Box key={node.id}>
              <BlogPostPreview {...node} />
            </Box>
          ))}
      </Box>
      {props.browseMoreHref && (
        <div className='browseMoreNav'>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </Box>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
}

export default BlogPostPreviewGrid
