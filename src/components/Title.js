import React from "react";

export default props => {
  const { className, content } = props;

  let CustomTitleTag = `h1`;
  if(className.includes('blog')){
    CustomTitleTag = `h3`;
  }
  if(className.includes('blog--featured')){
    CustomTitleTag = `h2`;
  }
  
  return (
    <CustomTitleTag className={className}>{content}</CustomTitleTag>
  )
};