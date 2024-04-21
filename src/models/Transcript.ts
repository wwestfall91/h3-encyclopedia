export class Transcript {
  text: string;
  start: number;
  duration: number;

  constructor(text: string, start: number, duration: number) {
    this.text = text;
    this.start = start;
    this.duration = duration;
  }
}
