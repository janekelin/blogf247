import React from "react";

import SectionWrapper from "../components/SectionWrapper";

export default () => {
  //TO-DO: Replace placeholders
  const contentPlaceholder = {
    title: "Min Stora Blogg Titel",
    tagline: "At Fitness24Seven everything counts, even if you don't want to train everyday. Start your journey from blue to black membership today. Text about new goal!",
  };
  const imgPlaceholder = {
    fileName: "1.jpg",
    description: "sample",
  };

  return (
    <header>
      <SectionWrapper className="banner" content={contentPlaceholder} img={imgPlaceholder} />
    </header>
  );
};
