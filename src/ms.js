export default function ms(root, component) {
  let iframe = document.createElement('iframe')
  document.head.appendChild(iframe)
  const script = document.createElement('script')
  script.type = 'module'
  script.src = './test1.js'
  const loaded = new Promise((resolve) => {
    script.onload = resolve
  })
  loaded.then(() => {
    iframe.contentWindow.mes(root, component)
  })
  iframe.contentDocument.head.appendChild(script)
}