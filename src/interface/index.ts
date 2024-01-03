export interface IUser {
  id: number;
  name: string;
  email: string;
  city: string;
  avatar: string;
  sells_from: string;
  phone: string;
  role: string;
  surname: string;
}

export interface IImage {
  id: number;
  ad_id: number;
  url: string;
}

export interface IAdvert {
  title: string;
  description: string;
  price: number;
  id: number;
  images: IImage[];
  user_id: number;
  created_on: string;
  user: IUser;
}

export interface IComment {
  id: number;
  text: string;
  created_on: string;
  author: IUser
}
