const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const episodePageTemplate = path.resolve(
    `./src/templates/episode-page-template.jsx`,
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
      path: `/episodes/${ep.node.slug}`,
      component: episodePageTemplate,
      context: {
        id: ep.node.id,
        nextEpId: ep.next === null ? ep.next : ep.next.id,
        prevEpId: ep.previous === null ? ep.previous : ep.previous.id,
      },
    })
  })

  createRedirect({
    fromPath: `/podcast/*`,
    toPath: `/episodes/*`,
    isPermanent: true,
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@splinetool/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
