import React from "react";

import Image from "../components/Image";
import Tagline from "../components/Tagline";

export default props => {
  const { className, content } = props;
  
  const taglineClassName = className + "__tagline";

  return (
    <div className="blog__lead">
      <Image className={className} fileName={content.img.fileName} description={content.img.description} />
      <Tagline className={taglineClassName} content={content.tagline} />
    </div>
  )
};