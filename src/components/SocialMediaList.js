import React from "react";

import ExternalLinksList from "../components/ExternalLinksList";

export default () => {
  const className = "social-media";

  //TO-DO: Replace placeholders
  const socialMediaLinks = [
    {
      id: "001",
      bgImg: "images/f24s_icon_arrow",
      textForScreenReaders: "Visit our Twitter",
      url: "https://twitter.com/",
    },
    {
      id: "002",
      bgImg: "images/f24s_icon_linkedin",
      textForScreenReaders: "Visit our Linkedin",
      url: "https://www.linkedin.com/company/fitness24seven",
    },
    {
      id: "003",
      bgImg: "images/f24s_icon_instagram",
      textForScreenReaders: "Visit our Instagram",
      url: "https://www.instagram.com/fitness24seven/",
    },
    {
      id: "004",
      bgImg: "images/f24s_icon_youtube",
      textForScreenReaders: "Visit our Youtube",
      url: "https://www.youtube.com/user/Fitness24seven",
    },
    {
      id: "005",
      bgImg: "images/f24s_icon_facebook",
      textForScreenReaders: "Visit our Facebook",
      url: "https://www.facebook.com/Fitness24SevenSweden/",
    },
    {
      id: "006",
      bgImg: "images/f24s_icon_wifi",
      textForScreenReaders: "Get the RSS-feed",
      url: "#",
    }
  ];

  return (
    <section>
      <ExternalLinksList className={className} links={socialMediaLinks} />
    </section>
  )
};