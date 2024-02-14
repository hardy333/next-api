"use client";

import { FormEvent, useState } from "react";
import { addPost } from "../posts/services/posts";
import { useRouter } from "next/navigation";

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPosts = await addPost({
      id: String(Math.random()),
      title,
      des: "Hello new post",
    });

    console.log(newPosts);
    router.refresh();

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default PostsForm;
