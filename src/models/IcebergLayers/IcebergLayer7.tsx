import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const AIIan = new IcebergItem(
  "AI Ian",
  "In September of 2020 an Artificial Intelligence of Ian was created. He was faulty straight from the get go and a bit of a dick, but they kept him around for awhile. Many but they kept him around awhile and was often a great defendant on Content Court.",
  Moments.GetMomentsByTag(Tag["AI Ian"])
);
