const animate = require('./animate')
const getPoints = require('./get-points')

module.exports = { setup, resize }

function setup () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'canvas')
  canvas.setAttribute('width', window.innerWidth)
  canvas.setAttribute('height', window.innerHeight)
  document.body.appendChild(canvas)
}

function resize (ctx) {
  const {innerWidth: width, innerHeight: height} = window
  const canvas = document.getElementById('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)

  const points = getPoints(width, height)
  ctx.width = width
  ctx.height = height
  animate(ctx, points, 1, false, 100)
}
