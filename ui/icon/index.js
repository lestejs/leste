function randomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function iconGenerate(dec) {
  if (!dec) return
  const hasPexel = (n) => {
    return dec[n] === '1'
  }
  let icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">`
  let step = 0
  if (dec === 'random') {
    const x1 = randomNumber(0,4)
    const y1 = randomNumber(0,4)
    const x2 = x1 + randomNumber(1,3)
    const y2 = y1 + randomNumber(1,3)
    for (let y = 0;y < 5;y++) {
      for (let x = 0;x < 5;x++) {
        icon += `<rect x="${x * 20}" y="${y * 20}" width="20" height="20" fill="${((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) ? 'none' : ''}" shape-rendering="crispEdges"/>`
        step++
      }
    }
  } else {
    for (let y = 0;y < 5;y++) {
      for (let x = 0;x < 5;x++) {
        icon += `<rect x="${x * 20}" y="${y * 20}" width="20" height="20" fill="${hasPexel(step) ? '' : 'none'}" shape-rendering="crispEdges"/>`
        step++
      }
    }
  }
  return icon + '</svg>'
}
export { iconGenerate }