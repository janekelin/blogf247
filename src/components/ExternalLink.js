import React from "react";

export default props => {
  const { bgImg, className, textForScreenReaders, url } = props.value;

  return (
    <a href={url} className={className} >
      <img src={bgImg} alt="" />
      <span className={"sr-only"}>{textForScreenReaders}</span>
    </a>
  );
};
