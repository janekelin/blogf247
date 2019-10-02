import React from "react";

import FeaturedPost from "./FeaturedPost";

export default props => {
  const { posts } = props;

  const className = "blog--featured";
  const sectionClassName = className + "__section";

  const featuredPosts = posts.map(item => <FeaturedPost key={item.id} className={className} content={item.content} img={item.img} />);

  return (
    <section className={sectionClassName} >
      {featuredPosts}
    </section>
  );
};