import { Base } from "./Base";

export interface Job extends Base {
  text: string;
  url: string;
  title: string;
}
