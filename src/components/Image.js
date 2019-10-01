import React from "react"

//TO-DO: Rewrite as gatsby-image
export default props => {
  const { className, description, fileName } = props;

  return (
    <img className={className} src={`/images/${fileName}`} alt={description} />
  )
}
