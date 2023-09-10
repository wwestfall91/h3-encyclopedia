import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const PatriceWilsonCountdown = new IcebergItem(
  "Partice Wilson Countdown",
  "Patrice Wilson is a music producer who wrote Rebecca Black's song Friday (along with many others). In the early days of the Podcast Ethan would often rag on him for being a creep. In November of 2017 Patrice would post a livestream with a countdown to December 1st with h3h3 in the title. Ethan would show this to Post Malone on Podcast #39, and afterwards fans would point out that the live stream has began to change. This led to a whole series of creepy events that would genuinely freak Ethan out.",
  Moments.GetMomentsByTag(Tag["Patrice Wilson Countdown Stream"])
);
