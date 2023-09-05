import { Moment } from "./Moment";
import * as e from "../Episodes/AllEpisodes";
import { Tag } from "../enums/Tag";
import { Episode } from "../Episode";
import { Person } from "../Person";

export const Moments = [
  new Moment("Watching Ringo's Peace and Love video", e.GetPodcast(205), 3640, [
    Tag.PeaceAndLove,
  ]),
  new Moment(
    "Ethan re-enacting Ringo's Peace and Love video",
    e.GetAfterDark(26),
    5586,
    [Tag.PeaceAndLove]
  ),
  new Moment("First Episode of Frenemies", e.GetFrenemies(1), 0, [
    Tag.Frenemies,
  ]),
  new Moment("First Wikifeet Segment", e.GetPodcast(181), 4455, [
    Tag.WikiFeet,
    Tag["Foot Soldiers"],
  ]),
  new Moment("Ethan is banned from Wikifeet", e.GetAfterDark(37), 882, [
    Tag.WikiFeet,
    Tag["Foot Soldiers"],
  ]),
  new Moment(
    "Ethan Reaches 7.42 rating on Wikifeet",
    e.GetAfterDark(37),
    1349,
    [Tag.WikiFeet, Tag["Foot Soldiers"]]
  ),
  new Moment(
    "Watching video of Vin Diesel Look-Alikes",
    e.GetAfterDark(60),
    3474,
    [Tag.FAMILY]
  ),
  new Moment(
    "Show starts with crew shouting FAMILY FAMILY FAMILY",
    e.GetAfterDark(61),
    0,
    [Tag.FAMILY]
  ),
  new Moment("First time watching Uncle Gabe", e.GetAfterDark(28), 6092, [
    Tag["Uncle Gabe"],
    Tag["White Claw Gabe"],
  ]),
  new Moment("First time Uncle Gabe calls in", e.GetAfterDark(35), 5685, [
    Tag["Uncle Gabe"],
    Tag["White Claw Gabe"],
  ]),
  new Moment("First weekly Uncle Gabe segment", e.GetAfterDark(38), 402, [
    Tag["Uncle Gabe"],
    Tag["White Claw Gabe"],
  ]),
  new Moment("Channel hits 3,000,036", e.GetAfterDark(66), 10191, [
    Tag["H2.9"],
  ]),
  new Moment("H2.9 is born", e.GetH3TV(38), Tag["H2.9"]),
  new Moment(
    "Ethan and Hila video about Jimmie Lee",
    e.getEpisodeByTitle("ONE FRICKED UP DENTIST")!,
    0,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("Jimmie Lee's first time on the podcast", e.GetPodcast(20), 0, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Jimmie Lee sends wayyy too many emails",
    e.GetPodcast(131),
    5748,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment(
    "Ethan thinks the Jimmie Lee episode was awful",
    e.GetPodcast(153),
    709,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment(
    "Gokanaru makes Jimmie Lee out to be a victim of Ethan",
    e.GetPodcast(192),
    4019,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment(
    "Jimmie Lee calls in to defend Ethan against Gokanaru",
    e.GetPodcast(192),
    5049,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("Jimme Lee second call in", e.GetPodcast(200), 6181, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Zach and Jimmie Lee's street adventure",
    e.GetOffTheRails(29),
    2442,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("Jimmie Lee's redemption set", e.GetOffTheRails(36), 5013, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Crew rewatches Jimmie Lee's street comedy videos",
    e.GetOffTheRails(38),
    7863,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("The crew tests Jimmie Lee's loyalty", e.GetAfterDark(75), 4801, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment("Jimme Lee's diner call in", e.GetOffTheRails(43), 3503, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Jimmie Lee and Ethan's dad in... The Elderlies",
    e.GetH3TV(45),
    1970,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("Jimmie Lee's meetup disaster", e.GetAfterDark(79), 7659, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment("Dan hate's Jimmie Lee", e.GetH3TV(47), 4867, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment("Arab World News vs. Jimmie Lee", e.GetH3TV(47), 5602, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Stavros gives Jimmie Lee standup advice",
    e.GetPodcast(262),
    4970,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("Jimmie Lee co-hosts the show", e.GetOffTheRails(65), 2486, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Jimmie Lee tomatoed at the Live Show",
    e.getEpisodeByTitle(
      "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
    )!,
    4950,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
  new Moment("Jimmie Lee Gets Plastic Surgery", e.GetH3TV(87), 3423, [
    Tag["Jimmie Lee"],
    Tag["The Jersey Outlaw"],
  ]),
  new Moment(
    "Jordan Peterson thinks Pride Month is TOO DAMN LONG",
    e.GetOffTheRails(41),
    7160,
    [Tag["Pride Minute"]]
  ),
  new Moment("First Pride Minute", e.GetOffTheRails(47), 7873, [
    Tag["Pride Minute"],
  ]),
  new Moment("Pride Minute #2", e.GetAfterDark(79), 8260, [
    Tag["Pride Minute"],
  ]),
  new Moment("Pride Minute #3", e.GetH3TV(48), 2548, [Tag["Pride Minute"]]),
  new Moment("Pride Minute #4 - For FouseyTube", e.GetAfterDark(81), 3340, [
    Tag["Pride Minute"],
  ]),
  new Moment(
    "Pride Minute #5 - YOU DONT GET TO CHOOSE!",
    e.GetOffTheRails(47),
    328,
    [Tag["Pride Minute"]]
  ),
  new Moment("Pride Minute #6", e.GetH3TV(50), 2836, [Tag["Pride Minute"]]),
  new Moment("Pride Minute #7 - With Keffals", e.GetAfterDark(83), 5401, [
    Tag["Pride Minute"],
  ]),
  new Moment(
    "Pride Minute #8 - TOO MANY PRIDE MINUTES!",
    e.GetAfterDark(84),
    6259,
    [Tag["Pride Minute"]]
  ),
  new Moment("Pride Minute #9 - With Yung Gravy", e.GetOffTheRails(49), 9984, [
    Tag["Pride Minute"],
  ]),
  new Moment("The Manly Minute", e.GetOffTheRails(50), 6456, [
    Tag["Pride Minute"],
  ]),
  new Moment("The Pride Minute Trading Card", e.GetH3TV(57), 2297, [
    Tag["Pride Minute"],
  ]),
  new Moment(
    "Pride Minute #10 - For Steven Crowder",
    e.GetAfterDark(93),
    2755,
    [Tag["Pride Minute"]]
  ),
  new Moment(
    "First discussion about Ethan's hairline",
    e.GetPodcast(17),
    2497,
    [Tag["Hairline King"]]
  ),
  new Moment(
    "AI says Ethan's hairline is his only redeeming quality",
    e.GetPodcast(173),
    3042,
    [Tag["Hairline King"]]
  ),
  new Moment("The Hairline King is Born", e.GetAfterDark(49), 7116, [
    Tag["Hairline King"],
  ]),
  new Moment("Ethan's Enemies are balding", e.GetH3TV(34), 5299, [
    Tag["Hairline King"],
  ]),
  new Moment(
    "Ethan is absorbing the hairlines of his enemies",
    e.GetLeftovers(13),
    101,
    [Tag["Hairline King"]]
  ),
  new Moment(
    "Is Ethan's hairline starting to receed?",
    e.GetOffTheRails(46),
    512,
    [Tag["Hairline King"]]
  ),
  new Moment(
    "David Portnoy gives a hairline review",
    e.GetAfterDark(80),
    3306,
    [Tag["Hairline King"]]
  ),
  new Moment("Ethan damages his hairline!", e.GetAfterDark(83), 2626, [
    Tag["Hairline King"],
  ]),
  new Moment(
    "Brittany Broski reveals challenger for the hairline king",
    e.GetPodcast(249),
    176,
    [Tag["Hairline King"]]
  ),
  new Moment(
    "Ethan's ASS has more hair than Andrew Tate",
    e.GetAfterDark(93),
    4881,
    [Tag["Hairline King"]]
  ),
  new Moment(
    "Howie Mandel posts Prolapsed Anus to TikTok",
    e.GetH3TV(42),
    323,
    [Tag.Prolapse]
  ),
  new Moment(
    "Discussing Howie's prolapse with Whitney Cummings",
    e.GetPodcast(253),
    7935,
    [Tag.Prolapse]
  ),
  new Moment(
    "Discusing Howie's prolapse with Tim Dillon",
    e.GetPodcast(256),
    1724,
    [Tag.Prolapse]
  ),
  new Moment(
    "Discussing Howie's prolapse with Pokimane",
    e.GetAfterDark(82),
    3434,
    [Tag.Prolapse]
  ),
  new Moment(
    "Discussing Howie's prolapse with Yung Gravy",
    e.GetOffTheRails(49),
    5666,
    [Tag.Prolapse]
  ),
  new Moment(
    "Discussing Howie's prolapse with Kurtis Conner",
    e.GetPodcast(257),
    3344,
    [Tag.Prolapse]
  ),
  new Moment(
    "Discussing Howie's prolapse with Bradley Martyn",
    e.GetPodcast(260),
    8483,
    [Tag.Prolapse]
  ),
  new Moment("Howie watches the prolapse LIVE", e.GetPodcast(259), 3350, [
    Tag.Prolapse,
  ]),
  new Moment(
    "Zach forced to watch the prolapse on silent library",
    e.getEpisodeByTitle("We Play Silent Library 2 And Regret It")!,
    4444,
    [Tag.Prolapse]
  ),
  new Moment(
    "Brittany Broski & Hila watch the Prolapse",
    e.GetPodcast(261),
    2617,
    [Tag.Prolapse]
  ),
  new Moment("Stavros Halkias watches the prolapse", e.GetPodcast(262), 3604, [
    Tag.Prolapse,
  ]),
  new Moment(
    "Ethan's friend Sean watches the prolapse",
    e.getEpisodeByTitle(
      "Ethan Klein shows Sean his prolapse video - See You Next Tuesday #13"
    )!,
    0,
    [Tag.Prolapse]
  ),
  new Moment(
    "Ethan shows prolapse to the audience LIVE AT THE ACE THEATER!",
    e.getEpisodeByTitle(
      "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
    )!,
    4013,
    [Tag.Prolapse]
  ),
  new Moment("LoveBot is born!", e.GetOffTheRails(1), 0, [Tag.LoveBot]),
  new Moment("LoveBot VS. The Gatsby", e.GetOffTheRails(1), 3195, [
    Tag.LoveBot,
  ]),
  new Moment("AB brutally attacks LoveBot", e.GetH3TV(10), 8454, [Tag.LoveBot]),
  new Moment(
    "LoveBot at the Rage Room",
    e.getEpisodeByTitle("I'm so angry")!,
    434,
    [Tag.LoveBot]
  ),
  new Moment("Ethan Shifts into Harry Potter", e.GetOffTheRails(2), 0, [
    Tag.LoveBot,
  ]),
  new Moment("LoveBot is resurrected", e.GetAfterDark(82), 991, [Tag.LoveBot]),
  new Moment(
    "Ethan Joke's About Pirating the Jake Paul Triller Fight",
    e.GetPodcast(243),
    1462,
    [Tag.Triller]
  ),
  new Moment("Ethan watches Jake Paul Triller Fight", e.GetPodcast(244), 5357, [
    Tag.Triller,
  ]),
  new Moment("Triller Sues Ethan", e.GetAfterDark(35), 484, [Tag.Triller]),
  new Moment("Triller Sues Hila", e.GetAfterDark(45), 647, [Tag.Triller]),
  new Moment(
    "Third lawsuit with Ryan Kavanaugh/Triller",
    e.GetOffTheRails(21),
    0,
    [Tag.Triller]
  ),
  new Moment("First time Dan's mouse plays", e.GetOffTheRails(32), 9185, [
    Tag["Dans Mouse"],
  ]),
  new Moment("Dan's hot mouse is discovered!", e.GetAfterDark(90), 6478, [
    Tag["Dans Mouse"],
  ]),
  new Moment(
    "Ethan sounds like Dans mouse",
    e.getEpisodeByTitle(
      "Ethan finds his new calling as the DPI guy !!! | H3 Members Livestream"
    )!,
    0,
    [Tag["Dans Mouse"]]
  ),
  new Moment(
    "Crew reacts to Ethan sounding like Dans mouse",
    e.GetH3TV(62),
    3087,
    [Tag["Dans Mouse"]]
  ),
  new Moment(
    "Trisha complains about Ethan taking 5% for production costs",
    e.GetFrenemies(39),
    5569,
    [Tag["Five Percent"], Tag["5%"]]
  ),
  new Moment(
    "Trisha's sister posts video about Frenemies ending",
    e.GetAfterDark(41),
    2281,
    [Tag["Five Percent"], Tag["5%"]]
  ),
  new Moment(
    "First soundbite drop - Joe Rogan - 5% is everything!",
    e.GetAfterDark(42),
    9070,
    [Tag["Five Percent"], Tag["5%"]]
  ),
  new Moment("Dan wants a new chair! (2021)", e.GetAfterDark(35), 4216, [
    Tag["Scorpion Chair"],
  ]),
  new Moment(
    "Crew discusses potential chairs for Dan (2021)",
    e.GetOffTheRails(6),
    924,
    [Tag["Scorpion Chair"]]
  ),
  new Moment("The Scorpion chair arrives", e.GetAfterDark(57), 218, [
    Tag["Scorpion Chair"],
  ]),
  new Moment("Jidion's Best Buy pranks", e.GetH3TV(42), 1598, [Tag.WAN]),
  new Moment("Jidion responds to Ethan about his pranks", e.GetH3TV(47), 1218, [
    Tag.WAN,
  ]),
  new Moment(
    "Jidion Calls in about visiting the most racist town in America",
    e.GetOffTheRails(46),
    3315,
    [Tag.WAN]
  ),
  new Moment("FLOCKA", e.GetH3TV(48), 80, [Tag.FLOCKA]),
  new Moment("Ethan's 40th birthday", e.GetAfterDark(75), 3635, [
    Tag.Birthday,
    Tag["Ethans Birthday"],
  ]),
  new Moment("Ethan's 42nd birthday", e.GetPodcast(257), 1940, [
    Tag.Birthday,
    Tag["Ethans Birthday"],
  ]),
  new Moment(
    "Ethan's audience was majority male (2019)",
    e.GetPodcast(121),
    2721,
    [Tag["Female Audience"]]
  ),
  new Moment(
    "Podcast audience is majority female (2022)",
    e.GetH3TV(53),
    6817,
    [Tag["Female Audience"]]
  ),
  new Moment("Shoutout to his family!", e.GetAfterDark(20), 10309, [
    Tag["Shoutout to his family"],
  ]),
  new Moment(
    "And the winner of the first soundbite tournament is... !",
    e.GetAfterDark(30),
    13848,
    [Tag["Shoutout to his family"]]
  ),
  new Moment(
    "Ethan asks Jimmie Lee why he cut audio audio audio",
    e.GetH3TV(32),
    7957,
    [Tag["Jimmie Lee"], Tag["The Jersey Outlaw"]]
  ),
];

export function GetMomentsByPerson(person: Person) {
  return Moments.filter((x) => x.people.includes(person));
}

export function GetMomentsByEpisode(episode: Episode) {
  return Moments.filter((x) => x.episode == episode);
}

export function GetMomentsByTitle(title: string) {
  return Moments.filter((x) => x.title.includes(title));
}

export function GetMomentsByTag(tag: Tag): Moment[] {
  return Moments.filter((x) => x.tags.includes(tag));
}
