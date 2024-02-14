"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "../posts/services/posts";

const PostsList = ({ posts }: { posts: any }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const data = await deletePost(id);

    router.refresh();
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {posts?.map((post: any) => {
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
  );
};

export default PostsList;
