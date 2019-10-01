import React from "react";

import SectionWrapper from "./SectionWrapper";

export default props => {
  const { content, img } = props;

  const className = "blog--featured";
  const articleClassName = className + "__item";

  return (
    <article className={articleClassName}>
      <SectionWrapper className={className} content={content} img={img} />
    </article>
  );
};