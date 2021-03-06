import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`

function LayoutContainer(props) {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          )
        }
        return <Layout {...props} siteTitle={data.site.title} />
      }}
    />
  )
}

export default LayoutContainer
