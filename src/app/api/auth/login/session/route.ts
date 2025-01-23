import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { md5 } from "js-md5";

export async function GET(req: Request) {
  const mongodb_uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(mongodb_uri);
  try {
    await client.connect();
    const database = client.db("nextjs-app");
    const user_collection = database.collection("users");
    const url = req.url || "";
    const query = new URL(url).searchParams;
    const session_token = query.get("session_token");
    const account = await user_collection.findOne({
      session_token: session_token,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
