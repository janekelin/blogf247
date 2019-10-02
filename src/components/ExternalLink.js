import React from "react"

export default props => {
  const { bgImg, className, textForScreenReaders } = props

  return (
    <a className={className} style={{ backgroundImage: `url(${bgImg})` }}>
      <span className="sr-only">{textForScreenReaders}</span>
    </a>
  )
}
