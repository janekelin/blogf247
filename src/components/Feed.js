import React from "react";

import BlogPost from "../components/BlogPost";

export default props => {
  const { posts } = props;
  const latestPosts = posts.map(item => <BlogPost key={item.id} post={item} />);

  return (
    <section>
      {latestPosts}
    </section>
  );
};