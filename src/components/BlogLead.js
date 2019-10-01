import React from "react";

import Image from "../components/Image";
import Tagline from "../components/Tagline";

export default props => {
  const { className, content } = props;
  
  const imageClassName = className + "__image";
  const taglineClassName = className + "__tagline";

  return (
    <div>
      <Image className={imageClassName} fileName={content.img.fileName} description={content.img.description} />
      <Tagline className={taglineClassName} content={content.tagline} />
    </div>
  )
};