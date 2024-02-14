type Post = {
  id: string;
  title: string;
  des: string;
};

let posts: Post[] = [
  {
    id: "1",
    title: "post 11 title",
    des: "Description 11",
  },
  {
    id: "2",
    title: "post 12 title",
    des: "Description 12",
  },
  {
    id: "3",
    title: "post 13 title",
    des: "Description 13",
  },
  {
    id: "4",
    title: "post 14 title",
    des: "Description 14",
  },
];

export const getPosts = () => {
  return posts;
};

export const deletPost = (id: string) => {
  console.log(posts, id);
  posts = posts.filter((post) => post.id != id);
};

export const addPost = (post: Post) => {
  console.log("Post", post);

  posts.push(post);

  console.log(posts);
  return posts;
};

export const updatePost = (id: string, post: Post) => {
  posts = posts.map((p) => (p.id != id ? p : { ...p, ...post }));
};

export const getPostById = (id: string) => {
  const p = posts.find((post) => post.id === id);

  return p;
};
