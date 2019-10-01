import React from "react";

import FeaturedPost from "./FeaturedPost";

export default () => {
  //TO-DO: Replace placeholders
  const postsPlaceholder = [
    {
      id: "001",
      content: {
        title: "Featured Title 1",
        tagline: "Featured Tagline 1",
      },
      img: {
        fileName: "2.jpg",
        description: "alt 1",
      },
    },
    {
      id: "002",
      content: {
        title: "Featured Title 2",
        tagline: "Featured Tagline 2",
      },
      img: {
        fileName: "3.jpg",
        description: "alt 2",
      },
    },
    {
      id: "003",
      content: {
        title: "Featured Title 3",
        tagline: "Featured Tagline 3",
      },
      img: {
        fileName: "4.jpg",
        description: "alt 3",
      },
    },
  ];

  const featuredPosts = postsPlaceholder.map(item => <FeaturedPost key={item.id} content={item.content} img={item.img} />);

  return (
    <section>
      {featuredPosts}
    </section>
  );
};