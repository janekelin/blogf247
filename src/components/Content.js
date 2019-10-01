import React from "react";

import Tagline from "Tagline";
import Title from "Title";

export default props => {
  const { className, content } = props;
  const titleClassName = "title__" + className;
  const taglineClassName = "tagline__" + className;

  return (
    <section>
      <Title className={titleClassName} content={content.title} />
      <Tagline className={taglineClassName} content={content.tagline} />
    </section>
  )
};