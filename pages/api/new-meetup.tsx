import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await connectDatabase();
    const db = client.db("meetup");
    const collectionDB = db.collection("events");
    const result = await collectionDB.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
