import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostsForm from "./PostsForm";
import PostsList from "./PostsList";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_LOCATION_ORIGIN
    : process.env.PRODUCTION_LOCATION_ORIGIN;

const PostsPageWithReactQuery2 = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(`${url}/api/posts`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <h1>Posts server + react query 2 </h1>
        <p>
          This page shows what will happen if we update state on one page with
          react uqery and then navigate to second page which also uses react
          query for get erquest{" "}
        </p>
        <PostsForm />
        <br />
        <PostsList url={url} />
      </HydrationBoundary>
    </div>
  );
};

export default PostsPageWithReactQuery2;
