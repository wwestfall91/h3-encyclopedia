import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const DanHadHair = new IcebergItem(
  "Dan Had Hair",
  "Yes, it may be hard to believe but Dan actually had hair for a very long time on the podcast. Although it was almost always hidden beneath a hat or beanie, you can see here in an early episode - Our boy's got the goods.",
  Moments.GetMomentsByTag(Tag["Dan Had Hair"])
);
