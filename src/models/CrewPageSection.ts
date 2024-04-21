import { Moment } from "./Moments/Moment";

export class CrewPageSection {
  title: string;
  moments: Moment[];

  constructor(title: string, moments: Moment[]) {
    this.title = title;
    this.moments = moments;
  }
}
