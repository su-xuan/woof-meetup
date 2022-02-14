import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
const addEvent = async (req: NextApiRequest, res: NextApiResponse) => {
  const uri = `mongodb+srv://admin:${process.env.MONGODB_ADMIN_PASSWORD}@woof-meetup.2djqy.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect(async (err) => {
    const collection = client.db("sample_analytics").collection("accounts");
    // perform actions on the collection object
    const documents = await collection.find().toArray();

    res.status(200).json({ accounts: documents });
    client.close();
  });
};

export default addEvent;
