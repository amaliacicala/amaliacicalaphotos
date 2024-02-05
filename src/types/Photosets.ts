export interface PhotosetsState {
  loading: boolean;
  images: Array<Image>;
}

export interface Image {
  id: string;
  url_c: string;
  url_o: string;
  title: string;
  height_c: number;
}
