import React from "react";

import Logo from "../components/Logo";
import SocialMediaList from "../components/SocialMediaList";
import LanguageSwitch from "../components/LanguageSwitch";

export default () => {
  return (
    <footer>
      <Logo />
      <SocialMediaList />
      <LanguageSwitch />
    </footer>
  );
};
