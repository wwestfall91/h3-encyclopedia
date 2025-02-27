import { EpisodeType } from "../models/enums/EpisodeType";
import { Episode } from "../models/Episode";

export function GetEpisodeByTypeAndNumber (type: EpisodeType, number: number, episodes: Episode[]){
  
  const episode = episodes.filter((x) => EpisodeType[x.type] == EpisodeType[type] && x.number == number)[0];

  return episode;
}

export function GetEpisodeByTitle(title: string, episodes:Episode[]) : Episode {
  const episode = episodes.filter((x) => x.title.includes(title))[0];
  return episode;
}

export function GetAfterDark(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.AfterDark, episodeNumber, episodes);
}

export function GetPodcast(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.Podcast, episodeNumber, episodes);
}

export function GetFrenemies(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.Frenemies, episodeNumber, episodes);
}

export function GetContentCourt(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.ContentCourt, episodeNumber, episodes);
}

export function GetFamilies(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.Families, episodeNumber, episodes);
}

export function GetLeftovers(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.Leftovers, episodeNumber, episodes);
}

export function GetH3TV(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.H3TV, episodeNumber, episodes);
}

export function GetOffTheRails(episodeNumber: number, episodes: Episode[]) {
  return GetEpisodeByTypeAndNumber(EpisodeType.OTR, episodeNumber, episodes);
}