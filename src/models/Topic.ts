import { Tag } from "./enums/Tag";
import { Moment } from "./Moments/Moment";

export class Topic {
    name: string;
    description: string;
    image: string;
    tags?: Tag[];
  
    constructor(name: string, tags:string, image: string, description: string) {
      this.name = name;
      this.description = description;
      this.image = image == "" ? "https://topic.com/wp-content/uploads/2023/07/topic_logo_ko.png" : image;
      this.tags = tags == "" ? [] : this.convertStringsToTagArray(tags.split(", "))
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

    getMoments(moments:Moment[]){
        let topicMoments : Moment[] = [];
        if(this.tags == undefined || this.tags.length <= 0)
          return;

        moments.map((moment) => {
          this.tags?.map((tag) => {
            if(moment.tags.includes(tag)){
              topicMoments.push(moment);
            }
          })
        })
    
        return topicMoments;
      }
  }
  