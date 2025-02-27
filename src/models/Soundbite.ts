import { EpisodeType } from "./enums/EpisodeType";
import { Episode } from "./Episode";

export class Soundbite {
  title: string;
  sound: string;
  episodetype?: EpisodeType;
  episodenumber?: number;
  episodedate?: string;
  time?: number;
  personName?: string;
  timestampurl?: string;
  image?: string;

  constructor(
    title: string,
    sound: string,
    episodetype: string,
    episodenumber: number,
    episodedate: string,
    time: number,
    personName: string,
    timestampurl: string,
    image: string
  ) {
    this.title = title;
    this.sound = sound;
    this.episodetype = episodetype == "" ? undefined : this.convertStringToEpisodeType(episodetype);
    this.episodenumber = episodenumber == 0 ? undefined : episodenumber;
    this.episodedate = episodedate == "" ? undefined :  episodedate;
    this.personName = personName == "" ? undefined :   personName;
    this.time = time == 0 ? undefined :   time;
    this.timestampurl = timestampurl == "" ? undefined :   timestampurl;
    this.image = image == "" ? undefined :   image;
  }

  getShortEpisodeTitle(){
    return `${this.episodetype} #${this.episodenumber}`
  }

  convertStringToEpisodeType(episodeTypeString : string){
    for (var k in EpisodeType) {
      if (EpisodeType[k] == episodeTypeString)
        return (EpisodeType as any)[k]
    }
  }

  GetTimestamp(episode : Episode | undefined) {
    if(episode == null || episode == undefined)
      return;

    if(this.timestampurl)
      return this.timestampurl;

    return `${episode.url}&t=${this.time}s`;
  }
}
