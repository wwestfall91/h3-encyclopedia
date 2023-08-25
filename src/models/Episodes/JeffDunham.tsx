import { EpisodeType } from "../enums/EpisodeType";
import { Episode } from "./../Episode";

export class JeffEpisode extends Episode {
  constructor() {
    super(
      "LIVE! On stage in Pittsburgh, celebrating the end of ‘22! Happy New Year… Almost! | JEFF DUNHAM",
      "https://www.youtube.com/watch?v=Wc78_VINRu0",
      "12-31-2022",
      [EpisodeType.Podcast]
    );
  }
}

export default JeffEpisode;
