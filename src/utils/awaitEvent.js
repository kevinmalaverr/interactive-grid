/**
 * executes and event after will pass a delta time from event finish.
 * prevents unnecessaries executions
 * @param {string} eventName
 * @param {{onStart: Function, onEnd: Function, delta: number} options
 * @returns {Function} removeEvent
 */
function awaitEvent(
  eventName,
  { onStart = () => {}, onEnd = () => {}, delta = 200 }
) {
  let rtime
  let timeout = false

  const resizeEnd = () => {
    if (new Date() - rtime < delta) {
      setTimeout(resizeEnd, delta)
    } else {
      timeout = false
      onEnd()
    }
  }

  const event = () => {
    rtime = new Date()
    if (timeout === false) {
      onStart()
      timeout = true
      setTimeout(resizeEnd, delta)
    }
  }

  window.addEventListener(eventName, event)

  return () => window.removeEventListener(eventName, event)
}

export default awaitEvent
