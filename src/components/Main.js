import React from "react"

import FeaturedCollection from "../components/FeaturedCollection";
import Feed from "../components/Feed";

export default () => {
  //TO-DO: Replace placeholders
  const posts =  [
    {
      id: "001",
      content: {
        title: "Title 1",
        tagline: "Tagline 1",
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
        title: "Title 2",
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
        title: "Title 3",
        tagline: "Tagline 3",
      },
      img: {
        fileName: "3.jpg",
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
        tagline: "Tagline 4",
      },
      img: {
        fileName: "4.jpg",
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
        tagline: "Tagline 5",
      },
      img: {
        fileName: "5.jpg",
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
        tagline: "Tagline 6",
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
        tagline: "Tagline 7",
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
