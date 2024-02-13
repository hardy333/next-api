"use client";

import { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${window.location.origin}/api/posts`);
      const data = await res.json();

      console.log({ data });
    };

    getData();
  }, []);

  return <div>Posts</div>;
};

export default Posts;
