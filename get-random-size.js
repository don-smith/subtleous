module.exports = function getRandomSize (width, height) {
  const min = 200
  const max = Math.min(width / 2, height / 2)
  const size = Math.random() * (max - min) + min
  return Math.floor(size)
}
