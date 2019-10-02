import React from "react";

import Title from "../components/Title";

export default props => {
  const { className, content } = props;
  
  const titleClassName = className + "__title";

  return (
    <header>
      <Title className={titleClassName} content={content.title} />
      <p>{content.created}</p>
      <p>{content.category}</p>
    </header>
  )
};