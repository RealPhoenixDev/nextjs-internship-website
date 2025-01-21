import { MongoClient } from "mongodb";
import { NextResponse } from 'next/server'
import { NextApiRequest } from 'next'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'GET') {
        const mongodb_uri = process.env.MONGODB_URI || ""
        const client = new MongoClient(mongodb_uri)
        const response = {errors : [''], data: ['']}
        res.status(200).json({data:'test'})
        return
        try {
            await client.connect()

            const database = client.db("nextjs-app")
            const user_collection = database.collection("")
            const username = req.query.username
            const usernameMatch = await user_collection.find({username}).toArray()

            const email = req.query.email
            const emailMatch = await user_collection.find({email}).toArray()

            if ((usernameMatch).length > 0) {
                response.errors.push("Username already in use!")
            } if ((emailMatch).length > 0) {
                response.errors.push("Email already in use!")
            }
            res.json(response)
        } catch (error) {
            res.status(500).json({errors:"Something went wrong!"})
        }
    } else {
        res.status(405).json({errors:"Method not Allowed!"})
    }
}

export async function GET(req:NextApiRequest) {
    const mongodb_uri = process.env.MONGODB_URI || ""
    const client = new MongoClient(mongodb_uri)
    const response = {errors : [''], data: ['']}
    try {
        await client.connect()
        console.log(req)
        const database = client.db("nextjs-app")
        const user_collection = database.collection("")
        const username = req.query.username // ! FIX THIS
        const usernameMatch = await user_collection.find({username}).toArray()

        const email = req.query.email
        const emailMatch = await user_collection.find({email}).toArray()

        if ((usernameMatch).length > 0) {
            response.errors.push("Username already in use!")
        } if ((emailMatch).length > 0) {
            response.errors.push("Email already in use!")
        }
        return NextResponse.json(response)
    } catch (error) {
        console.error(error)
        return NextResponse.json({errors:"Something went wrong!",status:500})
    }
}