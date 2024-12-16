export interface Tag {
  id: number;
  name: string;
}

export interface Place {
  id: number;
  name: string;
  body: string;
  img_url: string;
  tags: number[];
  tagsNames: Tag[];
}