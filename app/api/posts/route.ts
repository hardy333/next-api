import { addPost, getPosts } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  console.log("GET api route -- GET");

  const posts = getPosts();

  return NextResponse.json(posts);
}

export function PUT(request: NextRequest) {
  console.log("GET api route -- PUT");

  const posts = getPosts();

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const post = await request.json();

  if (!post.id || !post.title || !post.des) {
    return NextResponse.json(
      { message: "Some fields are missing" },
      {
        status: 400,
      }
    );
  }

  const oldPosts = getPosts();
  const index = oldPosts.findIndex((p) => p.id === post.id);
  if (index >= 0) {
    return NextResponse.json(
      { message: "Post Already exists" },
      {
        status: 400,
      }
    );
  }

  const newPosts = addPost(post);

  return NextResponse.json(newPosts);
}
