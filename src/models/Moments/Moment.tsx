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
  date?: string

  constructor(
    title: string,
    episodeType: string,
    episodeNumber: number,
    url: string,
    people: string,
    tags: string,
    image: string,
    episodeName: string,
    section:string
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

  getEpisode(episodes: Episode[]){
    return episodes.find(e => e.type == this.episodeType && e.number == this.episodeNumber)
  }
}



