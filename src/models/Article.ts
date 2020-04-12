import { Moment } from "moment";

export type Article = {
  id: number;
  category: string;
  date: Moment;
  image: string;
  preamble: string;
  title: string;
};
