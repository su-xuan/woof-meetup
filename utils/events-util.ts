import { ObjectId } from "mongodb";

export const getAllEvents = async () => {
  let events;
  await fetch("http://localhost:3000/api/get-all/events")
    .then((res) => res.json())
    .then((data) => (events = data));
  return events;
};

export const getEventsByDistrict = async (district: string) => {
  let events;
  await fetch(`http://localhost:3000/api/find/events/district/${district}`)
    .then((res) => res.json())
    .then((data) => (events = data));
  return events;
};

export const getEventById = async (eventId: string) => {
   let events
   await fetch(`http://localhost:3000/api/find/events/_id/${eventId}`)
   .then((res) => res.json())
   .then((data) => (events = data));
 return events;}