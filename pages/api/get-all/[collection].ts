import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../../utils/dbConnect";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const getDocument = async (client: MongoClient, res: NextApiResponse) => {
    const collection = req.query.collection as string;
    const db = client.db("meetup");
    const collectionDb = db.collection(collection);
    const documents = await collectionDb.find().toArray();
    res.status(200).json(documents);
  };
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }
  try {
    await getDocument(client, res);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Retrieving data failed!" });
    return;
  }
};

export default handler;