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

export const getAllDistricts = async () => {
  const getDocument = async (client: MongoClient) => {
    const db = client.db("meetup");
    const collectionDb = db.collection("districts");
    const documents = await collectionDb.find().toArray();
    return documents;
  };

  const client = await connectDatabase();
  const districts = await getDocument(client);
  
  return <IDistrict[]> districts.map((district) => {
    return <IDistrict> { 
      _id: district._id.toString(),
      slug: district.slug,
      name: district.name,
      description: district.description,
      images: district.images
    }
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
}

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

export const getDistrictBySlug = async (slug: string) => {
  const getDocument = async (client: MongoClient) => {
    const db = client.db("meetup");
    const collectionDb = db.collection("districts");
    const documents = await collectionDb.findOne({slug: slug});
    return documents;
  };

  const client = await connectDatabase();
  const district = await getDocument(client);
  
  return {
    ...district,
    _id: district?._id.toString()
  }
}

