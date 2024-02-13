const url = `${window.location.origin}/api/posts`;

export const getPosts = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const deletePost = async (id: string) => {
  const res = await fetch(url + `/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const addPost = async (post: any) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "aplication/json",
    },
  });

  const data = await res.json();

  return data;
};
