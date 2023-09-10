import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const MayoMemes = new IcebergItem(
  "Mayo Memes",
  "For a time mayonaisse was a consistent theme throughout on the H3 Podcast's. Sure, today you might hear about *mayoing up Dans Dome*, or perhaps the Thanksgiving food will include homage to the simpler times. Times when Mayo Meme's reigned supreme. And they all began in an unexpected place... With Horsey Sauce.",
  Moments.GetMomentsByTag(Tag["Mayo Memes"])
);
