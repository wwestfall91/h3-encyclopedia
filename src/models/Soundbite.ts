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
  url?: string;
  image?: string;

  constructor(
    title: string,
    sound: string,
    episodetype: string,
    episodenumber: number,
    episodedate: string,
    time: number,
    personName: string,
    url: string,
    image: string
  ) {
    this.title = title;
    this.sound = sound;
    this.episodetype = episodetype == "" ? undefined : this.convertStringToEpisodeType(episodetype);
    this.episodenumber = episodenumber == 0 ? undefined : episodenumber;
    this.episodedate = episodedate == "" ? undefined : episodedate;
    this.personName = personName == "" ? undefined : personName;
    this.time = time;
    this.url = url == "" ? undefined : url;
    this.image = image == "" ? undefined : image;
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

    if(this.url)
      return this.url;

    return `${episode.url}&t=${this.time}s`;
  }

  getTime(){
    return this.time;
  }

  getVideoId(): string {
    const id = this.url?.includes("v=") ? this.url?.split("&t=")[0].split("v=")[1] : this.url?.split("&t=")[0].split("be/")[1];
    return id!;
  }
}
