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
    episodeNumber: number = Number(title.match(/(?<=#)\d+/g))
  ) {
    this.title = title;
    this.URL = URL;
    this.date =
      ("0" + (new Date(date).getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + new Date(date).getDate()).slice(-2) +
      "-" +
      new Date(date).getFullYear();
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

  getTimestampURL(seconds: number) {
    return `${this.URL}&t=${seconds}s`;
  }
}
