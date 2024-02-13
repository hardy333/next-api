"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { addPost, deletePost, getPosts } from "./services/posts";

type Post = {
  id: string;
  title: string;
  des: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data: Post[] = await getPosts();
      console.log(data);
      setPosts(data);
    };

    getData();
  }, []);

  const handleDelete = async (id: string) => {
    const data = await deletePost(id);
    console.log(data);
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPosts = await addPost({
      id: String(Math.random()),
      title,
      des: "Hello new post",
    });

    setTitle("");
    setPosts(newPosts);
  };

  return (
    <div>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <div style={{ display: "flex", gap: 20 }}>
        {posts?.map((post) => {
          return (
            <div
              key={post.id}
              style={{ border: "1px solid red", marginBottom: "40px" }}
            >
              <h2>{post.title}</h2>
              <p>{post.id}</p>
              <p>{post.des}</p>
              <button onClick={() => handleDelete(post.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
