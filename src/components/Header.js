import React from "react"

import HeroBanner from "../components/HeroBanner"

export default () => {
  //TO-DO: Replace placeholders
  const contentPlaceholder = {
    title: "Title",
    tagline: "Tagline",
  };
  const imgPlaceholder = {
    fileName: "1.jpg",
    description: "sample",
  };

  return (
    <header>
      <HeroBanner className="hero" content={contentPlaceholder} img={imgPlaceholder} />
    </header>
  )
}
