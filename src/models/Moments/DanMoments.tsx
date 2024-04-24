import * as e from "../Episodes/AllEpisodes";
import * as p from "../People";
import { Tag } from "../enums/Tag";
import { Moment } from "./Moment";
import * as DanImages from "../../assets/Dan/Index/DanIndex";
import { CrewPageSection } from "../CrewPageSection";
import { Episode } from "../Episode";
import { EpisodeType } from "../enums/EpisodeType";

export const DanMoments: CrewPageSection[] = [
  new CrewPageSection("Top Dan moments", [
    new Moment(
      "Bobby Lee Interruption",
      e.GetPodcast(148),
      2062,
      [Tag.Lore],
      [p.Dan],
      DanImages.InteruptingDan
    ),
    new Moment(
      "Dan Bans Rich Lux",
      e.GetH3TV(42),
      4956,
      [Tag.Lore],
      [p.Dan],
      DanImages.RichLuxDan
    ),
    new Moment(
      "Dan saves an ad read",
      e.GetAfterDark(75),
      3449,
      [Tag.Lore],
      [p.Dan],
      DanImages.AdReadDan
    ),
    new Moment(
      "Everyone Hates Ethan",
      e.GetOffTheRails(47),
      6729,
      [Tag.Lore],
      [p.Dan],
      DanImages.SavageDan
    ),
    new Moment(
      "Dan quit the show",
      e.GetOffTheRails(53),
      107,
      [Tag.Lore],
      [p.Dan],
      DanImages.QuittingDan
    ),
    new Moment(
      "The Bull Penis Staff",
      e.GetEpisodeByTitle(
        "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
      ),
      5111,
      [Tag.Lore],
      [p.Dan],
      DanImages.PenisDan
    ),
    new Moment(
      "The Scorpion Chair",
      e.GetAfterDark(57),
      560,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScorpionChairDan
    ),
    new Moment(
      "Dan has never looked good",
      e.GetH3TV(56),
      672,
      [Tag.Lore],
      [p.Dan],
      DanImages.UglyDan
    ),
    new Moment(
      "More intensity!!",
      e.GetH3TV(56),
      30,
      [Tag.Lore],
      [p.Dan],
      DanImages.IntenseDan
    ),
    new Moment(
      "Rube Goldberg Machine",
      e.GetOffTheRails(105),
      583,
      [Tag.Lore],
      [p.Dan],
      DanImages.RubeGoldbergDan
    ),
    new Moment(
      "Widdle Wyan Kavanaugh",
      e.GetAfterDark(133),
      8534,
      [Tag.Lore],
      [p.Dan],
      DanImages.UniformDan
    ),
    new Moment(
      "The dome gets mayo'd",
      e.GetEpisodeByTitle(
        "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
      ),
      7771,
      [Tag.Lore],
      [p.Dan],
      DanImages.MayoDan
    ),
  ]),
  new CrewPageSection("Soundbites", [
    new Moment(
      "Bobby Lee Interruption",
      e.GetPodcast(148),
      2062,
      [Tag.Lore],
      [p.Dan],
      DanImages.InteruptingDan
    ),
    new Moment(
      "Jacket Off",
      e.GetH3TV(57),
      10357,
      [Tag.Lore],
      [p.Dan],
      DanImages.JacketOff
    ),
    new Moment(
      "Stick my Funger",
      e.GetH3TV(19),
      6569,
      [Tag.Lore],
      [p.Dan],
      DanImages.StickMyFungerDan
    ),
    new Moment(
      "I'm gonna come...",
      e.GetOffTheRails(1),
      812,
      [Tag.Lore],
      [p.Dan],
      DanImages.GonnaComeDan
    ),
    new Moment(
      "I cant jerk off to this",
      e.GetOffTheRails(14),
      3165,
      [Tag.Lore],
      [p.Dan],
      DanImages.CantJerkOffDan
    ),
    new Moment(
      "Put yo balls in my mouth",
      e.GetOffTheRails(62),
      4419,
      [Tag.Lore],
      [p.Dan],
      DanImages.BallsInMouthDan
    ),
  ]),
  new CrewPageSection("Before the Show", [
    new Moment(
      "Dan was a baby once!",
      e.GetAfterDark(117),
      4201,
      [Tag.Lore],
      [p.Dan],
      DanImages.BabyDan
    ),
    new Moment(
      "He grew up with Megaman",
      e.GetOffTheRails(100),
      1808,
      [Tag.Lore],
      [p.Dan],
      DanImages.MegaManDan
    ),
    new Moment(
      "He went to high school!",
      e.GetPodcast(200),
      1943,
      [Tag.Lore],
      [p.Dan],
      DanImages.YearbookDan
    ),
    new Moment(
      "flunked biology!",
      e.GetOffTheRails(7),
      3990,
      [Tag.Lore],
      [p.Dan],
      DanImages.BiologyDan
    ),
    new Moment(
      "hot boxed in a tent!",
      e.GetAfterDark(89),
      1410,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotBoxDan
    ),
    new Moment(
      "Worked at a horror park!",
      e.GetH3TV(95),
      8416,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScaryDan
    ),
    new Moment(
      "Produced short films!",
      new Episode(
        "Catalyst Trailer",
        "https://youtu.be/sGhT2CcQF3k",
        "05/30/2014",
        [EpisodeType.Misc]
      ),
      68,
      [Tag.Lore],
      [p.Dan],
      DanImages.ShortFilmDan
    ),
    new Moment(
      "Dan got fired once!",
      e.GetH3TV(95),
      8416,
      [Tag.Lore],
      [p.Dan],
      DanImages.DownBadDan
    ),
    new Moment(
      "had a peculiar roommate",
      e.GetAfterDark(58),
      7516,
      [Tag.Lore],
      [p.Dan],
      DanImages.RoommateDan
    ),
    new Moment(
      "worked as a box boy!",
      e.GetH3TV(23),
      3915,
      [Tag.Lore],
      [p.Dan],
      DanImages.BoxBoyDan
    ),
  ]),
  new CrewPageSection("Dan worked at California Pizza Kitchen", [
    new Moment(
      "#1",
      e.GetH3TV(28),
      2682,
      [Tag.Lore],
      [p.Dan],
      DanImages.CPKDan
    ),
    new Moment(
      "#2",
      e.GetLeftovers(23),
      3903,
      [Tag.Lore],
      [p.Dan],
      DanImages.CPKDan
    ),
    new Moment(
      "#3",
      e.GetOffTheRails(53),
      8849,
      [Tag.Lore],
      [p.Dan],
      DanImages.CPKDan
    ),
    new Moment(
      "#4",
      e.GetAfterDark(90),
      3217,
      [Tag.Lore],
      [p.Dan],
      DanImages.CPKDan
    ),
    new Moment(
      "#5 Serving Bieber & Gomez",
      e.GetOffTheRails(66),
      6600,
      [Tag.Lore],
      [p.Dan],
      DanImages.CPKDan
    ),
    new Moment("#6", e.GetH3TV(87), 228, [Tag.Lore], [p.Dan], DanImages.CPKDan),
  ]),
  new CrewPageSection("The Early Days", [
    new Moment(
      "How he got involved",
      new Episode(
        "H3 Podcast - We Won The Lawsuit / Skippy and Ryan Jaunzemis",
        "https://www.twitch.tv/videos/169526220?collection=tCXPvh_s1RSQOA&t=02h47m05s",
        "01/01/2015",
        [EpisodeType.Misc]
      ),
      0,
      [Tag.Lore],
      [p.Dan],
      DanImages.InvolvedDan
    ),
    new Moment(
      "First time mentioned!",
      e.GetPodcast(11),
      3705,
      [Tag.Lore],
      [p.Dan],
      DanImages.FirstMentionedDan
    ),
    new Moment(
      "First appearance!",
      e.GetPodcast(16),
      4865,
      [Tag.Lore],
      [p.Dan],
      DanImages.FirstSeenDan
    ),
  ]),
  new CrewPageSection("Dans First Segment", [
    new Moment(
      "In the News #1",
      e.GetPodcast(17),
      5182,
      [Tag.Lore],
      [p.Dan],
      DanImages.NewsDan1
    ),
    new Moment(
      "In the News #2",
      e.GetPodcast(18),
      7873,
      [Tag.Lore],
      [p.Dan],
      DanImages.NewsDan2
    ),
    new Moment(
      "In the News #3",
      e.GetPodcast(19),
      6598,
      [Tag.Lore],
      [p.Dan],
      DanImages.NewsDan3
    ),
    new Moment(
      "In the News #4",
      e.GetPodcast(20),
      3559,
      [Tag.Lore],
      [p.Dan],
      DanImages.NewsDan4
    ),
    new Moment(
      "In the News #5",
      e.GetPodcast(21),
      4189,
      [Tag.Lore],
      [p.Dan],
      DanImages.NewsDan5
    ),
    new Moment(
      "In the News #6",
      e.GetPodcast(75),
      4676,
      [Tag.Lore],
      [p.Dan],
      DanImages.NewsDan6
    ),
  ]),
  new CrewPageSection("Dan the Hater", [
    new Moment(
      "It begins with Goop",
      e.GetPodcast(178),
      6514,
      [Tag.Lore],
      [p.Dan],
      DanImages.GoopDan
    ),
    new Moment(
      "Dan hates ranch!",
      e.GetOffTheRails(1),
      812,
      [Tag.Lore],
      [p.Dan],
      DanImages.GonnaComeDan
    ),
    new Moment(
      "Dan Bans Rich Lux",
      e.GetH3TV(42),
      4956,
      [Tag.Lore],
      [p.Dan],
      DanImages.RichLuxDan
    ),
    new Moment(
      "Dan Hates Bored Apes",
      e.GetAfterDark(75),
      11258,
      [Tag.Lore],
      [p.Dan],
      DanImages.BoredApeDan
    ),
    new Moment(
      "Dan Hates Fall",
      e.GetOffTheRails(47),
      705,
      [Tag.Lore],
      [p.Dan],
      DanImages.PumpkinSpiceDan
    ),
    new Moment(
      "Dan Hates Andrew Tate",
      e.GetAfterDark(81),
      8532,
      [Tag.Lore],
      [p.Dan],
      DanImages.AndrewTateDan
    ),
    new Moment(
      "Dan Hates Fortnite",
      e.GetOffTheRails(40),
      9771,
      [Tag.Lore],
      [p.Dan],
      DanImages.FortniteDan1
    ),
    new Moment(
      '"Its a little baby game"',
      e.GetH3TV(46),
      10100,
      [Tag.Lore],
      [p.Dan],
      DanImages.FortniteOverlayDan
    ),
    new Moment(
      "Dan Hates Drake",
      e.GetH3TV(40),
      9689,
      [Tag.Lore],
      [p.Dan],
      DanImages.DrakeDan
    ),
    new Moment(
      "Dan hates the DPI Guy",
      e.GetAfterDark(92),
      9045,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIHateDan
    ),
    new Moment(
      "Dan Hates Jimmie Lee",
      e.GetH3TV(45),
      2042,
      [Tag.Lore],
      [p.Dan],
      DanImages.JimmieLeeDan
    ),
    new Moment(
      "Dan REALLY hates jimmie",
      e.GetAfterDark(79),
      7969,
      [Tag.Lore],
      [p.Dan],
      DanImages.JimmieLeeDan1
    ),
    new Moment(
      "Dan still hates Jimmie",
      e.GetH3TV(47),
      4890,
      [Tag.Lore],
      [p.Dan],
      DanImages.JimmieLeeDan2
    ),
  ]),
  new CrewPageSection("Dan and the scorpion chair", [
    new Moment(
      "Dan wants a new setup",
      e.GetAfterDark(35),
      4220,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScorpionChairDan1
    ),
    new Moment(
      "so many chairs to choose!",
      e.GetOffTheRails(6),
      738,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScorpionChairDan2
    ),
    new Moment(
      "Mad Max? Gatling Chair?",
      e.GetAfterDark(50),
      944,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScorpionChairDan3
    ),
    new Moment(
      "The scorpion chair arrives",
      e.GetAfterDark(57),
      560,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScorpionChairDan4
    ),
    new Moment(
      "RIP to the scorpion chair",
      e.GetAfterDark(112),
      7154,
      [Tag.Lore],
      [p.Dan],
      DanImages.ScorpionChairDan
    ),
  ]),
  new CrewPageSection("Dan Hates The God Father", [
    new Moment(
      "Zach, No!",
      e.GetPodcast(233),
      5605,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan1
    ),
    new Moment(
      "A broken man",
      e.GetPodcast(241),
      684,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan2
    ),
    new Moment(
      '"we went over this!"',
      e.GetOffTheRails(5),
      4034,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan3
    ),
    new Moment(
      "Ethan gets the buzzer",
      e.GetH3TV(8),
      1109,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan4
    ),
    new Moment(
      "It's too early!!",
      e.GetAfterDark(50),
      443,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan5
    ),
    new Moment(
      '"Giovanni? Oh no..."',
      e.GetH3TV(9),
      8130,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan6
    ),
    new Moment(
      "Dan gets a good nap in",
      e.GetAfterDark(59),
      7375,
      [Tag.Lore],
      [p.Dan],
      DanImages.GodFatherDan7
    ),
  ]),
  new CrewPageSection("Dan the Stoner", [
    new Moment(
      "hot boxed in a tent!",
      e.GetAfterDark(89),
      1410,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotBoxDan
    ),
    new Moment(
      "Is Dan High #1",
      e.GetOffTheRails(15),
      3327,
      [Tag.Lore],
      [p.Dan],
      DanImages.HighDan1
    ),
    new Moment(
      "Is Dan High or Drunk?",
      e.GetOffTheRails(32),
      5413,
      [Tag.Lore],
      [p.Dan],
      DanImages.HighDan2
    ),
    new Moment(
      "Is Dan High #2",
      e.GetAfterDark(102),
      5866,
      [Tag.Lore],
      [p.Dan],
      DanImages.HighDan3
    ),
  ]),
  new CrewPageSection('Dan the "No" Man', [
    new Moment(
      "Saves Ethans Ad Read",
      e.GetAfterDark(75),
      3449,
      [Tag.Lore],
      [p.Dan],
      DanImages.AdReadDan
    ),
    new Moment(
      "Everyone Hates Ethan",
      e.GetOffTheRails(47),
      6729,
      [Tag.Lore],
      [p.Dan],
      DanImages.SavageDan
    ),
    new Moment(
      "Dan the crossing guard",
      e.GetH3TV(41),
      5504,
      [Tag.Lore],
      [p.Dan],
      DanImages.NoManDan1
    ),
  ]),
  new CrewPageSection("Dans Gonna Mayo up that dome!", [
    new Moment(
      "Dan says no",
      e.GetAfterDark(1),
      1706,
      [Tag.Lore],
      [p.Dan],
      DanImages.MayoDan1
    ),
    new Moment(
      "Dan agrees, with a caveat",
      e.GetAfterDark(2),
      2223,
      [Tag.Lore],
      [p.Dan],
      DanImages.MayoDan2
    ),
    new Moment(
      "The offer still stands",
      e.GetH3TV(53),
      9695,
      [Tag.Lore],
      [p.Dan],
      DanImages.MayoDan3
    ),
    new Moment(
      "the dome gets mayo'd",
      e.GetEpisodeByTitle(
        "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
      ),
      7771,
      [Tag.Lore],
      [p.Dan],
      DanImages.MayoDan
    ),
  ]),
  new CrewPageSection("Dan and the Hot Chip", [
    new Moment(
      "Dan won't do it",
      e.GetH3TV(51),
      82,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotChipDan1
    ),
    new Moment(
      '"I Aint eatin no chip!"',
      e.GetOffTheRails(53),
      5694,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotChipDan2
    ),
    new Moment(
      "succumbs to peer pressure",
      e.GetOffTheRails(53),
      6184,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotChipDan3
    ),
    new Moment(
      "Eating the chip",
      e.GetOffTheRails(54),
      3015,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotChipDan4
    ),
    new Moment(
      "Hot Chip Post-mortem",
      e.GetAfterDark(89),
      1283,
      [Tag.Lore],
      [p.Dan],
      DanImages.HotChipDan5
    ),
  ]),
  new CrewPageSection("Dans mouse CAN TALK?!", [
    new Moment(
      "Confusion sweeps the office",
      e.GetOffTheRails(32),
      9187,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIDan1
    ),
    new Moment(
      "Realizing its the mouse",
      e.GetAfterDark(90),
      6480,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIDan2
    ),
    new Moment(
      "We do a little trolling",
      e.GetH3TV(58),
      605,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIDan3
    ),
    new Moment(
      "Fans thirst for his mouse",
      e.GetH3TV(59),
      3578,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIDan4
    ),
    new Moment(
      "Dan hates it",
      e.GetAfterDark(92),
      9045,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIDan5
    ),
    new Moment(
      "the fans demand DPI",
      e.GetEpisodeByTitle(
        "We Got Each Other The Worst Holiday Gifts (Live Audience!) - H3 Podcast #263"
      ),
      4119,
      [Tag.Lore],
      [p.Dan],
      DanImages.DPIDan6
    ),
  ]),
];
