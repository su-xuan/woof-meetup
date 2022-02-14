import { IEvent } from "../../utils/interfaces";
import Link from "next/link";
import Image from "next/image";

const EventCard: React.FC<IEvent> = (event) => {
  console.log('event', event)
  const {_id, title, image, time, location } = event;
  return (
    <div className="flex justify-center py-3.5">
      <div className="rounded-lg shadow-lg max-w-sm">
        <Link href={`/events/${_id}`} passHref >
          <Image src={image.src} alt={image.alt} height={250} width={384} className="rounded-t-lg"/>
        </Link>
        <div className="pt-6 px-4">
          <h5 className="text-orange-700 text-xl font-medium mb-2">{title}</h5>
          <ul className="flex flex-col">
            <li key="time" className="flex pt-2">
              <Image
                src="/icons/calendar.png"
                alt="calendar icon"
                width={24}
                height={24}
              />
              <span className="pl-2">{time}</span>
            </li>
            <li key="location" className="flex py-2">
              <Image
                src="/icons/location.png"
                alt="location icon"
                width={24}
                height={24}
                layout="fixed"
              />
              <span className="pl-2">{location}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
