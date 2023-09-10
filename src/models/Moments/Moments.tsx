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
    e.GetEpisodeByTitle("ONE FRICKED UP DENTIST")!,
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
    e.GetEpisodeByTitle(
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
  new Moment("Steamy's #1 with Trisha", e.GetFrenemies(15), 0, [Tag.Steamys]),
  new Moment(
    "Steamy's #2 with Def Noodles",
    e.GetEpisodeByTitle("Surprise Reunion For 2nd Annual Steamies")!,
    0,
    [Tag.Steamys]
  ),
  new Moment(
    "Steamy's #3 with Jeff and Tana",
    e.GetEpisodeByTitle("The Steamy Awards (Ft. Jeff Wittek & Tana Mongeau)")!,
    0,
    [Tag.Steamys]
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
    e.GetEpisodeByTitle("We Play Silent Library 2 And Regret It")!,
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
    e.GetEpisodeByTitle(
      "Ethan Klein shows Sean his prolapse video - See You Next Tuesday #13"
    )!,
    0,
    [Tag.Prolapse]
  ),
  new Moment(
    "Ethan shows the prolapse LIVE",
    e.GetEpisodeByTitle(
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
    e.GetEpisodeByTitle("I'm so angry")!,
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
    e.GetEpisodeByTitle(
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
  new Moment(
    "Interview with AB's Boxing Coach",
    e.GetEpisodeByTitle(
      "AB's Coach Luckyboy In Studio, Gross Food Challenge, Keemstar & Tim Pool - Off The Rails #33"
    ),
    1,
    [Tag["AB Boxing Matches"]]
  ),
  new Moment(
    "The crew watching AB vs. Hundar",
    e.GetEpisodeByTitle("H3 Crew Reacts to AB vs Hundar | Full Fight"),
    0,
    [Tag["AB Boxing Matches"]]
  ),
  new Moment(
    "Creator Clas Debiref With Hundar",
    e.GetEpisodeByTitle(
      "AB's Creator Clash Fight Debrief, Johnny Depp & Amber Heard Trial - H3TV #36"
    ),
    225,
    [Tag["AB Boxing Matches"]]
  ),
  new Moment(
    "AB's second fight announced",
    e.GetEpisodeByTitle(
      "We Break 9 Different Guinness World Records & Creator Clash Announced RIP AB - Off The Rails #58"
    ),
    9281,
    [Tag["AB Boxing Matches"]]
  ),
  new Moment(
    "The crew watching AB vs. Dad",
    e.GetEpisodeByTitle(
      "The H3 crew reacts to DAD vs AB members live (AB rib injury)"
    ),
    0,
    [Tag["AB Boxing Matches"]]
  ),
  new Moment(
    "AB recounts fight with Dad",
    e.GetEpisodeByTitle("About AB's Fight At Creator Clash... - H3TV #73"),
    0,
    [Tag["AB Boxing Matches"]]
  ),
  new Moment(
    "All of these are a segment",
    e.GetEpisodeByTitle("H3 After Dark - #15"),
    631,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Ian suggesting Mayo Joker",
    e.GetEpisodeByTitle("H3 After Dark - #15"),
    743,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "The first mention of Zach's Joker Brain",
    e.GetEpisodeByTitle("H3 After Dark - #15"),
    962,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Selling Joker Shirt",
    e.GetEpisodeByTitle(
      "Papa John Ate 40 Pizzas In 30 Days & Is Going Insane - H3 Podcast #161"
    ),
    602,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Zach wears a joker mask",
    e.GetEpisodeByTitle(
      "It Keeps Getting Worse For David Dobrik - H3 After Dark #25"
    ),
    8325,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Zach dresses up as Joker for Halloween",
    e.GetEpisodeByTitle("I'm Retiring - After Dark #56"),
    226,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Zach's Joker Brain NFT",
    e.GetEpisodeByTitle("I’m Selling Vape Nation - H3 Podcast #239"),
    3956,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Zach take's a teensy weensy bite from the hot chip.",
    e.GetEpisodeByTitle("Spicy Food Competition - H3TV #51"),
    3531,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Lena eats the entire hot chip with ease",
    e.GetEpisodeByTitle("Spicy Food Competition - H3TV #51"),
    4570,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "First mention of Lena as the true Joker brain",
    e.GetEpisodeByTitle("We messed up - After Dark #84"),
    4667,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "Zach is Joker again...",
    e.GetEpisodeByTitle("Ethan Becomes An Alpha - H3TV #52"),
    237,
    [Tag["Joker Brain"]]
  ),
  new Moment(
    "AB shows off his burrito",
    e.GetEpisodeByTitle(
      "Fresh & Fit Cringe, M&M Controversy, Metaverse Fail - H3TV #22"
    ),
    2599,
    [Tag["ABs Burrito"]]
  ),
  new Moment(
    "AB... That's wasn't a burrito!",
    e.GetEpisodeByTitle(
      "Kanye vs Pete Davidson, Wendy Williams, Euphoria - After Dark #65"
    ),
    2958,
    [Tag["ABs Burrito"]]
  ),
  new Moment(
    "ABs burrito makes an appearance during Creator Clash!",
    e.GetEpisodeByTitle(
      "AB's Creator Clash Fight Debrief, Johnny Depp & Amber Heard Trial - H3TV #36"
    ),
    3188,
    [Tag["ABs Burrito"]]
  ),
  new Moment(
    "First time watching P&P videos",
    e.GetEpisodeByTitle(
      "Crazy Myths We Believed As Kids, Fresh & Fit Cringe - After Dark #71"
    ),
    4914,
    [Tag["P & P"]]
  ),
  new Moment(
    "P&P calls into the show",
    e.GetEpisodeByTitle(
      "TikTok Lawyer Calls In, Fresh & Fit Are Panicking, New Kendrick Lamar Album - After Dark #72"
    ),
    3375,
    [Tag["P & P"]]
  ),
  new Moment(
    "P&P at the live show!",
    e.GetEpisodeByTitle(
      "We Got Each Other The Worst Holiday Gifts (Live Audience!) - H3 Podcast #263"
    ),
    5741,
    [Tag["P & P"]]
  ),
  new Moment(
    "First Godfather impression",
    e.GetEpisodeByTitle(
      "H3 Podcast #86 - Shane Dawson vs Jake Paul & Drake + Millie Bobby Brown"
    ),
    452,
    [Tag["Godfather Impression"]]
  ),
  new Moment(
    "Music is added to Godfather impression",
    e.GetEpisodeByTitle(
      "Corpse Husband, Psycho Twitch Streamers, Joe Rogan Is Tiny Joker - H3 Podcast #233"
    ),
    5604,
    [Tag["Godfather Impression"]]
  ),
  new Moment(
    "New song and desk are added to Godfather Impression",
    e.GetEpisodeByTitle("Will Smith, Chris Rock & Academy Awards - H3TV #29"),
    9432,
    [Tag["Godfather Impression"]]
  ),
  new Moment(
    "First time soundbites are used during Godfather segment",
    e.GetEpisodeByTitle("We Went To ACE Fest... WOW - H3TV #42"),
    2406,
    [Tag["Godfather Impression"]]
  ),
  new Moment(
    "Jeff Wittek & Mike Majlak do the Godfather impression",
    e.GetEpisodeByTitle(
      "Jeff Wittek, Tana Mongeau, Mike Majlak - H3 Podcast #254"
    ),
    1532,
    [Tag["Godfather Impression"]]
  ),
  new Moment(
    "Watching the weights in fish video",
    e.GetEpisodeByTitle(
      "Cheaters Tier List & Dream Face Reveal - Off The Rails #51"
    ),
    9592,
    [Tag["Weights in Fish"]]
  ),
  new Moment(
    "Mr. Beast Bars gets ZONK'D",
    e.GetEpisodeByTitle(
      "David Dobrik Exposed By Casey Neistat Documentary - H3TV #27"
    ),
    6500,
    [Tag["Zilly Zonka"]]
  ),
  new Moment("P(ump) A(nd) D(ump) Coin", e.GetAfterDark(79), 6286, [
    Tag["Zilly Zonka"],
  ]),
  new Moment(
    "The 20 billion dollar compound!",
    e.GetEpisodeByTitle("WE'RE BACK! - Leftovers #12"),
    13,
    [Tag["20 Billion Dollar Compound"]]
  ),
  new Moment(
    "Diet Coke is... Good for you?!",
    e.GetEpisodeByTitle(
      "A New Low For Family Channels, Cart Narcs Calls In, The LaBrant Family - H3TV #40"
    ),
    7540,
    [Tag["Dr. Idz"]]
  ),
  new Moment(
    "Dr. Idz Call In #1",
    e.GetEpisodeByTitle("We Got Another Strike - Off The Rails #44"),
    4165,
    [Tag["Dr. Idz"]]
  ),
  new Moment(
    "Dr. Idz Call-In #2 - Is it okay to drink Pee?",
    e.GetEpisodeByTitle("Sound The Warhorns - BFFs Is Over - H3TV #46"),
    6873,
    [Tag["Dr. Idz"]]
  ),
  new Moment(
    "Ethan and Love reveal their PSA about Ryan Kavanaugh",
    e.GetEpisodeByTitle(
      "https://doesryankavanaughlooklikeharveyweinstein.com/"
    ),
    0,
    [Tag["RyanHarvey.com"]]
  ),
  new Moment(
    "Zachs alter ego, Loue",
    e.GetEpisodeByTitle("Dan Quit The Show - Off The Rails #53"),
    1231,
    [Tag["Lou"]]
  ),
  new Moment(
    "Lou, is that you?!",
    e.GetEpisodeByTitle(
      "Curing 1,000 People of Their Tourette's - Off The Rails #61"
    ),
    128,
    [Tag["Lou"]]
  ),
  new Moment(
    "Ethan goes to the streamies",
    e.GetEpisodeByTitle("I Sent An Impersonator To The Streamys - H3TV #60"),
    5537,
    [Tag["Ethan Body Double"]]
  ),
  new Moment(
    "Ethans body double at the Live show",
    e.GetEpisodeByTitle(
      "We Got Each Other The Worst Holiday Gifts (Live Audience!) - H3 Podcast #263"
    ),
    5395,
    [Tag["Ethan Body Double"]]
  ),
  new Moment(
    "Ethan will send his body double to hike with Philly D",
    e.GetEpisodeByTitle(
      "Nikocado Calls Out Ethan, Elon Gets Booed At Chapelle Show - H3TV #61"
    ),
    5782,
    [Tag["Ethan Body Double"]]
  ),
  new Moment(
    "Ryan Kavanaugh is going to war with Wikipedia mods",
    e.GetEpisodeByTitle("Keemstar vs The Quartering 🍿 - H3TV #17"),
    927,
    [Tag["Throast"]]
  ),
  new Moment(
    "Ryan Kavanaugh Vs. Throast",
    e.GetEpisodeByTitle(
      "We Need To Talk (VERY Urgent and VERY IMPORTANT!!!) - H3TV #19"
    ),
    10211,
    [Tag["Throast"]]
  ),
  new Moment(
    "KavKav puts a bounty out to find out Throats identity",
    e.GetEpisodeByTitle("The Wedding... -  H3TV #20"),
    10558,
    [Tag["Throast"]]
  ),
  new Moment(
    "Ryan Kavanaugh thinks Ethan is Throast",
    e.GetEpisodeByTitle("We're Back! -  H3TV #21"),
    4238,
    [Tag["Throast"]]
  ),
  new Moment(
    "Ethan defends Throast!",
    e.GetEpisodeByTitle(
      "The Real Reason Nikocado Avocado Cancelled - After Dark #64"
    ),
    9939,
    [Tag["Throast"]]
  ),
  new Moment(
    "The Saudi Benefactors first donations",
    e.GetEpisodeByTitle(
      "The Debate Game, Interview With Water Sommelier - H3TV #39"
    ),
    8494,
    [Tag["Saudi Benefactor"]]
  ),
  new Moment(
    "Saudi Benefactor joke origin",
    e.GetEpisodeByTitle("The Crew Is Splitting Up - Off The Rails #39"),
    2550,
    [Tag["Saudi Benefactor"]]
  ),
  new Moment(
    "Saudi Benefactor gifts 2,500",
    e.GetEpisodeByTitle(
      "Love Was Arrested, Alex Jones Loses Big, Kitboga Calls In - Off The Rails #45"
    ),
    9324,
    [Tag["Saudi Benefactor"]]
  ),
  new Moment(
    "Saudi Benefactor sends an image to the crew",
    e.GetEpisodeByTitle(
      "Love Was Arrested, Alex Jones Loses Big, Kitboga Calls In - Off The Rails #45"
    ),
    9384,
    [Tag["Saudi Benefactor"]]
  ),
  new Moment(
    "The Saudi Benefactor returns after a long hiadus!",
    e.GetEpisodeByTitle("The 2022 Sound Bite Tournament - After Dark #92"),
    1920,
    [Tag["Saudi Benefactor"]]
  ),
  new Moment(
    "Chestnut's soundbite origin",
    e.GetEpisodeByTitle(
      "We Break 9 Different Guinness World Records & Creator Clash Announced RIP AB - Off The Rails #58"
    ),
    6446,
    [Tag["Chestnut Gate"]]
  ),
  new Moment(
    "Ethan plays chestnuts over QTCinderella video",
    e.GetEpisodeByTitle("Rebecca Black - H3 Podcast #264"),
    10698,
    [Tag["Chestnut Gate"]]
  ),
  new Moment(
    "R Kelly Passports orogin",
    e.GetEpisodeByTitle(
      "Leaving Neverland & R. Kelly Breakdown - H3 Podcast #107"
    ),
    3550,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Ethan sings the R Kelly Passports song",
    e.GetEpisodeByTitle("We're In YouTube Rewind - H3 Podcast #164"),
    6123,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Marc Rebillet remixing R Kelly passports song",
    e.GetEpisodeByTitle("Marc Rebillet Live! - H3 Podcast #191"),
    3037,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Showing R Kelly passports song to Trisha",
    e.GetEpisodeByTitle(
      "David Dobrik’s Lawyers Go After Trisha & Cooking Competition - Frenemies #25"
    ),
    394,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "R Kelly passports song used in musical chairs",
    e.GetEpisodeByTitle("Kim Kardashian Threatened Me - Off The Rails #14"),
    5344,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Selling an R Kelly passports shirt",
    e.GetEpisodeByTitle("I'm Cancelled - H3TV #13"),
    1033,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Choir and barbershop quartet sing R Kelly passport",
    e.GetEpisodeByTitle(
      "The Real Reason Nikocado Avocado Cancelled - After Dark #64"
    ),
    0,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Viewer calls in and sings R Kelly passport song",
    e.GetEpisodeByTitle("Jordan Peterson, Kanye West, Island Boys - H3TV #12"),
    4468,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Anthony Fantano rates R Kelly's passport song",
    e.GetEpisodeByTitle("Anthony Fantano - H3 Podcast #263"),
    5449,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "Seeing R Kelly passports LIVE!",
    e.GetEpisodeByTitle(
      "We Got Each Other The Worst Holiday Gifts (Live Audience!) - H3 Podcast #263"
    ),
    3950,
    [Tag["R Kelly Passport Song"]]
  ),
  new Moment(
    "The Fire Festival Fiasco",
    e.GetEpisodeByTitle(
      "A Lot Happened While We Were Gone... - H3 Podcast #102"
    ),
    4508,
    [Tag["Thats Not Fraud"]]
  ),
  new Moment(
    "Thats FRAUD Origin",
    e.GetEpisodeByTitle("Finally Releasing The DMs - Off The Rails #11"),
    2505,
    [Tag["Thats Not Fraud"]]
  ),
  new Moment(
    "THE CHEW ZONE Origin",
    e.GetEpisodeByTitle("R. Kelly, Keemstar, My Mom Exposed - H3TV #9"),
    8847,
    [Tag["The Chew Zone"]]
  ),
  new Moment(
    "THE FIKA ZONE",
    e.GetEpisodeByTitle(
      "Our Son Is Born!! & Valentines Day Couples Game - H3TV #23"
    ),
    1058,
    [Tag["The Chew Zone"]]
  ),
  new Moment(
    "Apology Podium origin",
    e.GetEpisodeByTitle(
      "Olivia Jade, PewDiePie & Trisha Paytas - H3 Podcast #163"
    ),
    1526,
    [Tag["Apology Podium"]]
  ),
  new Moment(
    "Dan explains the purpose of the apology podium",
    e.GetEpisodeByTitle("I Got Cancelled Again AGAIN - Off The Rails #31"),
    2595,
    [Tag["Apology Podium"]]
  ),
  new Moment(
    "Apology Podium #2",
    e.GetEpisodeByTitle(
      "Olivia Jade, PewDiePie & Trisha Paytas - H3 Podcast #163"
    ),
    1616,
    [Tag["Apology Podium"]]
  ),
  new Moment(
    "When did this turn into beautiful world origin",
    e.GetEpisodeByTitle(
      "H3 Podcast #21 - Was Joey Salads at the Rally? & Elon vs. Zuckerberg (Top Of The Week)"
    ),
    1319,
    [Tag["Beautiful World"]]
  ),
  new Moment(
    "Zach LOVES Horsey sauce a little too much...",
    e.GetEpisodeByTitle(
      "Arby's Taste Test Nightmare & Spider-Man Fired From MCU - H3 Podcast #137"
    ),
    1117,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Watching the world record mayo eater",
    e.GetEpisodeByTitle(
      "ProJared Finally Responds & Dave Chappelle Is Cancelled - H3 Podcast #139"
    ),
    769,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Zach's partakes in the mayo challenge",
    e.GetEpisodeByTitle(
      "ProJared Finally Responds & Dave Chappelle Is Cancelled - H3 Podcast #139"
    ),
    6782,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Zach gets a Mayo cake for his birthday",
    e.GetEpisodeByTitle("Hila Becomes An American Citizen - H3 Podcast #144"),
    1499,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Ian Eats a Jar of Mayo for Sam!",
    e.GetEpisodeByTitle(
      "Ninja Texting Scam & PewDiePie Banned In China - H3 Podcast #151"
    ),
    3577,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Couple Eats Mayo at Hockey Game",
    e.GetEpisodeByTitle(
      "Belle Delphine Shocks Us & Trisha Paytas' Fake Wedding- H3 Podcast #155"
    ),
    4559,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Shoenice eats 20oz of Mayo in less than a minute",
    e.GetEpisodeByTitle(
      "Shoenice Turns On Ethan & Elon Trolls The World - H3 Podcast #160"
    ),
    921,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Eating mayo during the first try not to laugh",
    e.GetEpisodeByTitle(
      "Try Not To Laugh Challenge With Dire Consequences - H3 Podcast #162"
    ),
    169,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Big Eds Mayo Hair Challenge",
    e.GetEpisodeByTitle("Gigi Hadid Bodyslams Jake Paul - H3 Podcast #178"),
    1671,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Zachs does the Mayo Hair Challenge",
    e.GetEpisodeByTitle("Big Ed Puts Mayo In Zach's Hair - H3 Podcast #180"),
    3048,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "First time Dan mentions he will mayo his dome",
    e.GetEpisodeByTitle("H3 After Dark - #1"),
    1706,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Dan says he'll mayo his dome if Ethan hits 200lbs",
    e.GetEpisodeByTitle("H3 After Dark - #2"),
    2223,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Dan's offer still stands - He WILL mayo that dome!",
    e.GetEpisodeByTitle("We Were Wrong About David Dobrik - H3TV #53"),
    9695,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "It finally happens, Dan mayo's up that dome!",
    e.GetEpisodeByTitle(
      "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
    ),
    7770,
    [Tag["Mayo Memes"]]
  ),
  new Moment(
    "Andrew Tate sends Ethan a cease and desist",
    e.GetEpisodeByTitle("Pokimane - After Dark #82"),
    1583,
    [Tag["Andrew Tate Cease and Desist"]]
  ),
  new Moment(
    "Brad the bull origin",
    e.GetEpisodeByTitle("We're Back! -  H3TV #21"),
    7231,
    [Tag["Brad the Bull"]]
  ),
  new Moment(
    "Ethan and crew speculate on Brad the Bull",
    e.GetEpisodeByTitle(
      "Why I Panicked & Deleted A Ton Of Videos - Afterdark #69"
    ),
    4284,
    [Tag["Brad the Bull"]]
  ),
  new Moment(
    "Ethan finally gets to meet Brad the Bull",
    e.GetEpisodeByTitle("Bryce Hall - H3 Podcast #268"),
    1290,
    [Tag["Brad the Bull"]]
  ),
  new Moment(
    "Craigsmas #1",
    e.GetEpisodeByTitle(
      "H3 After Dark (Defending Trisha From The Wicked David Portnoy) - #17"
    ),
    5773,
    [Tag["Craigsmas"]]
  ),
  new Moment(
    "Craigsmas #2",
    e.GetEpisodeByTitle(
      "The Real Reason Nikocado Avocado Cancelled - After Dark #64"
    ),
    5188,
    [Tag["Craigsmas"]]
  ),
  new Moment(
    "Craigsmas #3 - At the live show",
    e.GetEpisodeByTitle(
      "We Got Each Other The Worst Holiday Gifts (Live Audience!) - H3 Podcast #263"
    ),
    1625,
    [Tag["Craigsmas"]]
  ),
  new Moment(
    "First content court",
    e.GetEpisodeByTitle("NELK Is A Menace To Society - Content Court"),
    0,
    [Tag["Content Court"]]
  ),
  new Moment(
    "The Quartering pee's in his basement",
    e.GetEpisodeByTitle("Content Court: TheQuartering"),
    3374,
    [Tag["I Just Peed in my Basement"]]
  ),
  new Moment(
    "The Quarterings wife goes out for pizza without him",
    e.GetEpisodeByTitle("Content Court: TheQuartering"),
    3308,
    [Tag["I Just Peed in my Basement"]]
  ),
  new Moment(
    "The Quartering shits himself",
    e.GetEpisodeByTitle(
      "Shane Dawson Is 100% Canceled After This - After Dark #54"
    ),
    6638,
    [Tag["I Just Peed in my Basement"]]
  ),
  new Moment(
    "Dink Doink is my favorite coin",
    e.GetEpisodeByTitle("im sorry hila - Off The Rails #5"),
    3474,
    [Tag["Dink Doink"]]
  ),
  new Moment(
    "Donna giving butterfly facts",
    e.GetEpisodeByTitle(
      "James Charles IS GOING TO JAIL! says my mom - Families #5"
    ),
    6277,
    [Tag["Donnarchs"]]
  ),
  new Moment(
    "Donna's fans become known as Donnarchs ",
    e.GetEpisodeByTitle("Addressing The Controversy - Families #8"),
    1081,
    [Tag["Donnarchs"]]
  ),
  new Moment(
    "Ryan Kavanaugh Makes a website to get Ethan banned",
    e.GetEpisodeByTitle("I Lost My Lawsuit - Off The Rails #59"),
    1676,
    [Tag["thebanofethanklein.com"]]
  ),
  new Moment(
    "Arab World News first appearance",
    e.GetEpisodeByTitle(
      "Andrew Tate & Fresh & Fit Want To Debate Us - Leftovers #20"
    ),
    3912,
    [Tag["Arab World News"]]
  ),
  new Moment(
    "Arab World News VS. Jimmie Lee",
    e.GetEpisodeByTitle(
      "Andrew Tate Nelk Podcast Disaster, Ethan's Dad Meets Jimmie Lee - H3TV #45"
    ),
    3756,
    [Tag["Arab World News"]]
  ),
  new Moment(
    "Jimmie Lee responds to his beef with Arab World News",
    e.GetEpisodeByTitle(
      "It's Time For War... I've Never Been So Offended - H3TV #47"
    ),
    5604,
    [Tag["Arab World News"]]
  ),
  new Moment(
    "Crew first revealing AI Ian is being built",
    e.GetEpisodeByTitle(
      "Coronavirus Is Worse Than You Think - H3 Podcast #171"
    ),
    4402,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "First Appearance of AI Ian",
    e.GetEpisodeByTitle(
      "Bella Thorne, Elon Musk, Ian PowerPoint - H3 Podcast #212"
    ),
    5411,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "AI Ian on content court",
    e.GetEpisodeByTitle("Content Court: Prince Family"),
    0,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "AI Ian Gets a Pet",
    e.GetEpisodeByTitle("H3 After Dark - #4"),
    3866,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "AI Ian in the Matrix",
    e.GetEpisodeByTitle("H3 After Dark - #6"),
    7726,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "AI Ian has trapped real Ian in the downside up",
    e.GetEpisodeByTitle("H3 After Dark - #7"),
    599,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "AI Ian is the imposter for Halloween",
    e.GetEpisodeByTitle("H3 After Dark - #10"),
    305,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "Ian's first episode after AI Ian",
    e.GetEpisodeByTitle("H3 After Dark - #12"),
    6219,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "AI Ian reappears!",
    e.GetEpisodeByTitle(
      "David Dobrik Is A Bully & Gorilla Glue Gone Wrong - H3 After Dark #22"
    ),
    698,
    [Tag["AI Ian"]]
  ),
  new Moment(
    "EthansFeet.com - Big debut!",
    e.GetEpisodeByTitle("And The Number Of Babies Is... - H3 After Dark #40"),
    1678,
    [Tag["EthansFeet.com"]]
  ),
  new Moment(
    "Ethan and Hasan eat bull penis with Liverking",
    e.GetEpisodeByTitle("LIVER KING IS HERE! - Leftovers #26"),
    2613,
    [Tag["Bull Penis Staff"]]
  ),
  new Moment(
    "Dan gets the bull penis staff as a gift",
    e.GetEpisodeByTitle(
      "We Got Each Other The Worst Holiday Gifts (Live Audience!) - H3 Podcast #263"
    ),
    5111,
    [Tag["Bull Penis Staff"]]
  ),
  new Moment(
    "The origin of Nathaniel Klansman",
    e.GetEpisodeByTitle(
      "Love Was Arrested, Alex Jones Loses Big, Kitboga Calls In - Off The Rails #45"
    ),
    9092,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Nathaniel Klansman discusses politics with Hasan",
    e.GetEpisodeByTitle(
      "How To Own Your MAGA Family This Christmas - Leftovers #35"
    ),
    4535,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Nathaniel Klansman has a dark secret...",
    e.GetEpisodeByTitle(
      "Love Was Arrested, Alex Jones Loses Big, Kitboga Calls In - Off The Rails #45"
    ),
    9092,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Dark Nathaniel's comes clean about Jeremiah",
    e.GetEpisodeByTitle("Ethan Trains With An Accent Coach - After Dark #104"),
    5344,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Dark Nathaniel's sister",
    e.GetEpisodeByTitle(
      "Olivia Explains Taylor Swift's BF Drama, King Charles' Sausage Fingers, MrBeast - H3TV #76"
    ),
    1595,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Dark Nathaniel AI Images",
    e.GetEpisodeByTitle("Update About My Marriage - H3TV #77"),
    5215,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Dark Nathaniel Rejects his intrusive thoughts",
    e.GetEpisodeByTitle(
      "I'm Meeting Ryan Kavanaugh Tomorrow, FaZe Rain Declares War On The H3 Podcast - H3TV #79"
    ),
    4490,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Dark Nathaniel cums to Hurricane Katrina",
    e.GetEpisodeByTitle(
      "New Alien Footage Turns Ethan Into A Believer, Donald Trump Is Going To Jail - After Dark #109"
    ),
    4209,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Dark Nathaniel doesn't like fellers with dry earwax",
    e.GetEpisodeByTitle(
      "Ariana Grande Divorce Scandal PowerPoint - After Dark #113"
    ),
    2020,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Nathaniel Klansman: The First Body",
    e.GetEpisodeByTitle(
      "xQc Fallout, Howie Live Disaster, MrBeast Is Being Sued For $100 Million - Off The Rails #81"
    ),
    2100,
    [Tag["Nathaniel Klansman"]]
  ),
  new Moment(
    "Ethan's Feeding Window",
    e.GetEpisodeByTitle(
      "Ninja Texting Scam & PewDiePie Banned In China - H3 Podcast #151"
    ),
    153,
    [Tag["The Feeding Window"]]
  ),
  new Moment(
    "The feeding window is working!",
    e.GetEpisodeByTitle(
      "KSI Destroys Logan Paul & Mandalorian Review - H3 Podcast #157"
    ),
    555,
    [Tag["The Feeding Window"]]
  ),
  new Moment(
    "Someone left the feeding window open",
    e.GetEpisodeByTitle("The End Of An Era - H3 Podcast #169"),
    2229,
    [Tag["The Feeding Window"]]
  ),
  new Moment(
    "Ethan explains why the feeding window failed",
    e.GetEpisodeByTitle("H3 After Dark - #2"),
    1212,
    [Tag["The Feeding Window"]]
  ),
  new Moment(
    "Sam Seder is brought in to interview Steven Crowder ",
    e.GetEpisodeByTitle(
      "Ethan Klein Debates Steven Crowder (Ft. Sam Seder) - H3 Podcast #248"
    ),
    634,
    [Tag["Oh no! Sam Seder"]]
  ),
  new Moment(
    "First donation from the mole people",
    e.GetEpisodeByTitle("I've Got Terrible News - H3TV #43"),
    2264,
    [Tag["The Mole People"]]
  ),
  new Moment(
    "The mole people have decided to find and destroy your enemies, Martin",
    e.GetEpisodeByTitle("Our Channel May Be Deleted - H3TV #49"),
    5505,
    [Tag["The Mole People"]]
  ),
  new Moment(
    "If Dan quit we would invade the surface - The Mole People",
    e.GetEpisodeByTitle("Dan Quit The Show - Off The Rails #53"),
    9697,
    [Tag["The Mole People"]]
  ),
  new Moment(
    "We will be there with our drill lances - The Mole People",
    e.GetEpisodeByTitle("Hila Got Banned On Twitter - After Dark #90"),
    9113,
    [Tag["The Mole People"]]
  ),
  new Moment(
    "HungerFF shows Howie his prolapse",
    e.GetEpisodeByTitle("Howie Mandel - H3 Podcast #259"),
    3254,
    [Tag["HungerFF"]]
  ),
  new Moment(
    "Telling Stavros about HungerFF",
    e.GetEpisodeByTitle("Stavros Halkias - H3 Podcast #262"),
    3269,
    [Tag["HungerFF"]]
  ),
  new Moment(
    "HungerFF calls in about his fleshlight",
    e.GetEpisodeByTitle(
      "Making The Most Disgusting Fish In The World Delicious - Off The Rails #72"
    ),
    3090,
    [Tag["HungerFF"]]
  ),
  new Moment(
    "Ian's Jay Z powerpoint",
    e.GetEpisodeByTitle(
      "Bella Thorne, Elon Musk, Ian PowerPoint - H3 Podcast #212"
    ),
    2091,
    [Tag["Deepfake JayZ Intro"]]
  ),
  new Moment(
    "Jay Z rap for the crew",
    e.GetEpisodeByTitle(
      "Bella Thorne, Elon Musk, Ian PowerPoint - H3 Podcast #212"
    ),
    4060,
    [Tag["Deepfake JayZ Intro"]]
  ),
  new Moment(
    "Watching the Barefoot Brothers Drive ad on YouTube",
    e.GetEpisodeByTitle(
      "James Charles Enablers & Keemstar Is Obsessed With Me - After Dark #55"
    ),
    6502,
    [Tag["Barefoot Brothers Drive"]]
  ),
  new Moment(
    "Liam calls in and lies about C-Man",
    e.GetEpisodeByTitle("I'm Cancelled - H3TV #13"),
    2491,
    [Tag["Barefoot Brothers Drive"]]
  ),
  new Moment(
    "C-Man Calls in for the firt time",
    e.GetEpisodeByTitle("I'm Retiring - After Dark #56"),
    5717,
    [Tag["Barefoot Brothers Drive"]]
  ),
  new Moment(
    "Liam VS. C-Man ",
    e.GetEpisodeByTitle("Please Take Me Back - After Dark #57"),
    1992,
    [Tag["Barefoot Brothers Drive"]]
  ),
  new Moment(
    "Liam was lying about C-Man the whole time",
    e.GetEpisodeByTitle("Travis Scott & Astroworld - H3TV #15"),
    1416,
    [Tag["Barefoot Brothers Drive"]]
  ),
  new Moment(
    "BarefootBrotherDrivesMotorcycle.com",
    e.GetEpisodeByTitle("Nikocado Avocado Called Me Ugly - After Dark #59"),
    3974,
    [Tag["Barefoot Brothers Drive"]]
  ),
  new Moment(
    "First time talking about Ben Afflecks awful back tattoo",
    e.GetEpisodeByTitle(
      "Prank Invasion Gets DUNKED On & DJ Khaled Returns - H3 Podcast #113"
    ),
    2975,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Hila critiques bad tattoo's #1",
    e.GetEpisodeByTitle(
      "6ix9ine Released Early, Joji Cancelled, Doja Cat Lies To The World - H3 Podcast #190"
    ),
    1768,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Hila critiques bad tattoo's #2",
    e.GetEpisodeByTitle("No Meme Left Behind - H3 Podcast #119"),
    2532,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Hila critiques bad tattoo's #3",
    e.GetEpisodeByTitle("William & Chelsea Osman - H3 Podcast #194"),
    2818,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Hila critiques bad tattoo's #4",
    e.GetEpisodeByTitle("H3 After Dark - #8"),
    1956,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Hila critiques bad tattoo's #5",
    e.GetEpisodeByTitle("Keemstar Has No Boundaries - H3 Podcast #197"),
    1178,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Adam Levine's awful tattoo",
    e.GetEpisodeByTitle("The Worst Pain Of My Life - After Dark #86"),
    5350,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Ed Sheeran's back tattoo is worse than Ben Afflecks",
    e.GetEpisodeByTitle("The Worst Pain Of My Life - After Dark #86"),
    5819,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Elon Musks awful Tattoo",
    e.GetEpisodeByTitle("Hila Got Banned On Twitter - After Dark #90"),
    8683,
    [Tag["Ben Afflecks Back Tattoo"]]
  ),
  new Moment(
    "Discussing Gwyneth Paltrow 'Smells like my vagina' candle",
    e.GetEpisodeByTitle("Jack & Erik - H3 Podcast #168"),
    6598,
    [Tag["Butthole Candle"]]
  ),
  new Moment(
    "Smelling the the 'Smells like my Vagina' candle",
    e.GetEpisodeByTitle("Gigi Hadid Bodyslams Jake Paul - H3 Podcast #178"),
    1187,
    [Tag["Butthole Candle"]]
  ),
  new Moment(
    "Ethan talks about making a 'smells like my butthole' candle",
    e.GetEpisodeByTitle("Gigi Hadid Bodyslams Jake Paul - H3 Podcast #178"),
    1333,
    [Tag["Butthole Candle"]]
  ),
  new Moment(
    "Ethan sells the 'Smells like my butthole' candle",
    e.GetEpisodeByTitle("H3 After Dark - #8"),
    226,
    [Tag["Butthole Candle"]]
  ),
  new Moment(
    "Smells like my butthole candle raised 8k for charity",
    e.GetEpisodeByTitle(
      "H3 After Dark (Defending Trisha From The Wicked David Portnoy) - #17"
    ),
    3282,
    [Tag["Butthole Candle"]]
  ),
  new Moment(
    "Moist Critical Smells Ethan's butthole",
    e.GetEpisodeByTitle(
      "Trisha Paytas, Jeffree Star, Hair By Jay, D'Angelo Wallace, Cr1TiKaL - H3 After Dark #19"
    ),
    6832,
    [Tag["Butthole Candle"]]
  ),
  new Moment(
    "Ethan's first time talking about GERD",
    e.GetEpisodeByTitle("H3 After Dark - #2"),
    1613,
    [Tag["Gerd Gang"]]
  ),
  new Moment("GERD Gaaaang!", e.GetEpisodeByTitle("H3 After Dark - #3"), 1088, [
    Tag["Gerd Gang"],
  ]),
  new Moment(
    "DD Megadoodoo origin",
    e.GetEpisodeByTitle(
      "PewDiePie's Wedding & YouTube Sues Copyright Troll - H3 Podcast #136"
    ),
    522,
    [Tag["DD Megadoodoo"]]
  ),
  new Moment(
    "Podcasts old callin number was before '808-HOT-MEME'",
    e.GetEpisodeByTitle("H3 Podcast #41 - JonTron"),
    1986,
    [Tag["808-HOT-MEME"]]
  ),
  new Moment(
    "Podcasts number becomes '808-HOT-MEME'",
    e.GetEpisodeByTitle(
      "H3 Podcast #75 - Logan Paul Humiliated & Roseanne Loses It"
    ),
    57,
    [Tag["808-HOT-MEME"]]
  ),
  new Moment(
    "808-HOT-MEME reopens",
    e.GetEpisodeByTitle(
      "KSI Destroys Logan Paul & Mandalorian Review - H3 Podcast #157"
    ),
    761,
    [Tag["808-HOT-MEME"]]
  ),
  new Moment(
    "808-HOT-MEME reopens AGAIN",
    e.GetEpisodeByTitle("Guess Who the D'Amelios Are Suing... - H3TV #7"),
    435,
    [Tag["808-HOT-MEME"]]
  ),
  new Moment(
    "The last appearance of 808-HOT-MEME",
    e.GetEpisodeByTitle(
      "James Charles Wears Diapers & The LaBrant Family - H3TV #31"
    ),
    835,
    [Tag["808-HOT-MEME"]]
  ),
  new Moment(
    "Swami the security guards first appearance",
    e.GetEpisodeByTitle("I'm Cancelled - H3TV #13"),
    5282,
    [Tag["Swami"]]
  ),
  new Moment(
    "Swami's guest appearance on Families",
    e.GetEpisodeByTitle("Families Reunion Holiday Special"),
    4205,
    [Tag["Swami"]]
  ),
  new Moment(
    "Swami is called in to deal with Oliver Tree",
    e.GetEpisodeByTitle("Oliver Tree - H3 Podcast #248"),
    984,
    [Tag["Swami"]]
  ),
  new Moment(
    "Swami Behind the Scenes (Members only)",
    e.GetEpisodeByTitle("H3 Podcast BTS #13"),
    0,
    [Tag["Swami"]]
  ),
  new Moment(
    "Vape God Token is created",
    e.GetEpisodeByTitle("I’m Selling Vape Nation - H3 Podcast #239"),
    4121,
    [Tag["Vape God NFT"]]
  ),
  new Moment(
    "Vape God Token sells for $60,000 -  Nobody has bid since",
    e.GetEpisodeByTitle("President Trump Calls In - H3 After Dark #28"),
    11353,
    [Tag["Vape God NFT"]]
  ),
  new Moment(
    "Ethan mentioning he wants to get a scooter",
    e.GetEpisodeByTitle("YouTube Ends Copyright Abuse - H3 Podcast #135"),
    931,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Ethan IM's customer support about mobility scooters",
    e.GetEpisodeByTitle(
      "PewDiePie's Wedding & YouTube Sues Copyright Troll - H3 Podcast #136"
    ),
    3133,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Fans voting on The Gatsby",
    e.GetEpisodeByTitle(
      "PewDiePie's Wedding & YouTube Sues Copyright Troll - H3 Podcast #136"
    ),
    3881,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "The Gatsby's first appearance in the office!",
    e.GetEpisodeByTitle(
      "Our $3500 Scooter Has Arrived & Pizza Taste Test Catastrophe - H3 Podcast #142"
    ),
    2,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Love Bot VS. The Gatsby",
    e.GetEpisodeByTitle("Ethan Destroys The New Office - Off The Rails #1"),
    3204,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Ethan rides The Gatsby into the studio",
    e.GetEpisodeByTitle(
      "Our $3500 Scooter Has Arrived & Pizza Taste Test Catastrophe - H3 Podcast #142"
    ),
    266,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Hila rides The Gatsby into the studio",
    e.GetEpisodeByTitle("Hila Becomes An American Citizen - H3 Podcast #144"),
    42,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Casey Neistat rides The Gatsby into the studio",
    e.GetEpisodeByTitle("Casey Neistat - H3 Podcast #146"),
    181,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Bobby Lee ruins The Gatsby for everyone",
    e.GetEpisodeByTitle("Bobby Lee & Khalyla - H3 Podcast #148"),
    45,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "The Gatsby at the rage room",
    e.GetEpisodeByTitle("I'm so angry"),
    773,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Rewatching Bobby Lee crash The Gatsby",
    e.GetEpisodeByTitle("We Were Wrong About David Dobrik - H3TV #53"),
    9923,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "The Gatsby is... THE HOGWARDS EXPRESS",
    e.GetEpisodeByTitle(
      "Dream, Keemstar, All Gas No Breaks Interview with Andrew Callaghan - Off The Rails #2"
    ),
    151,
    [Tag["Gatsby"]]
  ),
  new Moment(
    "Wendy Williams Rips Ass for the first time",
    e.GetEpisodeByTitle("The End Of An Era - H3 Podcast #169"),
    2341,
    [Tag["Wendy Williams Fartgate"]]
  ),
  new Moment(
    "Wendy Williams Denies Fartgate",
    e.GetEpisodeByTitle(
      "Jaystation Must Be Stopped At All Costs - H3 Podcast #170"
    ),
    397,
    [Tag["Wendy Williams Fartgate"]]
  ),
  new Moment(
    "Zach isolates the Wendy Williams fart",
    e.GetEpisodeByTitle(
      "Jaystation Must Be Stopped At All Costs - H3 Podcast #170"
    ),
    435,
    [Tag["Wendy Williams Fartgate"]]
  ),
  new Moment(
    "Wendy Williams Farts and Burps",
    e.GetEpisodeByTitle("President Trump Calls In - H3 After Dark #28"),
    1516,
    [Tag["Wendy Williams Fartgate"]]
  ),
  new Moment(
    "Wendy Williams farts a third time",
    e.GetEpisodeByTitle(
      "FaZe Banks, Jeff Wittek, James Charles, David Dobrik - H3 After Dark #29"
    ),
    4776,
    [Tag["Wendy Williams Fartgate"]]
  ),
  new Moment(
    "Wendy Williams farts a fourth time",
    e.GetEpisodeByTitle("Kim Kardashian Threatened Me - Off The Rails #14"),
    784,
    [Tag["Wendy Williams Fartgate"]]
  ),
  new Moment(
    "Dans First Appearance - He had hair!",
    e.GetEpisodeByTitle("H3 Podcast #18 - Hugh Mungus"),
    9155,
    [Tag["Dan Had Hair"]]
  ),
  new Moment(
    "Mr. Beasts site gets Zilly Zonka'd",
    e.GetEpisodeByTitle(
      "David Dobrik Exposed By Casey Neistat Documentary - H3TV #27"
    ),
    6445,
    [Tag["Mr. Beast Cease and Desist"]]
  ),
  new Moment(
    "Crew jokes about Mr. Beast giving them a cease and desist",
    e.GetEpisodeByTitle(
      "David Dobrik Exposed By Casey Neistat Documentary - H3TV #27"
    ),
    6957,
    [Tag["Mr. Beast Cease and Desist"]]
  ),
  new Moment(
    "Mr. Beasts sends Ethan a Cease and Desist",
    e.GetEpisodeByTitle("The Crew Is Splitting Up - Off The Rails #39"),
    7926,
    [Tag["Mr. Beast Cease and Desist"]]
  ),
  new Moment(
    "Mobility Mary origin",
    e.GetEpisodeByTitle("YouTube Ends Copyright Abuse - H3 Podcast #135"),
    963,
    [Tag["Mobility Mary"]]
  ),
  new Moment(
    "People do not like Mobility Mary",
    e.GetEpisodeByTitle(
      "PewDiePie's Wedding & YouTube Sues Copyright Troll - H3 Podcast #136"
    ),
    2637,
    [Tag["Mobility Mary"]]
  ),
  new Moment(
    "Mobility Mary in the 2019 most iconic soundbites",
    e.GetEpisodeByTitle("The End Of An Era - H3 Podcast #169"),
    7019,
    [Tag["Mobility Mary"]]
  ),
  new Moment(
    "New Mobility Mary video drops",
    e.GetEpisodeByTitle(
      "6ix9ine Released Early, Joji Cancelled, Doja Cat Lies To The World - H3 Podcast #190"
    ),
    502,
    [Tag["Mobility Mary"]]
  ),
  new Moment(
    "Mobility Mary is dead",
    e.GetEpisodeByTitle(
      "We Need To Talk (VERY Urgent and VERY IMPORTANT!!!) - H3TV #19"
    ),
    7780,
    [Tag["Mobility Mary"]]
  ),
  new Moment(
    "The crew tried to get Mobility Mary's scooter",
    e.GetEpisodeByTitle("The Wedding... -  H3TV #20"),
    3454,
    [Tag["Mobility Mary"]]
  ),
  new Moment(
    "Braco and the gaze of miracles",
    e.GetEpisodeByTitle(
      "H3 Podcast #23 -  I've Lost All Respect For You ... (Top Of The Week)"
    ),
    1,
    [Tag["Braco"]]
  ),
  new Moment(
    "H3H3Productions video about Braco",
    e.GetEpisodeByTitle("The Gaze of Miracles"),
    0,
    [Tag["Braco"]]
  ),
  new Moment(
    "Belle Delphine sends the crew a jar of spit",
    e.GetEpisodeByTitle(
      "Belle Delphine Mailed Us A Shocking Package - H3 Podcast #127"
    ),
    3932,
    [Tag["Belle Delphine Spit Jar"]]
  ),
  new Moment(
    "The crew discussing Belle Delphines spit jar",
    e.GetEpisodeByTitle(
      "Twitch Double Standard & Analyzing Belle Delphine's Spit - H3 Podcast #129"
    ),
    6227,
    [Tag["Belle Delphine Spit Jar"]]
  ),
  new Moment(
    "Checking Belle Delphines spit 40 episodes later",
    e.GetEpisodeByTitle("The End Of An Era - H3 Podcast #169"),
    3333,
    [Tag["Belle Delphine Spit Jar"]]
  ),
  new Moment(
    "Belle Delphine's spit is... GONE?!",
    e.GetEpisodeByTitle(
      "The Belle Delphine Mystery & Our New Studio - H3 Podcast #246"
    ),
    948,
    [Tag["Belle Delphine Spit Jar"]]
  ),
  new Moment(
    "Ghost stories #1 - Post Malone and Joji",
    e.GetEpisodeByTitle("H3 Podcast #7 - Post Malone & Joji"),
    0,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #2 - Markiplier and Ian Hecox",
    e.GetEpisodeByTitle("H3 Podcast #8 - Markiplier & Ian Hecox (Smosh)"),
    5916,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #3 - Donna (Ethans Mom) ",
    e.GetEpisodeByTitle("H3 Podcast #11 - Ethan's Parents"),
    3845,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #4 - Steve-O",
    e.GetEpisodeByTitle("H3 Podcast #12 - Steve-O"),
    9579,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #5 - Internet Comment Etiquette",
    e.GetEpisodeByTitle(
      "H3 Podcast #17 - Jacksfilms & Internet Comment Etiquette"
    ),
    7560,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #6 - Hugh Mungus",
    e.GetEpisodeByTitle("H3 Podcast #18 - Hugh Mungus"),
    4754,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #7 - VideoGameDunkey and Leah",
    e.GetEpisodeByTitle("H3 Podcast #34 - VideoGameDunkey & Leah"),
    6144,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #8 - Dr. Disrespect",
    e.GetEpisodeByTitle("H3 Podcast #36 - Dr Disrespect"),
    4858,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #9 - Rhett and Link",
    e.GetEpisodeByTitle(
      "H3 Podcast #51 - Rhett & Link (Good Mythical Morning)"
    ),
    7265,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #10 - Shane Dawson",
    e.GetEpisodeByTitle("H3 Podcast #52 - Shane Dawson"),
    2861,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #11 - Vsauce3",
    e.GetEpisodeByTitle("H3 Podcast #54 - Vsauce3 (Jake Roper)"),
    5553,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #12 - Deadmau5",
    e.GetEpisodeByTitle("H3 Podcast #59 - Deadmau5"),
    5374,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #13 - Bobby Lee",
    e.GetEpisodeByTitle("H3 Podcast #60 - Bobby Lee"),
    7721,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #14 - Harley Morenstein",
    e.GetEpisodeByTitle("H3 Podcast #61 - Harley Morenstein (Epic Meal Time)"),
    7318,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ghost stories #15 - Ninja",
    e.GetEpisodeByTitle("H3 Podcast #63 - Ninja"),
    5346,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Ethan explains why the ghost stories segment ended",
    e.GetEpisodeByTitle(
      "Trisha Paytas Insults Hila & We Met Belle Delphine - H3 Podcast #150"
    ),
    6240,
    [Tag["Ghost Stories"]]
  ),
  new Moment(
    "Zach takes a shit on someone's lawn",
    e.GetEpisodeByTitle("H3 After Dark - #4"),
    1409,
    [Tag["Zachs Lawn Shit"]]
  ),
  new Moment(
    "Zach defends taking a shit on some dudes lawn",
    e.GetEpisodeByTitle(
      "The Belle Delphine Mystery & Our New Studio - H3 Podcast #246"
    ),
    2140,
    [Tag["Zachs Lawn Shit"]]
  ),
  new Moment(
    "Zach takes a photo of his lawn shit",
    e.GetEpisodeByTitle("Zach's Infamous DooDoo Story - He Found The Pictures"),
    0,
    [Tag["Zachs Lawn Shit"]]
  ),
  new Moment(
    "Ian's gotta pee so bad",
    e.GetEpisodeByTitle(
      "Filthy Frank Hysteria & Adpocalypse 2.0 - H3 Podcast #106"
    ),
    5667,
    [Tag["I Gotta Pee So Bad"]]
  ),
  new Moment(
    "Ethan's gotta pee so bad",
    e.GetEpisodeByTitle(
      "H3 Podcast #53 - Female Teacher Sleeps w Student & Papa John Fired"
    ),
    6201,
    [Tag["I Gotta Pee So Bad"]]
  ),
  new Moment(
    "Ethan first mentioning the show is inspired by Howard Stern",
    e.GetEpisodeByTitle("H3 Podcast #25 - Jenna Marbles & Julien Solomita"),
    6053,
    [Tag["Inspired by Howard Stern"]]
  ),
  new Moment(
    "Zach is the best in the biz!",
    e.GetEpisodeByTitle("The 2022 Sound Bite Tournament - After Dark #92"),
    2123,
    [Tag["Inspired by Howard Stern"]]
  ),
  new Moment(
    "Ian Powerpoint #1 - The Story of Adidon",
    e.GetEpisodeByTitle("H3 Podcast #67 - Drake vs Pusha T & Skippy vs Kyle"),
    3498,
    [Tag["Ian the Intern Powerpoints"], Tag.PowerPoint]
  ),
  new Moment(
    "Ian Powerpoint #2 -Aliens, Cults, and Hip Hop",
    e.GetEpisodeByTitle("H3 Podcast #77 - Alex Jones Stream Shut Down"),
    4465,
    [Tag["Ian the Intern Powerpoints"], Tag.PowerPoint]
  ),
  new Moment(
    "Ian Powerpoint #3 - Kanye West",
    e.GetEpisodeByTitle("H3 Podcast #87 - Shane & Logan + Kanye vs The World"),
    2376,
    [Tag["Ian the Intern Powerpoints"], Tag.PowerPoint]
  ),
  new Moment(
    "Ian Powerpoint #4 - Lil Nas X",
    e.GetEpisodeByTitle("Did Lil Nas X Steal Old Town Road? - H3 Podcast #130"),
    2169,
    [Tag["Ian the Intern Powerpoints"], Tag.PowerPoint]
  ),
  new Moment(
    "Ian Powerpoint #5 - Jay Z",
    e.GetEpisodeByTitle(
      "Bella Thorne, Elon Musk, Ian PowerPoint - H3 Podcast #212"
    ),
    2089,
    [Tag["Ian the Intern Powerpoints"], Tag.PowerPoint]
  ),
  new Moment(
    "Ethan and Post Malone check the Patrice Wilson countdown",
    e.GetEpisodeByTitle("H3 Podcast #39 - Post Malone"),
    1416,
    [Tag["Patrice Wilson Countdown Stream"]]
  ),
  new Moment(
    "Patrice Wilson's livestream begins to change",
    e.GetEpisodeByTitle("H3 Podcast #39 - Post Malone"),
    1509,
    [Tag["Patrice Wilson Countdown Stream"]]
  ),
  new Moment(
    "Patrice Wilson goes to a Cemetary",
    e.GetEpisodeByTitle("H3 Podcast #39 - Post Malone"),
    9016,
    [Tag["Patrice Wilson Countdown Stream"]]
  ),
  new Moment(
    "Ethan is going to call the Police on Patrice Wilson",
    e.GetEpisodeByTitle("H3 Podcast #39 - Post Malone"),
    9207,
    [Tag["Patrice Wilson Countdown Stream"]]
  ),
  new Moment(
    "Ethan Explains the Patrice Wilson situation",
    e.GetEpisodeByTitle("H3 Podcast #100 - The End of an Era"),
    2323,
    [Tag["Patrice Wilson Countdown Stream"]]
  ),
  new Moment(
    "The BacH3lor - Ian - Round 1",
    e.GetEpisodeByTitle(
      "Twitch Backstabs Ninja & Jeffrey Epstein - H3 Podcast #134"
    ),
    3439,
    [Tag["The BacH3lor"]]
  ),
  new Moment(
    "The BacH3lor - Ian - Round 2",
    e.GetEpisodeByTitle(
      "Our $3500 Scooter Has Arrived & Pizza Taste Test Catastrophe - H3 Podcast #142"
    ),
    2471,
    [Tag["The BacH3lor"]]
  ),
  new Moment(
    "The BacH3lor - Ian - Wildcard Edition",
    e.GetEpisodeByTitle(
      "Belle Delphine Mugshot & Trisha Paytas Is A Mess - H3 Podcast #149"
    ),
    708,
    [Tag["The BacH3lor"]]
  ),
  new Moment(
    "Ian Eats Mayo to protect Sam",
    e.GetEpisodeByTitle(
      "Ninja Texting Scam & PewDiePie Banned In China - H3 Podcast #151"
    ),
    3577,
    [Tag["The BacH3lor"]]
  ),
  new Moment(
    "The BacH3lor - Trisha - Round 1",
    e.GetEpisodeByTitle(
      "Trisha Paytas (The BacH3lorette Round 2) - H3 Podcast #182"
    ),
    119,
    [Tag["The BacH3lor"]]
  ),
  new Moment(
    "The BacH3lor Season 2 is cancelled",
    e.GetEpisodeByTitle("Trisha Paytas Ruins The H3 Podcast - H3 Podcast #184"),
    3635,
    [Tag["The BacH3lor"]]
  ),
  new Moment(
    "Shoenice Hates Ethan",
    e.GetEpisodeByTitle(
      "H3 Podcast #27 - We Raised $170,000! + Shoenice Hates Us"
    ),
    4192,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice is a lunatic",
    e.GetEpisodeByTitle("H3 Podcast #81 - Logan Paul vs KSI"),
    4165,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice calls out Ethan and Hila",
    e.GetEpisodeByTitle(
      "Belle Delphine Shocks Us & Trisha Paytas' Fake Wedding- H3 Podcast #155"
    ),
    3898,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice eats raw bacon",
    e.GetEpisodeByTitle(
      `Old People Angry About "OK Boomer" & FaZe Jarvis - H3 Podcast #156`
    ),
    3944,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice makes a video about Ethan and Hila",
    e.GetEpisodeByTitle(
      "KSI Destroys Logan Paul & Mandalorian Review - H3 Podcast #157"
    ),
    801,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice Call-In #1",
    e.GetEpisodeByTitle("Shoenice - H3 Podcast #159"),
    2139,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice interview aftermath",
    e.GetEpisodeByTitle(
      "Shoenice Turns On Ethan & Elon Trolls The World - H3 Podcast #160"
    ),
    178,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice Call-In #2 - Defending Ethan against Gokanaru",
    e.GetEpisodeByTitle("The Death Of H3H3 by Gokanaru - H3 Podcast #192"),
    8613,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice Call-In #3",
    e.GetEpisodeByTitle(
      "YouTubers Are Knowingly Spreading Covid - H3 Podcast #201"
    ),
    5176,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice gets times out in chat",
    e.GetEpisodeByTitle("H3 After Dark - #13"),
    6015,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Shoenice eats fika fish",
    e.GetEpisodeByTitle(
      "Brendan Schaub Responds, Fresh & Fit Guest Calls In To Expose Them - Off The Rails #35"
    ),
    2713,
    [Tag["Shoe Nice"]]
  ),
  new Moment(
    "Zach talks about Anal Fissures",
    e.GetEpisodeByTitle(
      "MrBeast Saves The Planet & Twitch Is Collapsing - H3 Podcast #153"
    ),
    6642,
    [Tag["Anal Fissures"]]
  ),
  new Moment(
    "Zach Apologizes for misinforming about Anal Fissures",
    e.GetEpisodeByTitle(
      "Halloween Extravaganza & Candy Tier List - H3 Podcast #154"
    ),
    5287,
    [Tag["Anal Fissures"]]
  ),
  new Moment(
    "Ethans Dad Talking About his father who abandoned him",
    e.GetEpisodeByTitle("H3 Podcast #11 - Ethan's Parents"),
    4249,
    [Tag["Leonardo Katzman"]]
  ),
  new Moment(
    "Discussing Ethan's grandfather leaving with Theo Von",
    e.GetEpisodeByTitle("Theo Von - H3 Podcast #109"),
    780,
    [Tag["Leonardo Katzman"]]
  ),
  new Moment(
    "Ethan see's His grandfather for the first time",
    e.GetEpisodeByTitle("Hila Got Banned On Twitter - After Dark #90"),
    4111,
    [Tag["Leonardo Katzman"]]
  ),
  new Moment(
    "Zach CCR Curse origin",
    e.GetEpisodeByTitle("These Are My Enemies Now - H3 After Dark #20"),
    505,
    [Tag["CCR Curse"]]
  ),
  new Moment(
    "Crew Discusses the CCR curse with Zach",
    e.GetEpisodeByTitle(
      "James Charles Returns & Baby Update - H3 After Dark #43"
    ),
    5108,
    [Tag["CCR Curse"]]
  ),
  new Moment(
    "CCR Curse appears in the 2021 Halloween Special Surprise",
    e.GetEpisodeByTitle("We Go Ghost Hunting - Halloween Special - OTR #16"),
    1433,
    [Tag["CCR Curse"]]
  ),
  new Moment(
    "CCR Curse talked about on Leftovers",
    e.GetEpisodeByTitle(
      "Elon Musk Forced To Buy Twitter, Herschel Walker Walked Her To The Clinic - Leftovers #27"
    ),
    1105,
    [Tag["CCR Curse"]]
  ),
  new Moment(
    "Did Lil Nas X steal Old Town Road?",
    e.GetEpisodeByTitle("Did Lil Nas X Steal Old Town Road? - H3 Podcast #130"),
    2960,
    [Tag["Lil Tracy Beef"]]
  ),
  new Moment(
    "Lil Tracy beefs with Ethan on Twitter",
    e.GetEpisodeByTitle(
      "Ninja Leaves Twitch & TikTok Gives Me Nightmares - H3 Podcast #131"
    ),
    4445,
    [Tag["Lil Tracy Beef"]]
  ),
  new Moment(
    "Recapping Lil Tracy Beef",
    e.GetEpisodeByTitle("The End Of An Era - H3 Podcast #169"),
    8642,
    [Tag["Lil Tracy Beef"]]
  ),
  new Moment(
    "Ethan confuses Lil Tracy with Lil Uzi",
    e.GetEpisodeByTitle(
      "Logan Paul Ends His Career & CodeMiko Calls In - H3 Podcast #234"
    ),
    739,
    [Tag["Lil Tracy Beef"]]
  ),
  new Moment(
    "Lil Tracy is going to be a co-host?!",
    e.GetEpisodeByTitle(
      "It Keeps Getting Worse For David Dobrik - H3 After Dark #25"
    ),
    3359,
    [Tag["Lil Tracy Beef"]]
  ),
  new Moment(
    "Ethan doesn't even remember the Lil Tracy beef",
    e.GetEpisodeByTitle("We Got Another Strike - Off The Rails #44"),
    2527,
    [Tag["Lil Tracy Beef"]]
  ),
  new Moment(
    "DO NOT FLUSH BABY WIPES",
    e.GetEpisodeByTitle("H3 Podcast #89 - Enter The Gazebo Zone"),
    4438,
    [Tag["Fatburgs"]]
  ),
  new Moment(
    "Telling Eric Andre DO NOT FLUSH BABY WIPES",
    e.GetEpisodeByTitle("Eric Andre - H3 Podcast #195"),
    4931,
    [Tag["Fatburgs"]]
  ),
  new Moment(
    "The Regula Shmegula origin",
    e.GetEpisodeByTitle("No Meme Left Behind - H3 Podcast #119"),
    4917,
    [Tag["The Regula Shmegula"]]
  ),
  new Moment(
    "Goof Gang vs. Wack Pack",
    e.GetEpisodeByTitle("H3 Podcast #81 - Logan Paul vs KSI"),
    4475,
    [Tag["Goof Gang"]]
  ),
  new Moment(
    "Discussing the name 'Goof Gang' 'Goof Troop' 'Goof Squad' 'Gaff Pack'",
    e.GetEpisodeByTitle("H3 Podcast #83 - Meme Royale & PewDiePie vs T-Series"),
    2606,
    [Tag["Goof Gang"]]
  ),
  new Moment(
    "Shoenice Talking about being apart of the Goof Gang",
    e.GetEpisodeByTitle(
      "Belle Delphine Shocks Us & Trisha Paytas' Fake Wedding- H3 Podcast #155"
    ),
    4253,
    [Tag["Goof Gang"]]
  ),
  new Moment(
    "Jimmie Lee is apart of the Goof Gang?",
    e.GetEpisodeByTitle("The Podcast Is Ending"),
    3015,
    [Tag["Goof Gang"]]
  ),
  new Moment(
    "The Sharkey's giftcard fiasco",
    e.GetEpisodeByTitle(
      "H3 Podcast #65 - Logan Paul Slammed On Twitter & Ethan Quits Social Media"
    ),
    2681,
    [Tag["Sharkys Giftcard"]]
  ),
  new Moment(
    "The Sharkey's giftcard fiasco - Part 2",
    e.GetEpisodeByTitle(
      "H3 Podcast #66 - YouTube Is Doomed, 30 Year Old Mall Ninja Evicted & Kendrick Lamar"
    ),
    2747,
    [Tag["Sharkys Giftcard"]]
  ),
  new Moment(
    "Ian gets a Sharkey's gift card",
    e.GetEpisodeByTitle("H3 Podcast #67 - Drake vs Pusha T & Skippy vs Kyle"),
    1675,
    [Tag["Sharkys Giftcard"]]
  ),
  new Moment(
    "Ian's Birthday & his very special gift!",
    e.GetEpisodeByTitle("No Meme Left Behind - H3 Podcast #119"),
    2139,
    [Tag["Sharkys Giftcard"]]
  ),
  new Moment(
    "Bert posting him in the H3 Studio",
    e.GetEpisodeByTitle("Berts Instagram Post from 2016"),
    0,
    [Tag["Bert Kriesher Lost Episode"]]
  ),
  new Moment(
    "The lost episode happened the day before the iDubbbz one",
    e.GetEpisodeByTitle("H3 Podcast #4 - iDubbbzTV"),
    420,
    [Tag["Bert Kriesher Lost Episode"]]
  ),
  new Moment(
    "Ethan and Bert Talk about why it wasn't released",
    e.GetEpisodeByTitle("H3 Podcast #80 - Bert Kreischer"),
    100,
    [Tag["Bert Kriesher Lost Episode"]]
  ),
  new Moment(
    "Ethan cant stop watching OJ Simpson",
    e.GetEpisodeByTitle(
      "Belle Delphine Farts In A Jar And Sends It To Me & JayStation - H3 Podcast #123"
    ),
    6703,
    [Tag["Blocked on Twitter by OJ"]]
  ),
  new Moment(
    "Ethan tells us to stop watching OJ",
    e.GetEpisodeByTitle(
      "Belle Delphine Responds & Free A$AP Rocky - H3 Podcast #124"
    ),
    4479,
    [Tag["Blocked on Twitter by OJ"]]
  ),
  new Moment(
    "OJ blocks Ethan on Twitter",
    e.GetEpisodeByTitle(
      "OJ Simpson Blocked Ethan After Getting Burned On Twitter - H3 Podcast #181"
    ),
    3946,
    [Tag["Blocked on Twitter by OJ"]]
  ),
  new Moment(
    "Gokanaru",
    e.GetEpisodeByTitle("The Death Of H3H3 by Gokanaru - H3 Podcast #192"),
    2642,
    [Tag["n******* f******"]]
  ),
  new Moment(
    "Watching Chet Hanks with Andrew Santino",
    e.GetEpisodeByTitle("Andrew Santino - H3 Podcast #219"),
    3644,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Ian Doing Chet Hanks Workout Challenge",
    e.GetEpisodeByTitle(
      "We Made A High Fashion Runway Collection - H3 Podcast #237"
    ),
    391,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Chet Hanks in... White Boy Summer",
    e.GetEpisodeByTitle("It's Time To Stop James Charles - H3 Podcast #241"),
    3915,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Cant say Chet Hanks without ETHAN in the middle",
    e.GetEpisodeByTitle("Jake Paul Fight Was A Disaster - H3 Podcast #244"),
    4496,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Chet Hanks Joker Impression",
    e.GetEpisodeByTitle(
      "Twitch Hot Tubs & Bitconnect Carlos Calls In - H3 After Dark #34"
    ),
    8328,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Chet Hanks threatens Ethan - Highlight",
    e.GetEpisodeByTitle("Tom Hank's Son Threatens Ethan In DMs"),
    0,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Chet Hanks refuses to Apologize ",
    e.GetEpisodeByTitle(
      "Birds Aren't Real Founder Calls In, Amber Heard vs Johnny Depp, Avatar 2 - H3TV #35"
    ),
    7637,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "Chet Hanks is downbad, boo'd off stage",
    e.GetEpisodeByTitle(
      "Office Drama: We Had To Call HR, Austin McBroom KO’d, Durte Dom Called Me Out - Off The Rails #48"
    ),
    5322,
    [Tag["Chet Hanks Threats"]]
  ),
  new Moment(
    "The infamous episode (it's really not THAT bad)",
    e.GetEpisodeByTitle("H3 Podcast #84 - Bill Burr"),
    6,
    [Tag["Bill Burr Episode 1"]]
  ),
  new Moment(
    "Crew explains why they didn't release the Triller video",
    e.GetEpisodeByTitle("Jake Paul & Triller Are Suing Me - H3 After Dark #35"),
    1219,
    [Tag["Triller Lawsuit Lost Episode"]]
  ),
  new Moment(
    "Ethan Outs Sam as the Wildcard on accident",
    e.GetEpisodeByTitle("Jake Paul's New Scam - H3 Podcast #176"),
    259,
    [Tag["The Wildcards Identity"]]
  ),
  new Moment(
    "Ethan Talks About Getting Swatted",
    e.GetEpisodeByTitle(
      "Ninja Texting Scam & PewDiePie Banned In China - H3 Podcast #151"
    ),
    8780,
    [Tag["John William Kirbey Kelly"]]
  ),
  new Moment(
    "Ethan revealing the guy who swatted them",
    e.GetEpisodeByTitle(
      "I'm Over Trisha Paytas & Papa John Calls In - H3 Podcast #187"
    ),
    3284,
    [Tag["John William Kirbey Kelly"]]
  ),
  new Moment(
    "Ethan makes fun of Cody Padrino",
    e.GetEpisodeByTitle(
      "David Dobrik Is About To Lose Everything - After Dark #66"
    ),
    8715,
    [Tag["Cody Padrino"]]
  ),
  new Moment(
    "Cody Padrino comes to Ethans House",
    e.GetEpisodeByTitle("Everyone Hates Me Again - H3TV #25"),
    1012,
    [Tag["Cody Padrino"]]
  ),
  new Moment(
    "Jeff Wittek apologizes for Cody Padrino's behavior",
    e.GetEpisodeByTitle("Jeff Wittek, Mr. Beast, ACE Family - H3TV #26"),
    1168,
    [Tag["Cody Padrino"]]
  ),
  new Moment(
    "The beef is squashed with Cody Padrino",
    e.GetEpisodeByTitle(
      "Jeff Wittek, Tana Mongeau, Mike Majlak - H3 Podcast #254"
    ),
    7787,
    [Tag["Cody Padrino"]]
  ),
  new Moment(
    "The greatest conspiracy surrounding the H3 Podcast",
    e.GetEpisodeByTitle(
      "It's Time For War... I've Never Been So Offended - H3TV #47"
    ),
    6802,
    [Tag["VoiceFlamingo-R"]]
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
