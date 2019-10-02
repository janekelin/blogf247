import React from "react";

import ExternalLink from "../components/ExternalLink";

export default () => {
  const className = "logo";

  //TO-DO: Replace placeholders
  const bgImg = "/images/logo-navy.svg";
  const textForScreenReaders = "Visit main page";
  const url = "https://se.fitness24seven.com/";

  return (
    <section>
      <ExternalLink className={className} bgImg={bgImg} textForScreenReaders={textForScreenReaders} url={url} />
    </section>
  )
};