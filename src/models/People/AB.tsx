import { Person } from "./../Person";
import * as SB from "../Soundbites";
import * as Faces from "./../Faces";

export class AB extends Person {
  constructor() {
    super("AB", "Ayad", [SB.AB_I_Like_The_Twilight_Movies], Faces.AB_Ayad);
  }
}
