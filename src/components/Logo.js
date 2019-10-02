import React from "react";

import ExternalLink from "../components/ExternalLink";

export default () => {
  const className = "logo";

  //TO-DO: Replace placeholders
  const bgImg = "/images/logo-navy.svg";
  const textForScreenReaders = "Visit main page";
  const url = "https://se.fitness24seven.com/";
  const value = {
    bgImg: bgImg,
    textForScreenReaders: textForScreenReaders,
    url: url,
  };

  return (
    <section>
      <ExternalLink className={className} value={value} />
    </section>
  )
};