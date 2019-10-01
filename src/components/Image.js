import React from "react";

//TO-DO: Rewrite as gatsby-image
export default props => {
  const { className, description, fileName } = props;
  
  const imageClassName = className + "__image";

  return (
    <img className={imageClassName} src={`/images/${fileName}`} alt={description} />
  )
};
