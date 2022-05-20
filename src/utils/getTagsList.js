export default function getTagsList(episodeData) {
  const usedTags = []

  episodeData.forEach((ep) =>
    ep.metadata.tags.forEach((tag) => usedTags.push(tag.name))
  )

  return [...new Set(usedTags.sort())]
}
