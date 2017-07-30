const getRandomLocation = require('./get-random-location')
const getRandomColor = require('./get-random-color')
const getRandomSize = require('./get-random-size')

module.exports = function getPoints (width, height, palette) {
  const count = 100

  const points = [...Array(count)].map(() => {
    return getPoint(width, height, palette)
  })

  return points
}

function getPoint (width, height, palette) {
  // point is an array: [size, x, y, r, g, b]
  const point = []
  point.push(getRandomSize(width, height))
  Array.prototype.push.apply(point, getRandomLocation(width, height))
  Array.prototype.push.apply(point, getRandomColor(palette))
  return point
}
