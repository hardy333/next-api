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

export const revalidate = 0;

const PostsPageWithReactQuery = async () => {
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
        <h1>PostsPageWithReactQuery</h1>
        <PostsForm />
        <br />
        <PostsList url={url} />
      </HydrationBoundary>
    </div>
  );
};

export default PostsPageWithReactQuery;
