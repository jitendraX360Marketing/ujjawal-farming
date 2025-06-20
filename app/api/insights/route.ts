import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Helper to get random date after 2023
function getRandomDate() {
  const start = new Date("2023-01-01").getTime();
  const end = new Date().getTime();
  return new Date(start + Math.random() * (end - start));
}
// Helper to get random read time
function getRandomReadTime() {
  return `${Math.floor(Math.random() * 4) + 7} min read`;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ujjawal-farming");
    let blogs = await db
      .collection("blogs")
      .find({ status: "active" })
      .toArray();
    blogs = blogs.map((blog) => ({
      ...blog,
      date: getRandomDate(),
      readTime: getRandomReadTime(),
      author: "Ujjawal Farming",
      tags: [],
      featured: false,
      gradient: "from-amber-600 to-orange-600",
    }));
    return NextResponse.json({ blogs });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
