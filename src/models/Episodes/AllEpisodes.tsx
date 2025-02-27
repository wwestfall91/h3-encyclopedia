// import { Episode } from "../Episode";
// import { EpisodeType } from "../enums/EpisodeType";
// import { useDataContext } from "../../context/DataContext";


// const GetEpisode = () => {
//   const { soundbites, episodes, people } = useDataContext();

//   const episode = episodes.filter((x) => EpisodeType[EpisodeType[x.type] as unknown as number] == EpisodeType[type] && x.number == episodeNumber)[0];
//   return episode;
// }

// function GetEpisodeByTitle(title: string) : Episode {
//     const { soundbites, episodes, people } = useDataContext();

//     const episode = episodes.filter((x) => x.title.includes(title))[0];
//     return episode;
// }


// function GetAfterDark(episodeNumber: Number) {
//   return AllEpisodes.GetEpisode(EpisodeType.AfterDark, episodeNumber);
// }
// function GetPodcast(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.Podcast, episodeNumber);
// }
// function GetFrenemies(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.Frenemies, episodeNumber);
// }
// function GetContentCourt(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.ContentCourt, episodeNumber);
// }
// function GetFamilies(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.Families, episodeNumber);
// }
// function GetLeftovers(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.Leftovers, episodeNumber);
// }
// function GetH3TV(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.H3TV, episodeNumber);
// }
// function GetOffTheRails(episodeNumber: Number) {
//   return GetEpisode(EpisodeType.OTR, episodeNumber);
// }

//export default AllEpisodes;

