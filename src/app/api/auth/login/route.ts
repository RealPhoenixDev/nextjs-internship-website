import axios from "axios";
import { md5 } from "js-md5";
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
    let dataMatch = await user_collection
      .find({ username: query.get("username_email") })
      .toArray();
    const emailMatch = await user_collection
      .find({ email: query.get("username_email") })
      .toArray();
    if (dataMatch.length === 0) {
      if (emailMatch.length === 0) {
        return NextResponse.json({
          error: {
            username_email: "Username or password is incorrect!",
            password: "Username or password is incorrect!",
          },
        });
      }
      dataMatch = emailMatch;
    }
    const password = md5(query.get("password") || "");
    if (dataMatch[0].password === password) {
      const accessTokenData = await axios
        .get("http://localhost:3000/api/auth/token/access", {
          params: { session_token: dataMatch[0].session_token },
        })
        .catch((err) => {
          throw new Error(err);
        });

      return NextResponse.json({
        data: {
          session_token: dataMatch[0].session_token,
          access_token: accessTokenData.data.access_token,
        },
      });
    }
    return NextResponse.json({
      error: {
        username_email: "Username or password is incorrect!",
        password: "Username or password is incorrect!",
      },
    });
  } catch (error) {
    console.error("error: " + error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
