const draw = require('./draw')
const requestAniFrame = require('./request-ani-frame')

module.exports = function animate (ctx, points, step, rev, maxStep) {
  requestAniFrame(() => {
    if (window.animationEnabled) {
      draw(ctx, points, step)
      step = rev ? ++step : --step
      rev = step > maxStep || step < 0 ? !rev : rev
    }
    animate(ctx, points, step, rev, maxStep)
  })
}
