import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const mongodb_uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(mongodb_uri);
  try {
    await client.connect();
    const database = client.db("nextjs-app");
    const user_collection = database.collection("users");
    const url = req.url || "";
    const query = new URL(url).searchParams;
    const user = await user_collection
      .find({ access_token: query.get("access_token") })
      .toArray();
    if (!user[0]) {
      return NextResponse.json(
        { error: "Invalid access token!" },
        { status: 501 }
      );
    }
    delete user[0].session_token;
    delete user[0].access_token;
    return NextResponse.json(user[0]);
  } catch (error) {
    console.error("error: " + error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
