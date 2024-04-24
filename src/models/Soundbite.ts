import { Episode } from "./Episode";

export class Soundbite {
  title: string;
  sound: string;
  episode: Episode;
  time: number;
  newlyAdded: boolean;
  image: string;

  constructor(
    title: string,
    sound: string,
    episode: Episode,
    time: number = 0,
    newlyAdded: boolean = false,
    image: string = ""
  ) {
    this.title = title;
    this.sound = sound;
    this.episode = episode;
    this.time = time;
    this.newlyAdded = newlyAdded;
    this.image = image;
  }

  GetTimestamp() {
    return `${this.episode.URL}&t=${this.time}s`;
  }
}
