import * as Moments from "../Moments/Moments";
import { Tag } from "../enums/Tag";
import IcebergItem from "./IcebergItem";

export const SteamyAwards = new IcebergItem(
  "The Steamy Awards",
  "A yearly segment that is meant to be a parody of the Streamy awards. The co-host(s) change every year, and are cursed if they take on the role, always getting cancelled in the year that follows. This year Ethan attended the Streamy's in person AND THEY FUCKED HIM!! Because of this we do not know what the future holds for the Steamy's, but we can be sure that it's going to something petty as hell, and we cannot wait to find out.",
  Moments.GetMomentsByTag(Tag.Steamys)
);

export const TrillerLawsuits = new IcebergItem(
  "Triller Lawsuits",
  "In April of 2021 Jake Paul had his fight against Ben Askren, to which Ethan joked about pirating the fight on Instagram. He then showed a clip of the fight in the following podcast, to which Triller decided to combat by suing Ethan for rebroadcasting the event. A few months later, Triller sued Hila, and a few months after that a third lawsuit was filed. This topic deserves a page within itself, but for now enjoy the related links below to get you up to speed with the gist of the situation!",
  Moments.GetMomentsByTag(Tag.Triller)
);

export const DansMouse = new IcebergItem(
  "800DPI",
  "No one knew for awhile, but Dan's mouse has a voice, and it's sexy as hell. Many in the chat thirst over Dan's mouse on the daily, and for awhile the crew played the gag out. However, these days Dan has showed his disdane for that sexy mouse of his, and we haven't heard that silky smooth voice in quite some time. Many remain hopeful that one day we'll get to hear it once again. Ethan also got sick and impersonated the mouse, so... There's that too if you're into it?",
  Moments.GetMomentsByTag(Tag["800DPI"])
);

export const FivePercent = new IcebergItem(
  "Five Percent",
  "On the final episode of Frenemies Trisha complained about how Ethan took 5% of payment for the show. This was to pay for production costs, in which Ethan and Crew were handling everything. After Frenemies officially ended, Trisha's sister would make a video talking about him taking that 5%. This has led to soundbites of various other people also saying 5%, such as Joe Rogan.",
  Moments.GetMomentsByTag(Tag["5%"])
);

export const ScorpionChair = new IcebergItem(
  "The Scorpion Chair",
  "In 2021 the Podcast moved to a new studio. Dan used this as leverage to try and get a newer, more badass, chair. There were various iterations of what the chair would be, but in the end it was the STEEL STRIKER, forged in the deepest recesses of a neutron star. Well, as it turns out, the chair was lacking in the comfort area. After two long years of Dan dealing with it, the Crew finally decided enough was enough, and in 2023 the Back-chelor segment was done to save Dan from a lifetime of backpain! In this segment Dan got to choose what his new chair would be, and he landed on a recreation of Captain Pickards chair from Star Trek. Currently, the chair is currently being FORGED IN THE DEEPEST RECESSES OF A NEUTRON STAR, but we can expect it to be in the studio sometime in the near future!",
  Moments.GetMomentsByTag(Tag["Scorpion Chair"])
);

export const WAN = new IcebergItem(
  "WAN",
  "In July 2022 Ethan would watch some of Jidion's awful prank videos, leading to a response from Jidion himself. In the response Jidion was highly critical of Ethan, however, he took a liking to Dan and called him W DAN, or WAN for short.",
  Moments.GetMomentsByTag(Tag.WAN)
);

export const FLOCKA = new IcebergItem(
  "FLOCKA",
  "One day Zach was unable to make it to the show, and thus AB took over on the soundboard. However, not wanting to truly commit to competing with Zach, AB only used a single soundbite... FLOCKA!",
  Moments.GetMomentsByTag(Tag.FLOCKA)
);

export const EthanIs42 = new IcebergItem(
  "Ethan is 42",
  "Ethan was in denial on his 40th birthday, believing he was only 37. By his 42nd birthday he was still in denial. The crew often has to remind him that he is, in fact, 42 years old.",
  Moments.GetMomentsByTag(Tag["Ethans Birthday"])
);

export const MajorityFemaleAudience = new IcebergItem(
  "Majority Female Audience",
  "Back in the day the show was watched primarily by men. However, after Frenemies there was an uptick in women viewers. As of September 2022 the audience was 60% women.",
  Moments.GetMomentsByTag(Tag["Female Audience"])
);

export const ShoutoutToHisFamily = new IcebergItem(
  "Shoutout to his Family",
  "In May of 2020 a famous DJ named David Guetta made a tribute song to George Floyd's family, starting the song by saying 'shoutout to his family'. They watched it on the podcast and it became a very popular soundbite, eventually winning the first ever soundbite tournament! The channel also recently made a lore video about this, so check that out!",
  Moments.GetMomentsByTag(Tag["Shoutout to his family"])
);

export const AUDIOAUDIOAUDIO = new IcebergItem(
  "AUDIO AUDIO AUDIO",
  "A popular soundbite that originated from when Jimmie Lee, Zach, and Cameron went out on the streets of LA. A similar soundbite has spawned from Jimmy saying this on a Zoom call with minimal service.",
  Moments.GetMomentsByTag(Tag["AUDIO AUDIO AUDIO"])
);
