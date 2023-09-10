import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const DrIdz = new IcebergItem(
  "DoesRyanLook LikeHarvey.com",
  "In the midst of the Ryan Kavanaugh drama a meme was born that Ryan kinda looks like Harvey Weinstein, the writing was on the wall, the public was confused! So Ethan and Love created a solution to this problem - [doesryankavanaughlooklikeharveyweinstein.com](https://doesryankavanaughlooklikeharveyweinstein.com/). The public rejoiced! _Finally, we can breath again_ one user said. \n Of course, ~~Harvey Weinstein~~ Ryan Kavanaugh would not take this sitting down and in December of 2021 he would file a third lawsuit against Ethan and try to get the site taken down. He would not succeed, however, and the site remains active to this day and has been shown to many guests!",
  Moments.GetMomentsByTag(Tag["RyanHarvey.com"])
);
