import type { GetStaticProps, NextPage } from "next";
import EventList from "../../components/details/EventList";
import Stage from "../../components/details/Stage";
import { server } from "../../config";
import { getEventsByDistrict } from "../../utils/events-util";
import { IDistrict, IEvent } from "../../utils/interfaces";


interface IDistrictPage {
  events: IEvent[],
  district: IDistrict
}

const Home: NextPage<IDistrictPage> = ({ events, district }) => {
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
    const districts = await fetch(`${server}/api/get-all/districts`).then(res => res.json());

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
