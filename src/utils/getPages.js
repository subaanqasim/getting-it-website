export default function getPages(epList, pageSize) {
  const pagedArr = []

  for (let i = 0; i < epList.length; i += pageSize) {
    pagedArr.push(epList.slice(i, i + pageSize))
  }

  return pagedArr
}
