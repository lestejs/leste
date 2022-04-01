export default function extract(data) {
  if (!data) return data
  return JSON.parse(JSON.stringify(data))
}