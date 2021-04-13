module.exports = {
  title: "Introduction",
  description: "CSS grid introduction",
  links: [
    { id: "grid-container", title: "Grid Container" },
    { id: "grid-item", title: "Grid Item" },
  ],
  content: [
    `CSS Grid Layout (aka “Grid”), is a two-dimensional grid-based layout
    system that aims to do nothing less than completely change the way we
    design grid-based user interfaces. CSS has always been used to lay out
    our web pages, but it’s never done a very good job of it. First, we
    used tables, then floats, positioning and inline-block, but all
    of these methods were essentially hacks and left out a lot of
    important functionality (vertical centering, for instance). Flexbox
    helped out, but it’s intended for simpler one-dimensional layouts, not
    complex two-dimensional ones (Flexbox and Grid actually work very well
    together). Grid is the very first CSS module created specifically to
    solve the layout problems we’ve all been hacking our way around for as
    long as we’ve been making websites.`,

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
