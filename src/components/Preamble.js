import React from "react";

export default props => {
  const { className, content } = props;

  return (
    <p className={className}>{content}</p>
  )
};