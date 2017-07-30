module.exports = function getRandomLocation (width, height) {
  const min = -100
  const location = []
  const x = Math.random() * (width - min) + min
  const y = Math.random() * (height - min) + min
  location.push(Math.floor(x))
  location.push(Math.floor(y))
  return location
}
