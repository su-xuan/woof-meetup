import { IEvent } from "../../utils/interfaces";
import EventCard from "./EventCard";

interface Eventlist {
  events: IEvent[];
}
const EventList: React.FC<Eventlist> = ({ events }) => {
  if (!events) {
    return <p>There is no current events.</p>;
  }
  return (
    <div>
      <h2 className="font-bold text-2xl py-2 text-center text-orange-600 md:text-3xl">
        Event List
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
        {events.map((event) => (
          <li key={event.slug} className="px-2 pt-2">
            <EventCard
              _id={event._id}
              title={event.title}
              image={event.image}
              time={event.time}
              location={event.location}
              district={event.district}
              slug={event.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
