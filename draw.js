module.exports = function draw (ctx, points, step) {
  const {innerWidth: width, innerHeight: height} = window
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
