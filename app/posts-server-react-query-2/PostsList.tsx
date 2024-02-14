"use client";

import { useQuery } from "@tanstack/react-query";

const PostsList = ({ url }: { url: string | undefined }) => {
  console.log(url);

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(`${url}/api/posts`);
      const data = await res.json();
      return data;
    },
  });

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
            {/* <button onClick={() => handleDelete(post.id)}>X</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
