import { MutableRefObject, useRef } from "react";
import { Images, INewEvent } from "../utils/interfaces";
import Button from "./ui/Button";

const images: Images = {
  dachshund: { src: "/images/events/dachshund.jpeg", alt: "Dachshunds" },
  frenchie: {
    src: "/images/events/frenchbulldog.jpeg",
    alt: "French Bulldogs",
  },
  forest: {
    src: "/images/events/dogs-in-the-forest.jpeg",
    alt: "Dogs in the Forest",
  },
  park: {
    src: "/images/events/dogs-in-the-park.jpeg",
    alt: "Dogs in the Park",
  },
  beach: {
    src: "/images/events/dogs-on-the-beach.jpeg",
    alt: "Dogs on the beach",
  },
  party: { src: "/images/events/dogs-party.jpeg", alt: "Party Dogs" },
};

interface IProps {
  onAddMeetup: (event: INewEvent) => void;
}

const NewMeetupForm = ({ onAddMeetup }: IProps) => {
  const titleInput = useRef() as MutableRefObject<HTMLInputElement>;
  const descriptionInput = useRef() as MutableRefObject<HTMLInputElement>;
  const locationInput = useRef() as MutableRefObject<HTMLInputElement>;
  const timeInput = useRef() as MutableRefObject<HTMLInputElement>;
  const districtInput = useRef() as MutableRefObject<HTMLInputElement>;
  const imageInput = useRef() as MutableRefObject<HTMLInputElement>;

  const submitEvent = () => {
    const eTitle = titleInput.current.value;
    const eDescription = descriptionInput.current.value;
    const eTime = timeInput.current.value;
    const eDistrict = districtInput.current.value;
    const eLocation = locationInput.current.value;
    const eImageKey = imageInput.current.value;
    const eImage = images[eImageKey];

    const convertSlug = (title: string): string => {
      const pattern = /\W/g;
      return title.toLowerCase().replace(pattern, "");
    };

    const submitData = {
      title: eTitle,
      image: eImage,
      time: eTime,
      location: eLocation,
      district: eDistrict,
      slug: convertSlug(eTitle),
      description: eDescription,
    };
    onAddMeetup(submitData);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            required
            id="title"
            ref={titleInput}
            className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Time
          </label>
          <input
            type="datetime-local"
            required
            id="time"
            ref={timeInput}
            className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            required
            id="location"
            ref={locationInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="district"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Disctrict
          </label>
          <select
            required
            id="district"
            ref={districtInput}
            className="form-select px-4 py-3 rounded-full w-full"
          >
            <option value="charlottenburg-wilmersdorf">
              Charlottenburg-Wilmersdorf
            </option>
            <option value="friedrichshain-kreuzberg">
              Friedrichshain-Kreuzberg
            </option>
            <option value="tempelhof-schoeneberg">Tempelhof-Schöneberg</option>
            <option value="steglitz-zehlendorf">Steglitz-Zehlendorf</option>
            <option value="mitte">Mitte</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            required
            rows={5}
            id="description"
            ref={descriptionInput}
            className="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image
          </label>
          <select
            id="district"
            required
            ref={imageInput}
            className="form-select px-4 py-3 rounded-full w-full"
          >
            <option value="dachhund">Dachshunds</option>
            <option value="frenchie">French Bulldogs</option>
            <option value="forest">Dogs in the Forest</option>
            <option value="park">Dogs in the Park</option>
            <option value="beach">Dogs on the Beach</option>
            <option value="party">Dogs Party</option>
          </select>
        </div>
        <div>
          <Button ariaLabel="Create Event" onClick={submitEvent}>
            Create Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetupForm;
