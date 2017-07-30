module.exports = function getRandomColor (palette) {
  return [...Array(3)].map(() => {
    return Math.floor(Math.random() * 255)
  })
}
