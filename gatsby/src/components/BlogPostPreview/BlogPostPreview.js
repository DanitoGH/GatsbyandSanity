import { format } from "date-fns"
import { Link } from "gatsby"
import React from "react"
import { buildImageObj, getBlogUrl } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import { Box, Image } from '@chakra-ui/react'

function BlogPostPreview(props) {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
     <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
          src={imageUrlFor(buildImageObj(props.mainImage))
          .width(600)
          .height(Math.floor((9 / 16) * 600))
          .auto("format")
          .url()}
           alt={props.mainImage.alt}
       />
      <Box p="2">
        <Box
          mt="0"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated>
          {props.title}
        </Box>
        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {props._rawExcerpt}
         </Box>
         <Box as="span" color="gray.600" fontSize="sm">
            {format(props.publishedAt, "MMMM Do, YYYY")}
         </Box>
        </Box>
      </Box>
    </Box>
   </Link>
  )
}

export default BlogPostPreview
