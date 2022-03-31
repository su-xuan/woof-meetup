import Router, { useRouter } from "next/router";
import NewMeetupForm from "../components/NewMeetupForm";
import { INewEvent } from "../utils/interfaces";

const NewMeetup = () => {
  const router = useRouter()
  const addMeetupHandler = async (event: INewEvent) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push('/')
  };
  return (
    <div className="w-full">
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  );
};
export default NewMeetup;
