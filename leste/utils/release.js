export default function release(data) {
  if (!data) return data
  if (data instanceof HTMLCollection || data instanceof NodeList || data instanceof Element) return data
  return JSON.parse(JSON.stringify(data))
}