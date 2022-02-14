export interface IImage {
  src: string;
  alt: string;
}

export interface IEvent {
  _id: string;
  title: string;
  image: IImage;
  time: string;
  location: string;
  district: string;
  slug: string;
  description: string
}
