import { EpisodeType } from "./enums/EpisodeType";
import { Moment } from "./Moments/Moment";

export class Episode {
  type: EpisodeType
  number: Number
  date: string
  title: string
  url: string
  miscTypes:EpisodeType[]

  constructor(
    type: string,
    number: Number,
    date: string,
    title: string,
    url: string,
    miscTypes: string[]
  ) {
    this.type = this.convertStringToEpisodeType(type);
    this.number = number;
    this.date = date;
    this.title = title;
    this.url = url;
    this.miscTypes = miscTypes.length == 0 ? [] : this.convertStringToEpisodeType(miscTypes[0]);
  }

  convertStringToEpisodeType(episodeTypeString : string){
    for (var k in EpisodeType) {
      if (EpisodeType[k] == episodeTypeString)
        return (EpisodeType as any)[k]
    }
  }

  getShortTitle(){
    return `${this.type} #${this.number}`
  }

  getTimestampURL(seconds: number){
    return `${this.url}&t=${seconds}s`;
  }

  getThumbnail(){
    try {
      if (this.url.includes("youtu.be")) {
        const id = this.url.split(".be/")[1];
        return `https://i3.ytimg.com/vi/${id}/hqdefault.jpg`
      }
  
      const id = this.url.split("v=")[1];
      return `https://i3.ytimg.com/vi/${id}/hqdefault.jpg`
    } catch (error) {
      return `https://static.wikia.nocookie.net/h3h3/images/a/a5/Ross-AirCleaner2.jpg`
    }
  }

  getMoments(moments: Moment[]){
    return moments.filter(m => m.episodeType == this.type && m.episodeNumber == this.number)
  }
}
