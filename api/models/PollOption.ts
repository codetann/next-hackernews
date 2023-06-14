import { Base } from "./Base";

export interface PollOption extends Base {
  parent: number;
  score: number;
}
