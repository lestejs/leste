export default function release(data) {
  if (!data) return data
  return JSON.parse(JSON.stringify(data))
}