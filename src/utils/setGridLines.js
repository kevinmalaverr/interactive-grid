const lineStyle = `2px dashed #7C3AED`
const common = `
  background: repeating-linear-gradient(
    45deg,
    #da3ef340,
    #da3ef340 10px,
    #dd00ff40 10px,
    #dd00ff40 20px
  );
  position: absolute;
`

/**
 *
 * @param {*} containerRef
 * @returns {Function} removeInspector
 */
export default function setGridLines(containerRef, { extendLines = 10 } = {}) {
  const container = containerRef
  const inspector = document.createElement("div")
  const { children } = container

  const colLines = []
  const rowLines = []

  inspector.className = "inspector"
  inspector.style = `
      position: absolute;
      height: ${container.offsetHeight}px;
      width: ${container.offsetWidth}px;
      top: ${container.offsetTop}px;
      left: ${container.offsetLeft}px;
    `

  for (let i = 0; i < 3; i++) {
    const child = children[i]
    colLines.push(child.offsetLeft - container.offsetLeft)
    colLines.push(child.offsetLeft + child.offsetWidth - container.offsetLeft)
  }

  for (let i = 0; i < 3; i++) {
    const child = children[i * 3]
    rowLines.push(child.offsetTop - container.offsetTop)
    rowLines.push(child.offsetTop + child.offsetHeight - container.offsetTop)
  }

  function createColLines(item) {
    const lines = [document.createElement("div"), document.createElement("div")]

    lines.forEach((line) => {
      // eslint-disable-next-line no-param-reassign
      line.style = ` 
        ${common}
        border-left: ${lineStyle};
        height: ${container.offsetWidth + extendLines * 2}px;
        width: 1px;
        left: ${item}px;
        top: ${-extendLines}px;
      `
    })

    inspector.append(...lines)
  }

  function createRowLines(item) {
    const lines = [document.createElement("div"), document.createElement("div")]

    lines.forEach((line) => {
      // eslint-disable-next-line no-param-reassign
      line.style = ` 
        ${common}
        border-top: ${lineStyle};
        width: ${container.offsetWidth + extendLines * 2}px;
        height: 1px;
        top: ${item}px;
        left: ${-extendLines}px;
      `
    })

    inspector.append(...lines)
  }

  rowLines.forEach(createRowLines)
  colLines.forEach(createColLines)
  containerRef.appendChild(inspector)

  function removeInspector() {
    containerRef.removeChild(inspector)
  }

  return removeInspector
}
