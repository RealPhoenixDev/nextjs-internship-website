import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const mongodb_uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(mongodb_uri);
  try {
    await client.connect();
    const database = client.db("nextjs-app");
    const users_collection = database.collection("users");
    const settings_collection = database.collection("settings");
    const url = req.url || "";
    const query = new URL(url).searchParams;
    const user = await users_collection
      .find({ access_token: query.get("access_token") })
      .toArray();
    if (!user[0]) {
      return NextResponse.json(
        { error: "Invalid access token!" },
        { status: 501 }
      );
    }
    const settings = await settings_collection
      .find({ _id: user[0]._id })
      .toArray();
    if (!settings) {
      return NextResponse.json(
        { error: "Something defineatly went wrong!" },
        { status: 502 }
      );
    }
    if (settings.length < 1) {
      return NextResponse.json({});
    }
    return NextResponse.json(settings[0]);
  } catch (error) {
    console.error("error: " + error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const mongodb_uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(mongodb_uri);
  try {
    await client.connect();
    const database = client.db("nextjs-app");
    const user_collection = database.collection("users");
    const settings_collection = database.collection("settings");
    const data = await req.json();
    const user = await user_collection
      .find({ access_token: data.data.access_token })
      .toArray();
    if (!user[0]) {
      return NextResponse.json(
        { error: "Invalid access token!" },
        { status: 501 }
      );
    }
    const result = {};
    for (const [key, value] of Object.entries(data.data)) {
      if (value !== "") {
        result[key] = value;
      }
    }
    delete result.access_token;
    // result["_id"] = user[0]._id;
    settings_collection.replaceOne({ _id: user[0]._id }, result, {
      upsert: true,
    });
    return NextResponse.json({});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
