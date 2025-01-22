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
    const accessMatch = await user_collection.findOne({
      session_token: query.get("session_token"),
    });
    if (accessMatch) {
      const newAccessToken = md5(Math.random().toString());
      user_collection.insertOne({ $put: { access_token: newAccessToken } });
      return NextResponse.json({ access_token: newAccessToken });
    } else {
      return NextResponse.json(
        { error: "Invalid access token!" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("error: " + error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
