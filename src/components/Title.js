import React from "react";

export default props => {
  const { className, content } = props;

  const CustomTitleTag = `h1`;
  if(className == 'title__blog--featured'){
    CustomTitleTag = `h2`;
  }
  if(className == 'title__blog'){
    CustomTitleTag = `h3`;
  }

  return (
    <CustomTitleTag className={className}>{content}</CustomTitleTag>
  )
};