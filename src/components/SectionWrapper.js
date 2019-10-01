import React from "react";

import Content from "../components/Content";
import Image from "../components/Image";

export default props => {
  const { className, content, img } = props;
  
  const imgFileName= img.fileName;
  const imgDescription = img.description;

  return (
    <>
      <Image className={className} fileName={imgFileName} description={imgDescription} />
      <Content className={className} content={content} />
    </>
  )
};