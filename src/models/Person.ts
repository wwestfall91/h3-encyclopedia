export class Person {
  firstName: string;
  lastName: string;
  face: string;

  constructor(
    firstName: string,
    lastName: string,
    face: string = "https://i.pinimg.com/1200x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.face = face;
  }
}
