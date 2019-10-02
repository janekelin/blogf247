import React from "react";

import ExternalLink from "../components/ExternalLink";

export default props => {
  const { links } = props;
  const externalLinks = links.map(item => <li key={item.id}><ExternalLink value={item} /></li>);

  return (
    <ul>
      {externalLinks}
    </ul>
  );
};