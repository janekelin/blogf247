import React from "react";

import Title from "../components/Title";

export default props => {
  const { className, content } = props;
  
  const titleClassName = className + "__title";

  return (
    <header className="blog__header">
      <Title className={titleClassName} content={content.title} />
      <p className="blog__date">{content.created}</p>
      <p className="blog__category">{content.category}</p>
    </header>
  )
};