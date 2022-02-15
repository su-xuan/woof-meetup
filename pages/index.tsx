import type { GetStaticProps, NextPage } from "next";
import EventList from "../components/details/EventList";
import Stage from "../components/details/Stage";
import { getAllEvents } from "../utils/events-util";
import { IEvent } from "../utils/interfaces";

const dummyData = {
  title: "Enjoy Woof Meetup in Berlin!",
  description:
    "Berlin was voted Germany’s most dog-friendly city. If you are a dog lover in Berlin, this is the right place for you and your four-legged firend. Here you can have the oppotunities to meet people living in the same district, who love dogs just like you. You can share experiences and find potential dog sitters and have fun with tons of dogs!",
  images: [
    { src: "/images/landing-page-1.jpg", alt: "two running dogs" },
    { src: "/images/landing-page-2.jpeg", alt: "dog at Brandenburg Gate" },
    { src: "/images/landing-page-3.jpeg", alt: "dogs at Reichstag Building" },
  ],
};


interface IHomePage {
  events: IEvent[]
}



const Home: NextPage<IHomePage> = ({ events }) => {
  return (
    <div className="w-full pt-16">
      <Stage
        title={dummyData.title}
        description={dummyData.description}
        images={dummyData.images}
      />
      <EventList events={events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ()=>{
const events = await getAllEvents()

  return {
    props: {
      events
    },
    revalidate: 3600
  }
}


export default Home;
