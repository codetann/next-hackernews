import { Base } from "./Base";

export interface Comment extends Base {
  parent: number;
  text: string;
}
