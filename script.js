let isIgnite = true

function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? 'explorer' : 'ignite'
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
  document.body.style.background = changeBody(bg)
}

function changeBody(bg) {
  return bg === 'explorer'
    ? '-webkit-gradient(linear, left top, right top, from(#2f0258), to(#000000))'
    : '-webkit-gradient(linear, left top, right top, from(#035c07), to(#000000))'
}
