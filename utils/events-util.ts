import { MongoClient, ObjectId } from "mongodb";
import connectDatabase from "./dbConnect";
import { IDistrict } from "./interfaces";

export const getAllEvents = async () => {
  const getDocument = async (client: MongoClient) => {
    const db = client.db("meetup");
    const collectionDb = db.collection("events");
    const documents = await collectionDb.find().toArray();
    return documents;
  };

  const client = await connectDatabase();
  const events = await getDocument(client);
  
  return events.map((event) => {
    return {
      ...event,
      _id: event._id.toString()
    }
  });
};

export const getAllDistrictSlugs = async () => {
  const getDocument = async (client: MongoClient) => {
    const db = client.db("meetup");
    const collectionDb = db.collection("districts");
    const documents = await collectionDb.find().toArray();
    return documents;
  };

  const client = await connectDatabase();
  const districts = await getDocument(client);
  
  return districts.map((district) => {
    return { slug: district.slug }
  });
}

export const getEventsByDistrict = async (district: string) => {
  const getDocument = async (client: MongoClient) => {
    const db = client.db("meetup");
    const collectionDb = db.collection("events");
    const documents = await collectionDb.find({district: district}).toArray();
    return documents;
  };

  const client = await connectDatabase();
  const events = await getDocument(client);
  
  return events.map((event) => {
    return {
      ...event,
      _id: event._id.toString()
    }
  });
};

export const getEventById = async (eventId: string) => {
  const getDocument = async (client: MongoClient) => {
    const db = client.db("meetup");
    const collectionDb = db.collection('events');
    const object = await collectionDb.findOne({'_id': new ObjectId(eventId)});
    return object;
  };
  const client = await connectDatabase();
  const event = await getDocument(client)

  return {
    ...event,
    _id: event?._id.toString()
  }
}