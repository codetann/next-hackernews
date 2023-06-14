import { Base } from "./Base";

export interface Story extends Base {
  descendants: number;
  score: number;
  title: string;
  url: string;
}
