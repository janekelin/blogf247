import React from "react";

import ExternalLinksList from "../components/ExternalLinksList";

export default () => {
  //TO-DO Rewrite the placeholder component
  const className = "language";

  //TO-DO: Replace placeholders
  const languageLinks = [
    {
      id: "001",
      bgImg: "/images/flag-sv.svg",
      textForScreenReaders: "Read our website in Swedish",
      url: "/",
    },
    {
      id: "002",
      bgImg: "/images/flag-en.svg",
      textForScreenReaders: "Read our website in English",
      url: "/",
    }
  ];

  return (
    <section>
      <ExternalLinksList className={className} links={languageLinks} />
    </section>
  );
};