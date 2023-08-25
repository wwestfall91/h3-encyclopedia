import { EpisodeType } from "./enums/EpisodeType";

export class Episode {
  title: string;
  shortTitle: string;
  URL: string;
  date: string;
  types: EpisodeType[];
  episodeNumber: number;

  constructor(
    title: string,
    URL: string,
    date: string,
    types: EpisodeType[],
    episodeNumber: number = Number(title.split("#")[1])
  ) {
    this.title = title;
    this.URL = URL;
    this.date = date;
    this.types = types;
    this.episodeNumber = episodeNumber;

    if (types.includes(EpisodeType.H3H3Productions)) {
      this.shortTitle = "H3H3Productions";
    } else {
      this.shortTitle = Number.isNaN(episodeNumber)
        ? this.title.includes("JEFF DUNHAM")
          ? ""
          : this.title
        : `${EpisodeType[types[0]]} #${episodeNumber}`;
    }
  }
}
