export default function links(router) {
  document.onclick = (event) => {
    const a = event.target.closest('a[link]')
    if (a && a.href) {
      event.preventDefault()
      history.pushState(null, null, a.href)
      router()
    }
  }
}