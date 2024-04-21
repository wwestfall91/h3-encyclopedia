import { Episode } from "../Episode";
import { Person } from "../Person";
import { Tag } from "../enums/Tag";

export class Moment {
  title: string;
  episode: Episode;
  url: string;
  people: Person[];
  tags: Tag[];
  image: string;

  constructor(
    title: string,
    episode: Episode,
    seconds: number = 0,
    tags: Tag[] = [],
    people: Person[] = [],
    image: string = ""
  ) {
    this.title = title;
    this.episode = episode;
    this.url = episode.getTimestampURL(seconds);
    this.tags = tags;
    this.people = people;
    this.image = image;
  }
}
