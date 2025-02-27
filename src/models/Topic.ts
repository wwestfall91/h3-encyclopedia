import { Tag } from "./enums/Tag";

export class Topic {
    name: string;
    description: string;
    image: string;
    tags?: Tag[]
  
    constructor(name: string, tags:string, image: string, description: string) {
      this.name = name;
      this.image = image == "" ? "https://topic.com/wp-content/uploads/2023/07/topic_logo_ko.png" : image;
      this.description = description;
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
  }
  