export class Person {
  name: string;
  image: string;
  allegiance: string;

  constructor(name: string, image: string = "https://i.pinimg.com/1200x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg", allegiance: string = "Neutral") {
    this.name = name;
    this.image = image;
    this.allegiance = allegiance
  }
}
