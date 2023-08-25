import { Episode } from "./Episode";

export class Soundbite {
  title: string;
  sound: string;
  episode: Episode;
  time: number;
  image: string;

  constructor(
    title: string,
    sound: string,
    episode: Episode,
    time: number = 0,
    image: string = ""
  ) {
    this.title = title;
    this.sound = sound;
    this.episode = episode;
    this.time = time;
    this.image = image;
  }

  GetTimestamp() {
    return `${this.episode.URL}&t=${this.time}`;
  }
}
