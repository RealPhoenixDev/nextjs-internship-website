import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const mongodb_uri = process.env.MONGODB_URI || ""
        const client = new MongoClient(mongodb_uri)
        try {
            await client.connect()

            const database = client.db("nextjs-app")
            const user_collection = database.collection("")
        } catch (error) {
            res.status(500).json({data:"Something went wrong!"})
        }
    } else {
        res.status(405).json({data:"Method not Allowed!"})
    }
}