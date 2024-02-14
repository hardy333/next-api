import PostsForm from "./PostsForm";
import PostsList from "./PostsList";

export const revalidate = 0;

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_LOCATION_ORIGIN
    : process.env.PRODUCTION_LOCATION_ORIGIN;

const getPosts = async () => {
  console.log("Get posts - server compo");
  // const res = await fetch(`${url}/api/posts`, {
  //   method: "PUT",
  //   body: JSON.stringify({ ss: "Ss" }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const res = await fetch(`${url}/api/posts`);

  const res = await fetch("http://localhost:3000/api/posts", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Fetch PUT Request Example" }),
  });

  console.log("data in posts-server");
  const data = await res.json();

  return data;
};

const PostsServer = async () => {
  const data = await getPosts();

  console.log("posts server page");

  return (
    <div>
      <h1>PostsServer page</h1>
      <p>
        {" "}
        <strong>enviroment:</strong> - {process.env.NODE_ENV}
      </p>
      <p>
        {" "}
        <strong>location origin:</strong> - {url}
      </p>
      <PostsForm />
      <br />
      <PostsList posts={data} />
      <h2>Expalanation</h2>
      <p>
        pots-server page component is rsc - and rendered on a server. That means
        initial posts are fetch and rendered on the server{" "}
      </p>
      <p>
        PostsList and PostsForm are client side components (they use `use
        client`), that measn deleting and adding posts are made from the client
        side (from user`s browser), after deleting or adding the new post, posts
        are updated on the database/server but it is not directly be reflected
        on the browser, because posts data comes from rsc. so we need to use
        router.refresh(), every time client components update data on some way
        (delte/udpate/add){" "}
      </p>
      <p>
        Exact same things will happen if we use separete routes/pages for
        postsForm and posts lists components (if they will be client
        components/pages ofcourse)
      </p>
      <p>
        Another way of handling with server side rendered page + client side
        data manipulation is using state in client components and making server
        side and client stide posts/dada synchronized. We can also use
        React-query which is basically (fundamentally ) the same thing but
        easyer to work with (react-qeury hepls with error and loading state
        handling, caching and so on )
      </p>
      <p>
        <strong>Importatn !</strong>
        We also need ro revalidate data on server side with for example with
        revalidate = 0, because router.refresh() only resets client side cache
        not server side. so router.refresh() will make server component re run
        on server but posts data fetch request made on server is still catched
        on server so we need to revalidate it too.
        <strong>
          With get reqest in api routes it still DOES NOT WORKING FUCK NEXT.js{" "}
          (Changing get request to PUT fixes it ), but still there is a problem,
          if somone on some other page updates same posts data anc navigates to
          this page they will still see old unpudated data becouse of client ise
          cache. so best way is to render initial data on server and
          interactions should be handled on client components, react-query
          version seems the best .
        </strong>
      </p>
    </div>
  );
};

export default PostsServer;
