const getPoints = require('./get-points')
const requestAniFrame = require('./request-ani-frame')

// const color = require('color')

setupCanvas()
const ctx = getCanvas().getContext('2d')
const resize = resizeCanvas.bind(this, ctx)
window.addEventListener('resize', resize, false)
resize()

function setupCanvas () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'canvas')
  canvas.setAttribute('width', window.innerWidth)
  canvas.setAttribute('height', window.innerHeight)
  document.body.appendChild(canvas)
}

function resizeCanvas (ctx) {
  const {width, height} = getWindowSize()
  const canvas = document.getElementById('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)

  const points = getPoints(width, height)
  ctx.width = width
  ctx.height = height
  animate(ctx, points, 1, false, 100)
}

function getCanvas () {
  return document.getElementById('canvas')
}

function getWindowSize () {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

function animate (ctx, points, step, rev, maxStep) {
  requestAniFrame(() => {
    draw(ctx, points, step)
    step = rev ? ++step : --step
    rev = step > maxStep || step < 0 ? !rev : rev
    animate(ctx, points, step, rev, maxStep)
  })
}

function draw (ctx, points, step) {
  const {width, height} = getWindowSize()
  ctx.fillStyle = 'rgb(215,197,174)'
  ctx.fillRect(0, 0, width, height)

  points.forEach((point, idx) => {
    const opacity = step * 0.02 / 2
    const [size, x, y, r, g, b] = point
    const gradRad = Math.floor(size * 0.5)
    const gradX = Math.floor(size * 0.5 + x)
    const gradY = Math.floor(size * 0.5 + y)
    const gradient = ctx.createRadialGradient(gradX, gradY, gradRad, gradX, gradY, 0)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${opacity})`)
    ctx.fillStyle = gradient
    ctx.fillRect(x, y, size, size)
  })
}
