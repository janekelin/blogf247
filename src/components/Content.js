import React from "react";

import Tagline from "../components/Tagline";
import Title from "../components/Title";

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