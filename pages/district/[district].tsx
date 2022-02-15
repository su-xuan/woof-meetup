import type { GetStaticProps, NextPage } from "next";
import EventList from "../../components/details/EventList";
import Stage from "../../components/details/Stage";
import Layout from "../../components/layout/Layout";
import {
  getAllDistricts,
  getDistrictBySlug,
  getEventsByDistrict,
} from "../../utils/events-util";
import { IDistrict, IEvent } from "../../utils/interfaces";

interface IDistrictPage {
  events: IEvent[];
  district: IDistrict;
  districts: IDistrict[]
}

const Home: NextPage<IDistrictPage> = ({ events, district, districts }) => {
  return (
    <Layout districts={districts}>
      <div className="pt-16 mx-5">
        <Stage
          title={district.name}
          description={district.description}
          images={district.images}
        />
        <EventList events={events} />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const districts = await getAllDistricts();

  const paths = districts.map((district: { slug: string }) => {
    return {
      params: {
        district: district.slug,
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.district as string;
  const events = await getEventsByDistrict(slug);
  const district = await getDistrictBySlug(slug);
  const districts = await getAllDistricts()
  

  return {
    props: {
      events,
      district,
    },
    revalidate: 3600,
  };
};

export default Home;
