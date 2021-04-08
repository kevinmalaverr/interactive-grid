module.exports = {
  title: "Alignment",
  description: "Alignment description",
  links: [
    { id: "justify-content", title: "justify-content" },
    { id: "align-content", title: "align-content" },
    { id: "justify-items", title: "justify-items" },
    { id: "align-items", title: "align-items" },
    { id: "justify-self", title: "justify-self" },
    { id: "align-self", title: "align-self" },
    { id: "playground", title: "Playground" },
  ],
  content: [
    `Sometimes the total size of your grid might be less than the size of
    its grid container. This could happen if all of your grid items are
    sized with non-flexible units like px. In this case you can set the
    alignment of the grid within the grid container. This property aligns
    the grid along the inline (row) axis (as opposed to align-content
    which aligns the grid along the block (column) axis).`,

    `Sometimes the total size of your grid might be less than the size of
    its grid container. This could happen if all of your grid items are
    sized with non-flexible units like px. In this case you can set the
    alignment of the grid within the grid container. This property aligns
    the grid along the block (column) axis (as opposed to justify-content
    which aligns the grid along the inline (row) axis).`,

    `Aligns grid items along the inline (row) axis (as opposed to
    align-items which aligns along the block (column) axis). This value
    applies to all grid items inside the container.`,

    `Aligns grid items along the block (column) axis (as opposed to
    justify-items which aligns along the inline (row) axis). This value
    applies to all grid items inside the container.`,

    `Aligns a grid item inside a cell along the inline (row) axis (as
    opposed to align-self which aligns along the block (column) axis).
    This value applies to a grid item inside a single cell.`,

    `Aligns a grid item inside a cell along the block (column) axis (as
    opposed to justify-self which aligns along the inline (row) axis).
    This value applies to the content inside a single grid item.`,
  ],
  navigation: {
    prev: "prev url",
    next: "nexturl1",
  },
}
