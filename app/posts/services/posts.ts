export const getPosts = async () => {
  const url = `${window.location.origin}/api/posts`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const deletePost = async (id: string) => {
  const url = `${window.location.origin}/api/posts`;

  const res = await fetch(url + `/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const addPost = async (post: any) => {
  const url = `${window.location.origin}/api/posts`;

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
