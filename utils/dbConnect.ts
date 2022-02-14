import { MongoClient } from "mongodb";

const connectDatabase = async() => {
  const uri = `mongodb+srv://admin:${process.env.MONGODB_ADMIN_PASSWORD}@woof-meetup.2djqy.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri);
  return client
};

export default connectDatabase