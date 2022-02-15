import Slider from "react-slick";
import Image from "next/image";
import { IImage } from "../../utils/interfaces";

interface Stage {
  title: string;
  description: string;
  images: IImage[];
}
const Stage: React.FC<Stage> = ({ title, description, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-5 grid grid-cols-1 md:grid-cols-2">
      <div className="my-2 mx-2.5">
        <h1 className="font-bold text-2xl py-2 text-center text-orange-600 md:text-4xl">
          {title}
        </h1>
        <p className="text-base leading-8">{description}</p>
      </div>
      <div className="mx-auto items-center my-2">
        {/* <Slider className="w-full" {...settings}> */}
        {/* {images.map((image) => (
            <div key={image.alt}>
              <Image src={image.src} alt={image.alt} height={500} width={400} />
            </div>
          ))} */}

        <Image
          src={images[0].src}
          alt={images[0].alt}
          height={500}
          width={400}
          className="object-fit"
        />

        {/* <div>
            <Image
              src={images[1].src}
              alt={images[1].alt}
              height={500}
              width={400}
            />
          </div>
          <div>
            <Image
              src={images[2].src}
              alt={images[2].alt}
              height={500}
              width={400}
            />
          </div> */}

        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Stage;
