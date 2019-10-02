import React from "react"

import FeaturedCollection from "../components/FeaturedCollection";
import Feed from "../components/Feed";

export default () => {
  //TO-DO: Replace placeholders
  const posts =  [
    {
      id: "001",
      content: {
        title: "Featured blogginlägg",
        tagline: "At Fitness24Seven everything counts",
      },
      img: {
        fileName: "1.jpg",
        description: "alt 1",
      },
      meta: {
        featured: true,
        created: "2019-01-01 15:45",
        category: "Some Category"
      }
    },
    {
      id: "002",
      content: {
        title: "Featured blogginlägg",
        tagline: "Tagline 2",
      },
      img: {
        fileName: "2.jpg",
        description: "alt 2",
      },
      meta: {
        featured: true,
        created: "2019-01-01 15:45",
        category: "Some Category"
      }
    },
    {
      id: "003",
      content: {
        title: "Featured blogginlägg",
        tagline: "At Fitness24Seven everything counts",
      },
      img: {
        fileName: "5.jpg",
        description: "alt 3",
      },
      meta: {
        featured: true,
        created: "2019-01-01 15:45",
        category: "Some Category"
      }
    },
    {
      id: "004",
      content: {
        title: "Title 4",
        tagline: "Lorem ipsum dolor sit amet.",
      },
      img: {
        fileName: "3.jpg",
        description: "alt 4",
      },
      meta: {
        featured: false,
        created: "2019-01-01 14:45",
        category: "Some Category"
      }
    },
    {
      id: "005",
      content: {
        title: "Title 5",
        tagline: "Lorem ipsum dolor sit amet.",
      },
      img: {
        fileName: "4.jpg",
        description: "alt 5",
      },
      meta: {
        featured: false,
        created: "2019-01-01 13:45",
        category: "Some Category"
      }
    },
    {
      id: "006",
      content: {
        title: "Title 6",
        tagline: "Lorem ipsum dolor sit amet.",
      },
      img: {
        fileName: "1.jpg",
        description: "alt 6",
      },
      meta: {
        featured: false,
        created: "2019-01-01 12:45",
        category: "Some Category"
      }
    },
    {
      id: "007",
      content: {
        title: "Title 7",
        tagline: "Lorem ipsum dolor sit amet.",
      },
      img: {
        fileName: "2.jpg",
        description: "alt 7",
      },
      meta: {
        featured: false,
        created: "2019-01-01 11:45",
        category: "Some Category"
      }
    },
  ];

  const featuredPosts = posts.filter(post => post.meta.featured);
  const latestPosts = posts.filter(post => !post.meta.featured); //TO-DO: make proper sorting
  return (
    <main>
      <FeaturedCollection posts={featuredPosts} />
      <Feed posts={latestPosts} />
    </main>
  )
}
