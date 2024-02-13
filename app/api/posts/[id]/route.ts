import { deletPost, getPostById, updatePost } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const post = getPostById(id);

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json(
      { message: "not post found" },
      {
        status: 404,
      }
    );
  }
  // console.log(post);
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  deletPost(id);

  return NextResponse.json({ message: "Post was deleted" });
}

export async function PUT(request: NextRequest) {
  const newPost = await request.json();
  console.log("new Post", newPost);

  if (!newPost.id) {
    console.log("Hello");
    return NextResponse.json(
      { message: "post neds to have id field" },
      {
        status: 400,
      }
    );
  }

  updatePost(newPost.id, newPost);

  return NextResponse.json({ message: "success" });
}
