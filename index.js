'use strict'

// const color = require('color')

setupCanvas()
resizeCanvas()
window.addEventListener('resize', resizeCanvas, false)

function setupCanvas () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'canvas')
  canvas.setAttribute('width', window.innerWidth)
  canvas.setAttribute('height', window.innerHeight)
  document.body.appendChild(canvas)
}

function getWindowSize () {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

function getCanvas () {
  return document.getElementById('canvas')
}

function resizeCanvas () {
  const canvas = getCanvas()
  const {width, height} = getWindowSize()
  canvas.width = width
  canvas.height = height
  draw()
}

function draw () {
  const ctx = getCanvas().getContext('2d')
  const {width, height} = getWindowSize()
  ctx.fillStyle = 'rgb(215,197,174)'
  ctx.fillRect(0, 0, width, height)

  const gradient = ctx.createRadialGradient(300, 300, 200, 300, 300, 0)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
  gradient.addColorStop(1, 'rgba(255, 0, 0, 0.25)')
  ctx.fillStyle = gradient
  ctx.fillRect(100, 100, 400, 400)
}
