import React from "react";

import FeaturedPost from "./FeaturedPost";

export default props => {
  const { posts } = props;

  const featuredPosts = posts.map(item => <FeaturedPost key={item.id} content={item.content} img={item.img} />);

  return (
    <section>
      {featuredPosts}
    </section>
  );
};