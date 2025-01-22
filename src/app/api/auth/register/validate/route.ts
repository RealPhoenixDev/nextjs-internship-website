import { MongoClient } from "mongodb";
import { NextResponse } from 'next/server'

export async function GET(req:Request) {
    const mongodb_uri = process.env.MONGODB_URI || ""
    const client = new MongoClient(mongodb_uri)
    const response = { errors: {}}
    try {
        await client.connect()
        const database = client.db('nextjs-app')
        const user_collection = database.collection("users")
        const url = req.url || ""
        const query = new URL(url).searchParams
        const usernameMatch = await user_collection.findOne({username:query.get('username')})
        const emailMatch = await user_collection.findOne({email:query.get('email')})
        if (usernameMatch) {
            response["errors"] = {username: "Username already in use!"}
        } if (emailMatch) {
            response["errors"] = {...response["errors"],...{email:"Email already in use!"}}
        }
        console.log(response)
        return NextResponse.json(response)
    } catch (error) {
        console.error("error: " + error)
        return NextResponse.json({errors:"Something went wrong!"},{status:500})
    }
}