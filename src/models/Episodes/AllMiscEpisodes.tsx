import { Episode } from "../Episode";
import { EpisodeType } from "../enums/EpisodeType";

export const AllMiscEpisodes: Episode[] = new Array(
  new Episode(
    "Surprise Reunion For 2nd Annual Steamies",
    "https://www.youtube.com/watch?v=daxr0SkHQm0",
    "01/28/2022",
    [EpisodeType.Misc, EpisodeType.Guest]
  ),
  new Episode(
    "How To Lose Your Life's Savings w Cryptocurrency",
    "https://www.youtube.com/watch?v=EhL2OWXZ26s&t=49s",
    "01/23/2018",
    [EpisodeType.H3H3Productions]
  )
);
