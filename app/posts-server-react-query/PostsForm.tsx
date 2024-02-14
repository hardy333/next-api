"use client";

import { FormEvent, useState } from "react";
import { addPost } from "../posts/services/posts";
import { useRouter } from "next/navigation";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (title: string) => {
      const newPosts = await addPost({
        id: String(Math.random()),
        title,
        des: "Hello new post",
      });

      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log("Hello", newPosts);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate(title);

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
