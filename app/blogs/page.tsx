"use client";
import React from "react";
import { NextPage } from "next";
import { sanityClient } from "../sanityclient/client";
import { useEffect, useState } from "react";
import { imgURL } from "../sanityclient/image";
import BlogComponent from "@/components/BlogComponent";
import { Grid } from "@chakra-ui/react";




interface Blog {
  title: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  content: {
    _type: "block";
    children: [{ text: string }];
  }[];
  tags: string[];
}
const Blogs: NextPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const fetchedBlogs: Blog[] = await sanityClient.fetch(
        `*[_type == "blog" && !(_id in path('drafts.**'))]{
          title,
          slug,
          image{asset->{url}},
          content,
          tags
        }`
      );
      setBlogs(fetchedBlogs);
    
    setHydrated(true);
    };

    getBlogs();
  }, []);
  if (hydrated) {
    return (
      <Grid
        gap={6}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        {blogs.map((blog) => (
          <BlogComponent
            key={blog.slug.current}
            title={blog.title}
            image={imgURL(blog.image.asset.url).url()}
            slug={blog.slug.current}
            content={blog.content[0].children[0].text}
            tags={blog.tags}
          />
        ))}
      </Grid>
    );
  }
  else
  return <div>Blog</div>; 
};

export default Blogs;
