import React from "react";

import SectionWrapper from "./SectionWrapper";

export default props => {
  const { className, content, img } = props;

  const articleClassName = className + "__item";

  return (
    <article className={articleClassName}>
      <SectionWrapper className={articleClassName} content={content} img={img} />
    </article>
  );
};