import { Episode } from "./Episode";
import { Person } from "./Person";

export class Soundbite {
  title: string;
  sound: string;
  episode: Episode;
  time: number;
  image: string;
  people: Person[];

  constructor(
    title: string,
    sound: string,
    people: Person[],
    episode: Episode,
    time: number = 0,
    image: string = ""
  ) {
    this.title = title;
    this.sound = sound;
    this.people = people;
    this.episode = episode;
    this.time = time;
    this.image = image;
  }

  GetTimestamp() {
    return `${this.episode.URL}&t=${this.time}s`;
  }
}
