import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const TheDrunkStream = new IcebergItem(
  "Partice Wilson Countdown",
  "On Podcast #29 Ethan, Jacksfilms, and Erik all got quite drunk, and Ethan mentioned his Podcast with iDubbbz where he said some derogatory terms. He not ony mentioned these terms, but did not censor himself when saying them. The episode has since been edited for obvious reasons, and Ethan has apologized many times for his remarks. This is best showcased on the Gokanaru episode.",
  Moments.GetMomentsByTag(Tag["The Drunk Stream"])
);
