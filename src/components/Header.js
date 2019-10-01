import React from "react";

import SectionWrapper from "../components/SectionWrapper";

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
      <SectionWrapper className="hero" content={contentPlaceholder} img={imgPlaceholder} />
    </header>
  );
};
