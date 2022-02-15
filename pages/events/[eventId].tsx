import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllDistricts, getAllEvents, getEventById } from "../../utils/events-util";
import Image from "next/image";
import { IDistrict, IEvent } from "../../utils/interfaces";
import Layout from "../../components/layout/Layout";

interface IDetailPage {
  event: IEvent;
  districts: IDistrict[]
}
const DetailPage: NextPage<IDetailPage> = ({ event, districts }) => {
  const { title, image, time, location, description } = event;
  return (
    <Layout districts={districts}>
      <div className="mx-5 pt-16 grid grid-cols-1 md:grid-cols-2">
        <div className="my-2 mx-2.5">
          <h1 className="font-bold text-2xl py-2 text-center text-orange-600 md:text-4xl">
            {title}
          </h1>
          <div>
            <Image
              src={image.src}
              alt={image.alt}
              height={500}
              width={400}
              className="object-fit"
            />
          </div>
        </div>
        <div className="mx-auto my-2">
          <p className="text-orange-700 font-semibold text-xl">{location}</p>
          <p className="text-teal-500 font-semibold mb-3.5">{time}</p>
          <p className="text-base leading-8">{description}</p>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((event: { _id: string }) => {
    return {
      params: {
        eventId: event._id,
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context?.params?.eventId as string;
  const event = await getEventById(eventId);
  const districts = await getAllDistricts()

  return {
    props: {
      event,
      districts
    },
    revalidate: 3600,
  };
};

export default DetailPage;
