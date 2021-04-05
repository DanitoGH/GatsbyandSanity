import React from "react"
import { format, distanceInWords, differenceInDays } from "date-fns"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import PortableText from "../portableText"
import { Box, Image , Heading , Text } from '@chakra-ui/react'

function BlogPost(props) {
  const { _rawBody, title, mainImage, publishedAt } = props
  return (
    <Box mt="6">
      {mainImage && mainImage.asset && (
        <div className="mainImage">
          <Image
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
              width="100%"
            alt={mainImage.alt}
          />
        </div>
      )}
      <Box>
       <Heading mt="2" isTruncated>{title}</Heading>
        {publishedAt && (
          <Text color="gray.500">
            {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? distanceInWords(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), "MMMM Do, YYYY")}
          </Text>
        )}
        {_rawBody && <PortableText blocks={_rawBody} />}
      </Box>
    </Box>
  )
}

export default BlogPost
