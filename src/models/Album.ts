import { ImageItem } from "./ImageItem";

export interface Album {
  id: number;
  title: string;
  description: string;
  images: ImageItem[];
}
