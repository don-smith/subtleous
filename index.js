// const color = require('color')

const requestAnimFrame = (function (callback) {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

setupCanvas()
resizeCanvas()
window.addEventListener('resize', resizeCanvas, false)

const ctx = getCanvas().getContext('2d')
const maxStep = 100
const rev = false
const step = 1
const {width, height} = getWindowSize()
const points = getPoints(width, height)
animate(ctx, points, step, rev, maxStep)

function setupCanvas () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'canvas')
  canvas.setAttribute('width', window.innerWidth)
  canvas.setAttribute('height', window.innerHeight)
  document.body.appendChild(canvas)
}

function resizeCanvas () {
  const ctx = getCanvas()
  const {width, height} = getWindowSize()
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
  requestAnimFrame(() => {
    draw(ctx, points, step)
    step = rev ? ++step : --step
    rev = step > maxStep || step < 0 ? !rev : rev
    animate(ctx, points, step, rev, maxStep)
  })
}

function getPoints (width, height, palette) {
  // [size, x, y, r, g, b]
  const points = []
  const count = 100

  for (let i = 0; i < count; i++) {
    points.push(getPoint(width, height, palette))
  }
  // points.push([500, 100, 300, 255, 0, 0])
  // points.push([200, 100, 100, 0, 255, 0])
  // points.push([100, 400, 300, 0, 0, 255])
  // points.push([200, 100, 500, 255, 255, 0])
  return points
}

function getPoint (width, height, palette) {
  const point = []
  // const point = [500, 100, 300, 255, 0, 0]
  point.push(getRandomSize(width, height))
  Array.prototype.push.apply(point, getRandomLocation(width, height))
  Array.prototype.push.apply(point, getRandomColor(palette))
  return point
}

function getRandomSize (width, height) {
  const min = 200
  const max = Math.min(width / 2, height / 2)
  const size = Math.random() * (max - min) + min
  return Math.floor(size)
}

function getRandomLocation (width, height) {
  const min = -100
  const location = []
  const x = Math.random() * (width - min) + min
  const y = Math.random() * (height - min) + min
  location.push(Math.floor(x))
  location.push(Math.floor(y))
  return location
}

function getRandomColor (palette) {
  const color = []
  color.push(Math.floor(Math.random() * 255))
  color.push(Math.floor(Math.random() * 255))
  color.push(Math.floor(Math.random() * 255))
  return color
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
