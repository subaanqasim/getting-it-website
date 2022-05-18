export default function getTagsList(episodeData) {
  const usedTags = []

  episodeData.forEach((ep) => ep.tags.forEach((tag) => usedTags.push(tag)))

  return [...new Set(usedTags.sort())]
}
