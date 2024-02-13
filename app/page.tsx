import { headers } from "next/headers";
import Posts from "./components/Posts";

type Props = {};

let num = 100;

export default function Home(props: Props) {
  const headersList = headers();
  const middlewareSet = headersList.get("middlewareSet");

  console.log("Hello from home Page");

  return (
    <main>
      <h1>Hello</h1>

      <Posts />
    </main>
  );
}
