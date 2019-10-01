import React from "react";

export default props => {
  const { className, content } = props;

  const CustomTitleTag = `h1`;
  if(className == 'blog--featured__title'){
    CustomTitleTag = `h2`;
  }
  if(className == 'blog__title'){
    CustomTitleTag = `h3`;
  }

  return (
    <CustomTitleTag className={className}>{content}</CustomTitleTag>
  )
};