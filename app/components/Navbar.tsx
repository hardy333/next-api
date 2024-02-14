import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ display: "flex ", gap: 10, flexWrap: "wrap" }}>
      <Link href="/">Home</Link>
      <Link href="/hello">Hello</Link>
      <Link href="/todo">todos</Link>
      <Link href="/todo-with-context">todo with context</Link>
      <Link href="/posts">posts - (use State)</Link>
      <Link href="/posts-server">
        posts Server - (without client side state)
      </Link>
      <Link href="/posts-server-react-query">posts Server - (react-query)</Link>
      <Link href="/posts-server-react-query-2">
        posts Server - (react-query) 2
      </Link>
    </nav>
  );
};

export default Navbar;
