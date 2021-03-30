import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"
import SubSection from "../components/SubSection"
import ContentTable from "../components/ContentTable"
import SectionLayout from "../components/SectionLayout"

const links = [
  { id: "ff", name: "Grid Container" },
  { id: "fs", name: "Grid Item" },
]

const other = () => (
  <>
    <Header name="Template areas" />
    <SectionLayout>
      <ContentTable links={links} />
      <div>
        <p className="my-3 text-lg text-gray-700">
          CSS Grid Layout (aka “Grid”), is a two-dimensional grid-based layout
          system that aims to do nothing less than completely change the way we
          design grid-based user interfaces. CSS has always been used to lay out
          our web pages, but it’s never done a very good job of it. First, we
          used tables, then floats, positioning and <a>inline-block</a>, but all
          of these methods were essentially hacks and left out a lot of
          important functionality (vertical centering, for instance). Flexbox
          helped out, but it’s intended for simpler one-dimensional layouts, not
          complex two-dimensional ones (Flexbox and Grid actually work very well
          together). Grid is the very first CSS module created specifically to
          solve the layout problems we’ve all been hacking our way around for as
          long as we’ve been making websites.
        </p>
        <p className="my-3 text-lg text-gray-700">
          There are two primary things that inspired me to create this guide.
          The first is Rachel Andrew’s awesome book, Get Ready for CSS Grid
          Layout. It’s a thorough, clear introduction to Grid and is the basis
          of this entire article. I highly encourage you to buy it and read it.
          My other big inspiration is Chris Coyier’s “A Complete Guide to
          Flexbox” which has been my go-to resource for everything flexbox. It’s
          helped a ton of people, evident by the fact that it’s the top result
          when you Google “flexbox.” You’ll notice many similarities between his
          post and mine, because why not steal from the best?
        </p>
        <p className="my-3 text-lg text-gray-700">
          My intention with this guide is to present the Grid concepts as they
          exist in the very latest version of the specification. So I won’t be
          covering the out of date Internet Explorer syntax, and I’ll do my best
          to update this guide regularly as the spec matures.
        </p>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SubSection id="grid-container">Grid Container</SubSection>
            <p className="my-3 text-lg text-gray-700">
              The element on which display: grid is applied. It’s the direct
              parent of all the grid items. In this example container is the
              grid container.
            </p>
          </div>
          <div>
            <h2>Grid Item</h2>
            <p className="my-3 text-lg text-gray-700">
              The element on which display: grid is applied. It’s the direct
              parent of all the grid items. In this example container is the
              grid container.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  </>
)

export default other
