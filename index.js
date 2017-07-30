const canvas = require('./canvas')

canvas.setup()
const ctx = document.getElementById('canvas').getContext('2d')
const resize = canvas.resize.bind(this, ctx)

window.animationEnabled = true
window.addEventListener('resize', resize, false)

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  resize()
}, false)

window.addEventListener('click', () => {
  window.animationEnabled = !window.animationEnabled
}, false)

resize()
