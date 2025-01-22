import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { md5 } from "js-md5";

export async function POST(req: Request) {
  const mongodb_uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(mongodb_uri);
  try {
    await client.connect();
    const database = client.db("nextjs-app");
    const user_collection = database.collection("users");
    let data = await req.json();
    data = data.data;
    data["password"] = md5(data["password"]);
    data["session_token"] = md5(Math.random().toString());
    data["access_token"] = md5(Math.random().toString());
    data["date_created"] = new Date();
    data["last_login"] = new Date();
    user_collection.insertOne(data);
    return NextResponse.json({ error: "Nothing Went Wrong!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
