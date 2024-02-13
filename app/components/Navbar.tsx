import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ display: "flex ", gap: 10 }}>
      <Link href="/">Home</Link>
      <Link href="/hello">Hello</Link>
      <Link href="/todo">todos</Link>
      <Link href="/todo-with-context">todo with context</Link>
      <Link href="/posts">posts</Link>
    </nav>
  );
};

export default Navbar;
