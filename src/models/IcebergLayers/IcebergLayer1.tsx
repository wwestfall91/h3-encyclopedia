import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const PeaceAndLove = new IcebergItem(
  "Peace & Love",
  "In the summer of 2020 Ethan and Hila watched a video made by Ringo Starr. The video declared that after the 20th of October he would not be accepting any more fan mail. He ushered his fans please, do not send any fan mail to ANY address. He has TOO MUCH to do. No more fanmail. Anyway, peace and love, peace and love. Ethan loved the peace and love attitude and started quoting it. It would become a staple on the show and among fans, and led to Ethan eventually re-enacting the entire video.",
  Moments.GetMomentsByTag(Tag.PeaceAndLove)
);

export const Frenemies = new IcebergItem(
  "Frenemies",
  "A web show hosted by Ethan Klein and Trisha Paytas - It ran for 39 episodes from Septemper 15, 2020 - June 8, 2021 before its inevitable crash and burned. There's simply too much to cover in-depth here, and this will eventually be worthy of it's own page. For now, I'm sure you know how the rest goes.",
  Moments.GetMomentsByTag(Tag.Frenemies)
);

export const FootSoldiers = new IcebergItem(
  "Foot Soldiers",
  "In the March of 2020 Ethan would host a segment on the show about wikifeet.com, a popular website that hosts feet pictures of celebrities. This would lead to fans mass-rating Ethan's feet a 5 star, leading to Ethan being #1 on the site, and the title 'Foot Soldiers' given to fans of the show. However, mods began to catch wind of these shenanigans and Ethan would be banned from the site entirely, his page, deleted. In retaliation, Ethan went undercover as Ethan Kleinschroth and sent word to his fans to boost him again. Ethan Kleinschroth would reach and all time high score of 7.42 out of 5 before once again being banned from the site. The name Foot Soldiers became a staple to name members of the fandom, and are still echoed across these dusty halls to this day.",
  Moments.GetMomentsByTag(Tag["Foot Soldiers"])
);

export const FAMILY = new IcebergItem(
  "FAMILY",
  "A video of Vin Diesel lookalikes repeatedly saying 'FAMILY' surfaced and was watched on the Pod. After this the crew and chat began chanting 'FAMILY' throughout the show. While it's not done as much these days, it does still prop up from time-to-time.",
  Moments.GetMomentsByTag(Tag.FAMILY)
);
