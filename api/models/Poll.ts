import { Base } from "./Base";

export interface Poll extends Base {
  descendants: number;
  score: number;
  title: string;
  text: string;
}
