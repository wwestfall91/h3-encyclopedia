import { Soundbite } from "./Soundbite";

export class Person {
  firstName: string;
  lastName: string;
  soundbites: Soundbite[];
  face: string;

  constructor(
    firstName: string,
    lastName: string,
    soundbites: Soundbite[] = [],
    face: string = "https://i.pinimg.com/1200x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.soundbites = soundbites;
    this.face = face;
  }
}
