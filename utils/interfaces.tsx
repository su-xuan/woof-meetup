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

export interface IDistrict {
  _id: string,
  slug:string,
  name: string,
  description: string,
  images: IImage[]
  
  }
export interface ILayout {
  children: React.ReactNode
  districts: IDistrict[]
}