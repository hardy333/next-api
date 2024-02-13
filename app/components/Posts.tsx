"use client";

import { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/posts");
      const data = await res.json();

      console.log({ data });
    };

    getData();
  }, []);

  return <div>Posts</div>;
};

export default Posts;
