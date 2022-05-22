const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const episodePageTemplate = path.resolve(
    `./src/templates/episode-page-template.js`
  )

  const { data } = await graphql(`
    {
      allContentfulPodcasts(sort: { fields: datePublished, order: ASC }) {
        edges {
          node {
            id
            slug
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `)

  data.allContentfulPodcasts.edges.forEach((ep) => {
    createPage({
      path: `/${ep.node.slug}`,
      component: episodePageTemplate,
      context: {
        id: ep.node.id,
        nextEpId: ep.next === null ? ep.next : ep.next.id,
        prevEpId: ep.previous === null ? ep.previous : ep.previous.id,
      },
    })
  })
}
