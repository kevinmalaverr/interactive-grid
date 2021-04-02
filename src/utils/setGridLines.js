export default function (id) {
  const container = document.getElementById(id)
  const inspector = document.createElement("div")

  document.body.appendChild(inspector)

  // get the rows/columns/gaps
  const styles = window.getComputedStyle(container)

  const rows = styles.getPropertyValue("grid-template-rows")
  const columns = styles.getPropertyValue("grid-template-columns")

  const rowGap = styles.getPropertyValue("grid-row-gap")
  const columnGap = styles.getPropertyValue("grid-column-gap")

  // convert the rows and columns into a format we can work with
  const columnData = parseGridTemplate(columns, columnGap)
  const rowData = parseGridTemplate(rows, rowGap)

  const child = container.getElementsByTagName("div")[0]

  const leftSpace = child.offsetLeft - container.offsetLeft
  const topSpace = child.offsetTop - container.offsetTop

  inspector.className = "inspector"

  inspector.setAttribute(
    "style",
    `
  position: absolute;
  height: ${container.offsetHeight}px;
  width: ${container.offsetWidth}px;
  top: ${container.offsetTop}px;
  left: ${container.offsetLeft}px;
`
  )

  const extendLines = 10

  const lineStyle = `1px dashed #000`
  const bg = `
  background: repeating-linear-gradient(
    45deg,
    #da3ef340,
    #da3ef340 10px,
    #dd00ff40 10px,
    #dd00ff40 20px
  );

  `

  // render a line for each vertical grid line
  columnData.forEach((item, i) => {
    const line = document.createElement("div")
    line.setAttribute(
      "style",
      `
      ${bg}
    position: absolute;
    border-left: ${lineStyle};
    border-right: ${lineStyle};
    height: ${container.offsetHeight + extendLines * 2}px;
    width: ${item.end - item.start + (item.gap || 0)}px;
    left: ${item.start + leftSpace}px;
    top: ${-extendLines}px;
  `
    )
    inspector.appendChild(line)
  })

  // render a line for each horizontal grid line
  rowData.forEach((item, i) => {
    const line = document.createElement("div")
    line.setAttribute(
      "style",
      `
${bg}
    border-top: ${lineStyle};
    border-bottom: ${lineStyle};
    position: absolute;
    width: ${container.offsetWidth + extendLines * 2}px;
    height: ${item.end - item.start + (item.gap || 0)}px;
    top: ${item.start + topSpace}px;
    left: ${-extendLines}px;
  `
    )
    inspector.appendChild(line)
  })

  /*
  Converts a grid template string into an array of grid line objects
  
  Example input: "[full-start] 300px 300px [full-end]"
     
  Example outut:
  [{
    "start": -1,
    "end": 1,
    "name": "full-start"
  },
  {
    "start": 299,
    "end": 301,
    "name": null,
    "gap": 20
  },
  {
    "start": 619,
    "end": 621,
    "name": "full-end"
  }]
*/
  function parseGridTemplate(templateStr, gap = "0px") {
    const gapSize = parseFloat(gap.replace("px", ""))

    // splits at and space that isn't between two [ ] brackets
    const parsedArray = templateStr.split(/\s(?![^[]*])/)
    const lines = []
    let currentPosition = 0

    // add in any missing names as ""
    // "200px [center-start] 300px [center-end] 400px" becomes:
    // "'' 200px [center-start] 300px [center-end] 400px ''"

    const allItems = []

    parsedArray.forEach((item, index) => {
      if (item.includes("px")) {
        // add a null name before it if missing
        if (!parsedArray[index - 1] || parsedArray[index - 1].includes("px")) {
          allItems.push("")
        }
      }

      allItems.push(item)
    })

    // handle last item
    if (parsedArray[parsedArray.length - 1].includes("px")) {
      allItems.push("")
    }

    allItems.forEach((item, index) => {
      if (item.includes("px")) {
        const trackSize = parseFloat(item.replace("px", ""))
        currentPosition += trackSize
      } else {
        const newLine = {
          start: currentPosition - 1,
          end: currentPosition + 1,
          name: getName(item),
        }
        // add gaps on just the inner lines
        // and count it for positioning
        if (index !== 0 && index !== allItems.length - 1 && gapSize !== 0) {
          newLine.gap = gapSize
          currentPosition += gapSize
        }

        lines.push(newLine)
      }
    })

    return lines
  }

  function getName(item) {
    return item.includes("[") ? item.match(/\[(.*)\]/)[1].trim() : null
  }

  return function () {
    document.body.removeChild(inspector)
  }
}
