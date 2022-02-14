import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import EventList from "../../components/details/EventList";
import Stage from "../../components/details/Stage";
import { getAllEvents, getEventsByDistrict } from "../../utils/events-util";

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

const Home: NextPage = ({ events, district }) => {
  console.log('eventdata', events)
  const [event] = events;
  return (
    <>
      <Stage
        title={district.name}
        description={district.description}
        images={district.images}
      />
      <EventList events={events} />
    </>
  );
};

export const getStaticPaths = async () => {
    const districts = await fetch('http://localhost:3000/api/get-all/districts').then(res => res.json());

    const paths = districts.map((district: { slug: string; }) => {
        return({
            params: {
                district: district.slug
            }
        })
    });

    return {
        fallback: false,
        paths
    }
}

export const getStaticProps: GetStaticProps = async (context)=>{
    const slug = context?.params?.district as string;
    const events = await getEventsByDistrict(slug)
    const [district] = await fetch(`http://localhost:3000/api/find/districts/slug/${slug}`).then(res => res.json())

  return {
    props: {
      events,
      district
    },
    revalidate: 3600
  }
}



export default Home;
