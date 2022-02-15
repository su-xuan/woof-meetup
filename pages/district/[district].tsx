import type { GetStaticProps, NextPage } from "next";
import EventList from "../../components/details/EventList";
import Stage from "../../components/details/Stage";
import { getAllDistrictSlugs, getDistrictBySlug, getEventsByDistrict } from "../../utils/events-util";
import { IDistrict, IEvent } from "../../utils/interfaces";


interface IDistrictPage {
  events: IEvent[],
  district: IDistrict
}

const Home: NextPage<IDistrictPage> = ({ events, district }) => {
  const [event] = events;
  return (
    <div className="pt-16 mx-5">
      <Stage
        title={district.name}
        description={district.description}
        images={district.images}
      />
      <EventList events={events} />
    </div>
  );
};

export const getStaticPaths = async () => {
    const districts = await getAllDistrictSlugs();

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
  const events = await getEventsByDistrict(slug);
  const district = await getDistrictBySlug(slug);

  return {
    props: {
      events,
      district
    },
    revalidate: 3600
  }
}



export default Home;
