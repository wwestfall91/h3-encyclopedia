import { Episode } from "../Episode";
import { AllPodcasts } from "./AllPodcasts";
import { AllFrenemies } from "./AllFrenemies";
import { AllContentCourts } from "./AllContentCourts";
import { AllFamilies } from "./AllFamilies";
import { AllLeftovers } from "./AllLeftovers";
import { AllOffTheRails } from "./AllOffTheRails";
import { AllAfterDarks } from "./AllAfterDarks";
import { AllH3TVs } from "./AllH3TVs";
import { EpisodeType } from "../enums/EpisodeType";
import { AllMiscEpisodes } from "./AllMiscEpisodes";
import { AllSeeYouNextTuesdays } from "./AllSeeYouNextTuesdays";
import JeffEpisode from "./JeffDunham";

export const AllEpisodes: Episode[] = [
  ...AllPodcasts,
  ...AllFrenemies,
  ...AllContentCourts,
  ...AllFamilies,
  ...AllLeftovers,
  ...AllOffTheRails,
  ...AllAfterDarks,
  ...AllH3TVs,
  ...AllMiscEpisodes,
  ...AllSeeYouNextTuesdays,
];

export function GetEpisode(type: EpisodeType, episodeNumber: Number) {
  const episode = AllEpisodes.find(
    (x) => x.types.includes(type) && x.episodeNumber == episodeNumber
  );

  return episode != undefined ? episode : new JeffEpisode();
}

export function getEpisodeByTitle(title: string) {
  if (title.includes("Content Court: The ACE Family")) {
  }

  return AllEpisodes.find((x) => x.title.includes(title));
}

export function GetAfterDark(episodeNumber: Number) {
  return GetEpisode(EpisodeType.AfterDark, episodeNumber);
}
export function GetPodcast(episodeNumber: Number) {
  return GetEpisode(EpisodeType.Podcast, episodeNumber);
}
export function GetFrenemies(episodeNumber: Number) {
  return GetEpisode(EpisodeType.Frenemies, episodeNumber);
}
export function GetContentCourt(episodeNumber: Number) {
  return GetEpisode(EpisodeType.ContentCourt, episodeNumber);
}
export function GetFamilies(episodeNumber: Number) {
  return GetEpisode(EpisodeType.Families, episodeNumber);
}
export function GetLeftovers(episodeNumber: Number) {
  return GetEpisode(EpisodeType.Leftovers, episodeNumber);
}
export function GetH3TV(episodeNumber: Number) {
  return GetEpisode(EpisodeType.H3TV, episodeNumber);
}
export function GetOffTheRails(episodeNumber: Number) {
  return GetEpisode(EpisodeType.OTR, episodeNumber);
}
