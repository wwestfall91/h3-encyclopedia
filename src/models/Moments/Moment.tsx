import { EpisodeType } from "../enums/EpisodeType";
import { Tag } from "../enums/Tag";
import { Episode } from "../Episode";

export class Moment {
  title: string;
  episodeType: EpisodeType;
  episodeNumber: number;
  url: string;
  people: string[];
  tags: Tag[];
  image?: string;
  episodeName?: string;
  section?: string;
  date?: Date

  constructor(
    title: string,
    episodeType: string,
    episodeNumber: number,
    url: string,
    people: string,
    tags: string,
    image: string,
    episodeName: string,
    section:string,
    date:string
  ) {
    this.title = title;
    this.episodeType = this.convertStringToEpisodeType(episodeType);
    this.episodeNumber = episodeNumber;
    this.url = url;
    this.people = people == "" || undefined ? [] : people.split(",");
    this.tags = tags == "" || undefined ? [] : this.convertStringsToTagArray(tags.split(","));
    this.image = image == "" ? undefined : image;
    this.episodeName = episodeName == "" ? undefined : episodeName;
    this.section = section == "" ? undefined : section
    this.date = new Date(date);
  }  

  getShortEpisodeTitle(){
    return `${this.episodeType} #${this.episodeNumber}`
  }

  convertStringToEpisodeType(episodeTypeString : string){
    for (var k in EpisodeType) {
      if (EpisodeType[k] == episodeTypeString)
        return (EpisodeType as any)[k]
    }
  }

  convertStringsToTagArray(tagStrings : string[]){
    let tags : Tag[] = [];
    tagStrings.map(x => {
      for(var tag in Tag){
        if(x == tag){
          tags.push((Tag as any)[tag])
        }
      }
    })
    
    return tags;
  }

  getEpisode(episodes: Episode[]) {
    return episodes.find(e => e.type == this.episodeType && e.number == this.episodeNumber)
  }

  getTime(): number {
    const time = +this.url.split("t=")[1]!
    console.log("TIME: ", time)
    return time;
  }

  getVideoId(): string {
    const id = this.url.includes("v=") ? this.url.split("&t=")[0].split("v=")[1] : this.url.split("&t=")[0].split("be/")[1]
    return id;
  }
}



