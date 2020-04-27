export default function utmParameters(link) {
  return `${link}${window.location.search}`
}
