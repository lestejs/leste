export default function catchLink(app, router) {
  window.addEventListener('popstate', () => {
    router(app)
  }, false)
  app.onclick = (ev) => {
    const a = ev.target.closest('a')
    if (a && a.dataset.link && a.href) {
      ev.preventDefault()
      history.pushState(null, null, a.href)
      router(app)
    }
  }
}