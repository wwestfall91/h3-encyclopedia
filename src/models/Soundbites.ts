import { Soundbite } from "./Soundbite";
import * as episodes from "./Episodes/AllEpisodes";
import JeffEpisode from "./Episodes/JeffDunham";
import * as Faces from "./Faces";
import * as SB from "../assets/sounds/soundbites/SoundbiteIndex";
import { Episode } from "./Episode";
import { EpisodeType } from "./enums/EpisodeType";
import * as P from "../models/People";

export const Soundbites: Soundbite[] = new Array(
  new Soundbite(
    "OHHHH monsieurerrrrrrr",
    SB.WorldCupAnnoucer_OhhhMonseiuur,
    [P.Misc], 
    episodes.GetAfterDark(65),
    2439,
    Faces.Oh_Monsieur
  ),
  new Soundbite(
    "I Like the Twilight Movies",
    SB.AB_ILikeTheTwilightMovies,
    [P.AB], 
    episodes.GetOffTheRails(6),
    5010
  ),
  new Soundbite(
    "I'm 21 FUCK YOU",
    SB.AdinRoss_21FUCKYOU,
    [P.AdinRoss], episodes.GetH3TV(46),
    9303
  ),
  new Soundbite(
    "You're a dick rider, a dick sucker...",
    SB.AdinRoss_YoureADickSucker,
    [P.AdinRoss], episodes.GetH3TV(46),
    8933
  ),
  new Soundbite(
    "Suckin a ding dong",
    SB.AlexJones_SuckinADingDong,
    [P.AlexJones], episodes.GetAfterDark(37),
    7361
  ),
  new Soundbite(
    "Turned the Friggin' Frogs Gay",
    SB.AlexJones_TheyTurnTheFreakingFrogsGay,
    [P.AlexJones], episodes.GetPodcast(243),
    398
  ),
  new Soundbite(
    "Keemstar Shut Up",
    SB.AlkiDavid_KeemstarSHUTUP,
    [P.AlkiDavid], episodes.GetAfterDark(44),
    7601
  ),
  new Soundbite(
    "SHUT UP BITCH",
    SB.AlkiDavid_ShutupBITCH,
    [P.AlkiDavid], episodes.GetAfterDark(44),
    7601
  ),
  new Soundbite(
    "I Pooped My Pants",
    SB.AlRoker_IPoopedMyPants,
    [P.AlRoker], episodes.GetH3TV(7),
    523
  ),
  new Soundbite(
    "I'm not gay no more!",
    SB.AndrewCaldwel_ImNotGayNoMore,
    [P.AndrewCaldwell], episodes.GetAfterDark(3),
    7623
  ),
  new Soundbite(
    "I Do it With Everyone",
    SB.AndrewCuomo_IDoItWithEveryone,
    [P.AndrewCuomo], episodes.GetOffTheRails(12),
    3143
  ),
  new Soundbite(
    "That's the game",
    SB.AndrewTate_ThatsTheGame,
    [P.AndrewTate], episodes.GetOffTheRails(47),
    2351
  ),
  new Soundbite(
    "Chestnusts slurping oer open flile",
    SB.Anuk_Chestnuts,
    [P.AnukAtittawan], episodes.GetOffTheRails(58),
    6358
  ),
  new Soundbite(
    "Blood Boiling",
    SB.AustinMcBroom_BloodBoiling,
    [P.AustinMcBroom], episodes.GetH3TV(2),
    5550
  ),
  new Soundbite(
    "In Reality You Guys Got Scammed",
    SB.AustinMcBroom_InRealityYouGuysGotScammed,
    [P.AustinMcBroom], episodes.GetOffTheRails(3),
    4010
  ),
  new Soundbite(
    "Suck a fat donut",
    SB.AustinMcBroom_SuckAFatDonut,
    [P.AustinMcBroom], episodes.GetH3TV(42),
    3327
  ),
  new Soundbite(
    "stoppppp",
    SB.AustinMcBroom_Stop2,
    [P.AustinMcBroom],
    episodes.GetEpisodeByTitle("Content Court: The ACE Family"),
    1041
  ),
  new Soundbite(
    "Hi My Name is Awkwafina and I am in the movie ShangChi",
    SB.Awkwafina_ShangChi,
    [P.Awkwafina], episodes.GetAfterDark(49),
    1912
  ),
  new Soundbite(
    "The Gnarlier the Better",
    SB.BelleDelphine_TheGnarlierTheBetter,
    [P.BelleDelphine], episodes.GetPodcast(225),
    3714
  ),
  new Soundbite(
    "Extra Large and Extra Hard",
    SB.BenShapiro_ExtraLargeAndExtraHard,
    [P.BenShapiro], episodes.GetPodcast(206),
    5780
  ),
  new Soundbite(
    "Wet Ass PWord",
    SB.BenShapiro_WetAssPWord,
    [P.BenShapiro], episodes.GetPodcast(206),
    5761
  ),
  new Soundbite(
    "BITCH YOU HAVE NOTHING",
    SB.Bowblax_BITCHYOUHAVENOTHING,
    [P.Bowblax], episodes.GetOffTheRails(46),
    11995
  ),
  new Soundbite(
    "FIVE HUNDRED SUBS",
    SB.Bowblax_500subs,
    [P.Bowblax], episodes.GetOffTheRails(46),
    12033
  ),
  new Soundbite(
    "FUCKING FK FK FK FK",
    SB.BowBlax_IFuckingFuckFuckFuckFuck,
    [P.Bowblax], episodes.GetOffTheRails(46),
    11554
  ),
  new Soundbite(
    "LET ME SPEEEEAAAAK",
    SB.Bowblax_LETMESPEAAAK,
    [P.Bowblax], episodes.GetOffTheRails(46),
    11799
  ),
  new Soundbite(
    "TALK ABOUT THE ALLEGATIONS",
    SB.BowBlax_TalkAboutTheAllegations,
    [P.Bowblax], episodes.GetOffTheRails(46),
    11540
  ),
  new Soundbite(
    "THIS! THIS! THIS IS WHY IM WATCHING",
    SB.BowBlax_ThisIsWhyImWatching,
    [P.Bowblax], episodes.GetOffTheRails(46),
    11545
  ),
  new Soundbite(
    "Jerking your dog off",
    SB.BradleyMartyn_JerkingYourDogOff,
    [P.BradleyMartyn], episodes.GetOffTheRails(47),
    4297
  ),
  new Soundbite(
    "We drank beer",
    SB.BrettKavanaugh_WeDrankBeer,
    [P.BrettKavanaugh], episodes.GetAfterDark(40),
    701
  ),
  new Soundbite(
    "Deedee Megadoodoo",
    SB.BriannaClark_DeeDeeMegaDooDoo,
    [P.BriannaClark], episodes.GetPodcast(136),
    551
  ),
  new Soundbite(
    "Holy shit fuck balls",
    SB.BritneySpears_HolyShitFuckBalls,
    [P.BritneySpears], episodes.GetH3TV(19),
    6828
  ),
  new Soundbite(
    "Holy shit wow fucking balls ay",
    SB.BritneySpears_HolyShitWowFuckingBallsAy,
    [P.BritneySpears], episodes.GetH3TV(19),
    6836
  ),
  new Soundbite(
    "Sharples thats not your ID",
    SB.Misc_SharplesThatsNotYourID,
    [P.Misc], episodes.GetAfterDark(9),
    3960
  ),
  new Soundbite(
    "We got weights in fish",
    SB.Misc_WeGotWeightsInFish,
    [P.Misc], episodes.GetOffTheRails(51),
    9834
  ),
  new Soundbite(
    "BOSS MAN BIDEN",
    SB.ChetHanks_BOSSMANBIDEN,
    [P.ChetHanks], episodes.GetAfterDark(12),
    4589
  ),
  new Soundbite(
    "Chet Hanks Joker Laugh",
    SB.ChetHanks_Laugh,
    [P.ChetHanks], episodes.GetAfterDark(34),
    8328
  ),
  new Soundbite(
    "PUSSYCLAT",
    SB.ChetHanks_PUSSYCLOT,
    [P.ChetHanks], episodes.GetAfterDark(12),
    4572
  ),
  new Soundbite(
    "SYKE",
    SB.ChetHanks_SYYKE,
    [P.ChetHanks], episodes.GetAfterDark(12),
    4568
  ),
  new Soundbite(
    "Trying to think but nothing happens",
    SB.Curly_ImTryingToThinkButNothingHappens,
    [P.Curly], episodes.GetPodcast(245),
    2851
  ),
  new Soundbite(
    "I Can't Jerk Off to This",
    SB.Dan_ICantJerkOffToThis,
    [P.Dan], episodes.GetOffTheRails(14),
    3165
  ),
  new Soundbite(
    "I Wanna Talk About Feet",
    SB.Dan_IWannaTalkAboutFeet,
    [P.Dan], episodes.GetPodcast(181),
    4437
  ),
  new Soundbite(
    "I'm gonna cum",
    SB.Dan_ImGonnaCum,
    [P.Dan], episodes.GetOffTheRails(1),
    812
  ),
  new Soundbite(
    "Jacket off",
    SB.Dan_JacketOff,
    [P.Dan], episodes.GetH3TV(57),
    10361
  ),
  new Soundbite(
    "Stick your funger",
    SB.Dan_StickYourFunger,
    [P.Dan], episodes.GetH3TV(19),
    6596
  ),
  new Soundbite(
    "200 DPI",
    SB.Misc_200dpi,
    [P.Misc], episodes.GetAfterDark(92),
    13741,
    "https://preview.redd.it/when-he-has-3000-dpi-v0-akdpglulef1a1.jpg?width=640&crop=smart&auto=webp&s=2902a079a4851f502ac5345bcb383cee2c77c728"
  ),
  new Soundbite(
    "800 DPI",
    SB.Misc_800dpi,
    [P.Misc], episodes.GetAfterDark(90),
    6480,
    "https://preview.redd.it/when-he-has-3000-dpi-v0-akdpglulef1a1.jpg?width=640&crop=smart&auto=webp&s=2902a079a4851f502ac5345bcb383cee2c77c728"
  ),
  new Soundbite(
    "OH BOY BIG NEWS",
    SB.DashDobrofsky_OhBoyBigNews,
    [P.DashDobrofsky], episodes.GetAfterDark(91),
    6847
  ),
  new Soundbite(
    "I missed the mark on that one",
    SB.DavidDobrik_IMissedTheMarkWithThatOne,
    [P.DavidDubrik], episodes.GetPodcast(240),
    5146
  ),
  new Soundbite(
    "Shout out to his family",
    SB.DavidGuetta_ShoutoutToHisFamily,
    [P.DavidGuetta], episodes.GetAfterDark(20),
    11231
  ),
      new Soundbite(
      "And then I had a hard time the rest of the weekend",
      SB.DemiLovato_HardTimeWeekend,
      [P.DemiLovato], episodes.GetPodcast(245),
      4817
    ),
      new Soundbite(
      "I Left that Yogurt Store and Didn't Get the Yogurt I Wanted",
      SB.DemiLovato_DidntGetTheYogurtIWanted,
      [P.DemiLovato], episodes.GetPodcast(245),
      4810
    ),
  new Soundbite(
    "What's your argument",
    SB.DennisPrager_WhatsYourArgument,
    [P.DennisPrager], episodes.GetLeftovers(28),
    1221
  ),
  new Soundbite(
    "Hi Im Dick Tips",
    SB.DickTips_HiImDickTips,
    [P.DickTips], episodes.GetPodcast(242),
    82
  ),
  new Soundbite(
    "DRAKE",
    SB.DJAkademiks_DRAKE,
    [P.DJAkademiks], episodes.GetH3TV(7),
    299
  ),
  new Soundbite(
    "Dubrick",
    SB.Donna_Dubrik,
    [P.DonnaKlein], episodes.GetFamilies(2),
    5179
  ),
  new Soundbite(
    "It's Friday Fuck baby fuck",
    SB.Donna_ItsFridayFuck,
    [P.DonnaKlein], episodes.GetFamilies(10),
    677
  ),
  new Soundbite(
    "Hell yeah HELL YEAH",
    SB.Dream_HellYeahHELLYEAH,
    [P.Dream], episodes.GetOffTheRails(2),
    1157
  ),
  new Soundbite(
    "And I oop",
    SB.DrPhil_AndIOop,
    [P.DrPhil], episodes.GetPodcast(154),
    1665
  ),
  new Soundbite(
    "SIMP",
    SB.DrPhil_SIMP,
    [P.DrPhil], episodes.GetPodcast(215),
    964
  ),
  new Soundbite(
    "Are you fuckin my tits RAW",
    "",
    [P.EthanKlein], episodes.GetPodcast(131),
    1396
  ),
  new Soundbite(
    "DAAAAN SWERDLOVE",
    SB.Ethan_DanSwerdlove,
    [P.EthanKlein], episodes.GetH3TV(62),
    3291
  ),
  new Soundbite(
    "Dan has Never Looked Good",
    SB.Ethan_DanHasNeverLookedGood,
    [P.EthanKlein], episodes.GetH3TV(56),
    672
  ),
  new Soundbite(
    "Do Not Waste That Sweet Milk",
    SB.Ethan_DoNotWasteThatSweetMilk,
    [P.EthanKlein], episodes.GetLeftovers(19),
    4159
  ),
  new Soundbite(
    "I'm Trying to Think But Nothing Happens",
    "",
    [P.EthanKlein], episodes.GetFrenemies(29),
    6251
  ),
  new Soundbite(
    "LUNCHTIME",
    SB.Ethan_LUNCHTIME,
    [P.EthanKlein], episodes.GetH3TV(55),
    1035
  ),
  new Soundbite(
    "Spit on my tits and fuck em",
    SB.Ethan_SpitOnMyTits,
    [P.EthanKlein], episodes.GetPodcast(131),
    1398
  ),
  new Soundbite(
    "Who is Sam",
    SB.Ethan_WhoIsSam,
    [P.EthanKlein], episodes.GetOffTheRails(35),
    9551
  ),
  new Soundbite(
    "You Wanna Come to the Car and Suck my Cock",
    SB.Ethan_YouWannaComeToMyCarAndSuck,
    [P.EthanKlein], episodes.GetPodcast(251),
    1297
  ),
  new Soundbite(
    "Money Ethan",
    SB.Misc_MoneyEthan,
    [P.Misc], episodes.GetAfterDark(33),
    241,
    Faces.default.Money_Ethan
  ),
  new Soundbite(
    "There's a hunger for this character to come back",
    SB.EwanMcGregor_HungerForCharacterToComeBack,
    [P.EwanMcGregor], episodes.GetAfterDark(58),
    1762
  ),
  new Soundbite(
    "I'm infinitely smarter than you",
    SB.FazeBanks_InfinitelySmarterThanYou,
    [P.FazeBanks], episodes.GetAfterDark(36),
    6598
  ),
  new Soundbite(
    "I'm infinitely smarter than you",
    SB.FazeBanks_IThinkHesFuckingStupid,
    [P.FazeBanks], episodes.GetAfterDark(36),
    6598
  ),
  new Soundbite(
    "Faze Blanks",
    SB.FazeBanks_FazeBlanks,
    [P.FazeBanks], episodes.GetAfterDark(36),
    6589
  ),
  new Soundbite(
    "CHEEEEZE",
    SB.FouseyTube_CHEEZE,
    [P.FouseyTube], episodes.GetOffTheRails(43),
    8402
  ),
  new Soundbite(
    "I felt worthless, I felt ugly, I felt gay",
    SB.FouseyTube_IFeltWorthless,
    [P.FouseyTube], episodes.GetEpisodeByTitle("2nd Annual Steamies")!,
    3446
  ),
  new Soundbite(
    "It Tastes Like Beef Jerky",
    SB.FouseyTube_ItTastesLikeBeefJerky,
    [P.FouseyTube], episodes.GetOffTheRails(43),
    8415
  ),
  new Soundbite(
    "Coconuts in Barbados",
    SB.FreshAndFit_CoconutsInBarbados,
    [P.FreshAndFit], episodes.GetOffTheRails(24),
    7144
  ),
  new Soundbite(
    "Man it is Wednesday man",
    SB.FreshAndFit_ItsWednesdayMan,
    [P.FreshAndFit], episodes.GetAfterDark(71),
    6803
  ),
  new Soundbite(
    "I like that",
    SB.GarthBrooks_ILikeThat,
    [P.GarthBrooks], episodes.GetPodcast(71),
    4222
  ),
  new Soundbite(
    "Let the conversation begin",
    SB.GarthBrooks_LetTheConversationBegin,
    [P.GarthBrooks], episodes.GetPodcast(71),
    4435
  ),
  new Soundbite(
    "I'd rather speak up and be wrong than be muffled and be wrong",
    SB.GregPaul_IdRatherBeWrong,
    [P.GregPaul], episodes.GetPodcast(227),
    975
  ),
  new Soundbite(
    "I'm a fucking savage you gotta do it",
    SB.GregPaul_ImAFuckingSavage,
    [P.GregPaul], episodes.GetAfterDark(33),
    1870
  ),
  new Soundbite(
    "FLOCKA",
    SB.HannibalBuress_FLOCKA,
    [P.HannibalB], episodes.GetH3TV(48),
    80
  ),
  new Soundbite(
    "Ryan Kavanaugh is a force of nature",
    SB.HarveyWeinstein_RyanKavanaughIsAForceOfNature,
    [P.HarveyWeinstein], episodes.GetH3TV(21),
    4546
  ),
  new Soundbite(
    "Adolf Hitler, DUDE!!",
    SB.Hasan_AdolfHitlerDUDE,
    [P.HasanPiker], episodes.GetAfterDark(92),
    10832
  ),
  new Soundbite(
    "Weasily little liar dude",
    SB.Hasan_WeasleyLittleLiar,
    [P.HasanPiker], episodes.GetH3TV(23),
    6715
  ),
  new Soundbite(
    "Haha Bitch I'm laughing cause you big mad",
    SB.Hila_ImLaughingCauseYouBigMad,
    [P.HilaKlein], episodes.GetPodcast(190),
    5227
  ),
  new Soundbite(
    "Have you visited Blacked",
    SB.Hila_HaveYouVisitedBlacked,
    [P.HilaKlein], episodes.GetPodcast(225),
    1281
  ),
  new Soundbite(
    "I Want to Smell Feet",
    SB.Hila_IWantToSmellFeet,
    [P.HilaKlein], episodes.GetPodcast(206),
    938
  ),
  new Soundbite(
    "Oop there it is",
    SB.Hila_OopThereItIs,
    [P.HilaKlein], episodes.GetAfterDark(25),
    9168
  ),
  new Soundbite(
    "I took it down okay",
    SB.HowieMandel_ITookItDownOkay,
    [P.HowieMandel], episodes.GetH3TV(57),
    204
  ),
  new Soundbite(
    "I'm growing my hair back people",
    SB.HowieMandel_GrowingMyHairBackPeople,
    [P.HowieMandel], episodes.GetAfterDark(77),
    5645
  ),
  new Soundbite(
    "The number one podcast in the world",
    SB.HowieMandel_TheNumberOnePodcast,
    [P.HowieMandel], episodes.GetOffTheRails(48),
    3505
  ),
  new Soundbite(
    "When my friend Neal bent over this happened",
    SB.HowieMandel_WhenMyFriendNeilBentOver,
    [P.HowieMandel], episodes.GetH3TV(42),
    829
  ),
  new Soundbite(
    "I Gotta Pee so Bad",
    SB.Ian_IGottaPeeSoBad,
    [P.IanSlater], episodes.GetPodcast(106),
    5667
  ),
  new Soundbite(
    "I'm strokin pussy down here",
    SB.Ian_ImStrokingPussyDownHere,
    [P.IanSlater], episodes.GetPodcast(236),
    71
  ),
  new Soundbite(
    "I've been chuggin the waaater",
    SB.Ian_IveBeenChugginTheWater,
    [P.IanSlater], episodes.GetPodcast(169),
    4987
  ),
  new Soundbite(
    "I've got news for you That means youre gay",
    SB.IceT_ThatMeansYourGay,
    [P.IceT], episodes.GetPodcast(234),
    63
  ),
  new Soundbite(
    "Let's get glam",
    SB.JamesCharles_LetsGetGlam,
    [P.JamesCharles], episodes.GetAfterDark(18),
    2141
  ),
  new Soundbite(
    "Ohhh nooOooo",
    SB.JamesCharles_OhhhNooOoo,
    [P.JamesCharles], episodes.GetAfterDark(18),
    41
  ),
  new Soundbite(
    "Spooked Magooked",
    SB.JamesCharles_SpookedMagooked,
    [P.JamesCharles], episodes.GetAfterDark(19),
    9234
  ),
  new Soundbite(
    "WOMP WOMP WOMP",
    SB.JamesCharles_WompWompWomp,
    [P.JamesCharles], episodes.GetPodcast(242),
    389
  ),
  new Soundbite(
    "YEAH YEAH YEAAAAAH",
    SB.JamesCharles_YeaaAaaeeeEeeaaAaaeeeEeeeEAaaaaH,
    [P.JamesCharles], episodes.GetPodcast(242),
    389
  ),
  new Soundbite(
    "Okay Ethan",
    SB.JeffWittek_OkayEthan,
    [P.JeffWittek], episodes.GetFrenemies(26),
    7844
  ),
  new Soundbite(
    "HE CAN'T KEEP GETTING AWAY WITH IT",
    SB.JessePinkman_HeCantKeepGettingAwayWithIt,
    [P.JessePinkman], episodes.GetPodcast(238),
    480
  ),
  new Soundbite(
    "WAN/WDan",
    SB.Jidion_Wan,
    [P.Jidion], episodes.GetH3TV(47),
    2553
  ),
  new Soundbite(
    "WAN/WDan",
    SB.Jidion_WDan,
    [P.Jidion], episodes.GetH3TV(47),
    2553
  ),
  
  new Soundbite(
    "A-a-a-AAAuuuudiooOoOOo",
    SB.JimmieLeE_AAAuuuudiooOoOOo,
    [P.JimmieLee], episodes.GetAfterDark(75),
    5963
  ),
  new Soundbite(
    "All different flavors 1",
    SB.JimmieLee_AllDifferentFlavors1,
    [P.JimmieLee], episodes.GetPodcast(20),
    1631
  ),
  new Soundbite(
    "All different flavors 2",
    SB.JimmieLee_AllDifferentFlavors2,
    [P.JimmieLee], episodes.GetPodcast(262),
    5449
  ),
  new Soundbite(
    "AudioAudioAudio",
    SB.JimmieLee_AudioAudioAudio,
    [P.JimmieLee], episodes.GetOffTheRails(29),
    3007
  ),
  new Soundbite(
    "I Got my Eye on You",
    SB.JimmieLee_GotMyEyeOnYou,
    [P.JimmieLee], episodes.GetOffTheRails(29),
    3667
  ),
  new Soundbite(
    "Benefits Everybody",
    SB.JoeBiden_BenefitsEverybody,
    [P.JoeBiden], episodes.GetAfterDark(36),
    4806
  ),
  new Soundbite(
    "C'mon Man",
    SB.JoeBiden_CmonMan,
    [P.JoeBiden], episodes.GetAfterDark(20),
    7
  ),
  new Soundbite(
    "Dan's a good man",
    SB.JoeBiden_DansAGoodMan,
    [P.JoeBiden], episodes.GetAfterDark(28),
    435
  ),
  new Soundbite(
    "Get your words straight Jack",
    SB.JoeBiden_GetYourWordsStraightJack,
    [P.JoeBiden], episodes.GetPodcast(164),
    4810
  ),
  new Soundbite(
    "Go to Joe 30330",
    SB.JoeBiden_GoToJoe30330,
    [P.JoeBiden], episodes.GetPodcast(133),
    2598
  ),
  new Soundbite(
    "Guess what It grows the economy",
    SB.JoeBiden_GuessWhatItGrowsTheEconomy,
    [P.JoeBiden], episodes.GetAfterDark(36),
    4806
  ),
  new Soundbite(
    "Hurts nobody",
    SB.JoeBiden_HurtsNobody,
    [P.JoeBiden], episodes.GetAfterDark(36),
    4806
  ),
  new Soundbite(
    "I got hairy legs",
    SB.JoeBiden_IGotHairyLegs,
    [P.JoeBiden], episodes.GetPodcast(163),
    4738
  ),
  new Soundbite(
    "I love kids jumping on my lap",
    SB.JoeBiden_ILoveKidsJumpinOnMyLap,
    [P.JoeBiden], episodes.GetPodcast(163),
    4765
  ),
  new Soundbite(
    "Look fat here's the deal",
    SB.JoeBiden_LookFat,
    [P.JoeBiden], episodes.GetPodcast(164),
    4867
  ),
  new Soundbite(
    "That-Th-ThatThat...",
    SB.JoeBiden_ThatThThatThat,
    [P.JoeBiden], episodes.GetPodcast(163),
    4738
  ),
  new Soundbite(
    "You're a lying dog face pony soldier",
    SB.JoeBiden_DogFaceLyingPonySoldier,
    [P.JoeBiden], episodes.GetPodcast(180),
    1700
  ),
  new Soundbite(
    "Eat out my ass",
    SB.JoePesci_EatOutMyAss,
    [P.JoePesci], episodes.GetAfterDark(7),
    2876
  ),
  new Soundbite(
    "It's the bitches thatll getcha",
    SB.JoePesci_ItsTheBitchesThatllGetcha,
    [P.JoePesci], episodes.GetAfterDark(7),
    2937
  ),
  new Soundbite(
    "5% difference is Astronomical",
    SB.JoeRogan_FivePercentDifferentIsAstronomical,
    [P.JoeRogan], episodes.GetAfterDark(42),
    9070
  ),
  new Soundbite(
    "5% means everything",
    SB.JoeRogan_FivePercentMeansEverything,
    [P.JoeRogan], episodes.GetAfterDark(42),
    9070
  ),
  new Soundbite(
    "I'm not a doctor Im a fucking moron",
    SB.JoeRogan_ImNotADoctor,
    [P.JoeRogan], episodes.GetAfterDark(37),
    4350
  ),
  new Soundbite(
    "Human Fecal Matter",
    SB.JohnnyDep_HumanFecalMatter,
    [P.JohnnyDepp], episodes.GetAfterDark(70),
    10683
  ),
  new Soundbite(
    "I saw my maternal grandmother...",
    SB.JordanPeterson_Grandma,
    [P.JordanPeterson], episodes.GetAfterDark(73),
    2742
  ),
  new Soundbite(
    "Joker Church",
    SB.JordanPeterson_JokerChurch,
    [P.JordanPeterson], episodes.GetAfterDark(77),
    7814
  ),
  new Soundbite(
    "Sorry not beautiful",
    SB.JordanPeterson_SorryNotBeautiful,
    [P.JordanPeterson], episodes.GetLeftovers(16),
    2750
  ),
  new Soundbite(
    "Up yours woke moralists",
    SB.JordanPeterson_UpYoursWokeMoralists,
    [P.JordanPeterson], episodes.GetOffTheRails(41),
    10311
  ),
  new Soundbite(
    "What rules you sons a bitches",
    SB.JordanPeterson_WhatRulesYouSonsABitches,
    [P.JordanPeterson], episodes.GetOffTheRails(41),
    6938
  ),
  new Soundbite(
    "What the hell are we gonna do without men",
    SB.JordanPeterson_WhatAreWeGonnaDoWithoutMen,
    [P.JordanPeterson], episodes.GetH3TV(12),
    657
  ),
  new Soundbite(
    "If I speak I am in big trouble",
    SB.JoseMourinho_IfISpeakIAmInBigTrouble,
    [P.JoseMourinho], episodes.GetOffTheRails(51),
    7105
  ),
  new Soundbite(
    "Baby I wasn't trying",
    SB.JustinBeiber_BabyIWasntLying,
    [P.JustinBieber], episodes.GetFamilies(4),
    4914
  ),
  new Soundbite(
    "He takes that 5%",
    SB.KalliMetz_HeTakesThat5Percent,
    [P.KalliMetz], episodes.GetAfterDark(41),
    2339
  ),
  new Soundbite(
    "AHHHHHHHHHHHHHHHHHHHHHHHHH",
    SB.Keemstar_Screaming,
    [P.Keemstar], episodes.GetH3TV(44),
    7018
  ),
  new Soundbite(
    "ANIMALS DIE",
    SB.Keemstar_ANIMALSDIE,
    [P.Keemstar], episodes.GetOffTheRails(17),
    1370
  ),
  new Soundbite(
    "Box me bitch",
    SB.Keemstar_BoxMeBitch,
    [P.Keemstar], episodes.GetOffTheRails(9),
    1008
  ),
  new Soundbite(
    "Death to all Jews",
    SB.Keemstar_DeathToAllJews,
    [P.Keemstar], episodes.GetAfterDark(10),
    873
  ),
  new Soundbite(
    "GARBAGE",
    SB.Keemstar_GARBAGE,
    [P.Keemstar], episodes.GetFrenemies(15),
    2580
  ),
  new Soundbite(
    "Im busted",
    SB.Keemstar_ImBusted,
    [P.Keemstar], episodes.GetOffTheRails(22),
    4258
  ),
  new Soundbite(
    "In a book HUH",
    SB.Keemstar_ItWasUsedInABookHUH,
    [P.Keemstar], episodes.GetH3TV(7),
    3708
  ),
  new Soundbite(
    "It's like a Romeo Julia",
    SB.Keemstar_ItsLikeARomeoJulia,
    [P.Keemstar], episodes.GetPodcast(231),
    1756
  ),
  new Soundbite(
    "Keemstars rimshot",
    SB.Misc_KeemstarsRimshot,
    [P.Keemstar], episodes.GetOffTheRails(57),
    6093
  ),
  new Soundbite(
    "MURDER ANIMALS",
    SB.Keemstar_MURDERANIMALS,
    [P.Keemstar], episodes.GetOffTheRails(17),
    1277
  ),
  new Soundbite(
    "SO FRUSTRATING",
    SB.Keemstar_SOFRUSTRATING,
    [P.Keemstar], episodes.GetOffTheRails(22),
    4258
  ),
  new Soundbite(
    "That Makes Sense",
    SB.Keemstar_ThatMakesSense,
    [P.Keemstar], episodes.GetH3TV(59),
    4995
  ),
  new Soundbite(
    "This dumb motherfucker AB",
    SB.Keemstar_ThisDumbFuckerAB,
    [P.Keemstar], episodes.GetH3TV(30),
    7714
  ),
  new Soundbite(
    "Why are you so cute when you talk shit",
    SB.Keemstar_WhyAreYouSoCuteWhenYouTalkShit,
    [P.Keemstar], episodes.GetH3TV(24),
    6369
  ),
  new Soundbite(
    "COVID 19",
    SB.KennethCopeland_COVID19,
    [P.KennethCopeland], episodes.GetPodcast(232),
    4457
  ),
  new Soundbite(
    "Do you see it",
    SB.KennethCopeland_DoItSeeIt,
    [P.KennethCopeland], episodes.GetOffTheRails(11),
    3613
  ),
  new Soundbite(
    "I'm healed in the name of Jesus",
    SB.KennethCopeland_ImHealedInTheNameOfJesus,
    [P.KennethCopeland], episodes.GetPodcast(235),
    1160
  ),
  new Soundbite(
    "Jesus is your source",
    SB.KennethCopeland_JesusIsYourSource,
    [P.KennethCopeland], episodes.GetPodcast(232),
    890
  ),
  new Soundbite(
    "Watch that demon die",
    SB.KennethCopeland_WatchThatDemonDie,
    [P.KennethCopeland], episodes.GetPodcast(232),
    4281
  ),
  new Soundbite(
    "What are we gonna do",
    SB.KennethCopeland_WhatAreWeGonnaDo,
    [P.KennethCopeland], episodes.GetPodcast(232),
    884
  ),
  new Soundbite(
    "Get your fucking ass up and work",
    SB.KimKhardashian_GetYourAssUpAndWork,
    [P.KimKhardashian], episodes.GetAfterDark(68),
    13196
  ),
  new Soundbite(
    "It seems like nobody wants to work these days",
    SB.KimKardashian_NobodyWantsToWorkTheseDays,
    [P.KimKhardashian], episodes.GetAfterDark(68),
    13198
  ),
  new Soundbite(
    "Leaving my friendships BEHHIND",
    SB.Kornbread_LeavinMyFriendshipsBehiiind,
    [P.KornBread], episodes.GetAfterDark(88),
    7571
  ),
  new Soundbite(
    "Close the Trunk",
    SB.KrisJenner_CloseTheTrunk,
    [P.KrisJenner], episodes.GetOffTheRails(33),
    3919
  ),
  new Soundbite(
    "How you gonna milk an oat?!",
    SB.LiverKing_HowYouGonnaMilkAnOat,
    [P.LiverKing], episodes.GetLeftovers(26),
    2061
  ),
  new Soundbite(
    "♫ Dink Doink is my favorite coin ♪",
    SB.Misc_DinkDoinkYoureMyFavoriteCoin,
    [P.Misc], episodes.GetOffTheRails(5),
    3474,
    "https://i.ytimg.com/vi/ZIwz3JbnqAc/maxresdefault.jpg"
  ),
  new Soundbite(
    "I don't really give a fuck but thanks for letting me know",
    SB.LoganPaul_IDontReallyGiveAFuck,
    [P.LoganPaul], episodes.GetPodcast(201),
    2086
  ),
  new Soundbite(
    "AB did that everyone saw that",
    SB.Love_AbDidThatEveryoneSawThat,
    [P.Love], episodes.GetH3TV(10),
    8454
  ),
  new Soundbite(
    "Anyone here from Arizona",
    SB.Love_AnyoneHereFromArizona,
    [P.Love], episodes.GetH3TV(30),
    3008
  ),
  new Soundbite(
    "God damn rascal",
    SB.Love_GodDamnRascal,
    [P.Love], episodes.GetH3TV(30),
    3023
  ),
  new Soundbite(
    "You guys are a bunch of pussies",
    SB.Love_YouGuysAreABunchOfPussies,
    [P.Love], episodes.GetH3TV(21),
    8053
  ),
  new Soundbite(
    "Have-have a good night",
    SB.MarcElliot_HaveAGoodNight,
    [P.MarcElliot], episodes.GetH3TV(66),
    6909
  ),
  new Soundbite(
    "Anal Licking",
    SB.MartinSsempa_AnalLicking,
    [P.MartinSsempa], episodes.GetAfterDark(3),
    7148
  ),
  new Soundbite(
    "Deepah",
    SB.MartinSsempa_Deepah,
    [P.MartinSsempa], episodes.GetAfterDark(3),
    7366
  ),
  new Soundbite(
    "Eat Da Poo Poo",
    SB.MartinSsempa_EatThePooPoo,
    [P.MartinSsempa], episodes.GetAfterDark(3),
    7187
  ),
  new Soundbite(
    "This is seeck",
    SB.MartinSsempa_ThisIsSick,
    [P.MartinSsempa], episodes.GetAfterDark(3),
    7328
  ),
  new Soundbite(
    "I know it was you Fredo",
    SB.MichaelCorleon_IKnowItWasYouFredo,
    [P.MichaelCorleone], episodes.GetPodcast(233),
    3053
  ),
  new Soundbite(
    "KIM KARDASHIAN",
    SB.Mikayla_KIMKARDASHIAN,
    [P.MikaylaNogueira], episodes.GetOffTheRails(72),
    1847
  ),
  new Soundbite(
    "This filter is suppose to make you look like BAHBEE",
    SB.Mikayla_LookLikeBarbie,
    [P.MikaylaNogueira], episodes.GetOffTheRails(74),
    10365
  ),
  new Soundbite(
    "JESUS CROIST",
    SB.MikeServin_JESUSCROIST,
    [P.MikeServin], episodes.GetPodcast(103),
    2329
  ),
  new Soundbite(
    "Excuse me sir",
    SB.MobilityMary_ExcuseMeSir,
    [P.MobilityMary], episodes.GetPodcast(135),
    1619
  ),
  new Soundbite(
    "It's a disability mobility",
    SB.MobilityMary_ItsADisabilityMobility,
    [P.MobilityMary], episodes.GetPodcast(135),
    1693
  ),
  new Soundbite(
    "Hello",
    SB.Ninja_Hello,
    [P.Ninja], episodes.GetAfterDark(84),
    2736
  ),
  new Soundbite(
    "I can't control my GOOOOO",
    SB.Ninja_CantControlMyGoo,
    [P.Ninja], episodes.GetOffTheRails(52),
    1758
  ),
  new Soundbite(
    "I thought it was free speech",
    SB.Ninja_IThoughtItWasFreeSpeech,
    [P.Ninja], episodes.GetOffTheRails(54),
    376
  ),
  new Soundbite(
    "Thank you for the gifted Crew pack",
    SB.Ninja_ThankingCrewForTheGifted,
    [P.Ninja], episodes.GetOffTheRails(44),
    3257
  ),
  new Soundbite(
    "Yayayayayay woooooooooooo",
    SB.Ninja_YayayayayaYAYAYAYAWOOOOOOOOO_,
    [P.Ninja], episodes.GetOffTheRails(51),
    10417
  ),
  new Soundbite(
    "He's so cool",
    SB.Misc_HesSoCool,
    [P.Misc], episodes.GetAfterDark(51),
    6911,
    "https://blenderartists.org/uploads/default/original/4X/1/b/c/1bcbdf89b5356cf8e5a36245df1bef080764df52.jpeg"
  ),
  new Soundbite(
    "Uhg it's so awkward",
    SB.NoahBeck_UhgItsSoAwkward,
    [P.NoahBeck], episodes.GetAfterDark(43),
    7433
  ),
  new Soundbite(
    "Yo Triller my thing is flipped",
    SB.NoahBeck_YoTrillerMyThingsFlipped,
    [P.NoahBeck], episodes.GetAfterDark(43),
    7422
  ),
  new Soundbite(
    "What the fuck",
    SB.OliverTree_WhatTheFuck,
    [P.OliverTree], episodes.GetPodcast(198),
    502
  ),
  new Soundbite(
    "I got my prostate milked by Ethan Klein",
    SB.Olivia_IGotMyProstateMilked,
    [P.OliviaLopez], episodes.GetOffTheRails(45),
    1932
  ),
  new Soundbite(
    "It's happening",
    SB.Olivia_ITSHAPPENING,
    [P.OliviaLopez], episodes.GetH3TV(57),
    322
  ),
  new Soundbite(
    "Thank you for the gifted",
    SB.Olivia_ThankYouForTheGifted,
    [P.OliviaLopez], episodes.GetH3TV(51),
    5781
  ),
  new Soundbite(
    "NEVER BE A BETA",
    SB.OwenCook_NeverBeABeta,
    [P.OwenCook], episodes.GetAfterDark(50),
    4459
  ),
  new Soundbite(
    "This is the first time for me in the Marvel Universe",
    SB.OwenWilson_ThisIsTheFirstTimeForMe,
    [P.OwenWilson], episodes.GetAfterDark(41),
    723
  ),
  new Soundbite(
    "Lets go!",
    SB.PandP_LetsGooo,
    [P.PAndP], episodes.GetAfterDark(71),
    4981
  ),
  new Soundbite(
    "He has no pizza experience",
    SB.PapaJohn_HeHasNoPizzaExperience,
    [P.PapaJohn], episodes.GetPodcast(161),
    1289
  ),
  new Soundbite(
    "He's never been in the pizza category",
    SB.PapaJohn_HesNeverBeenInThePizzaCategory,
    [P.PapaJohn], episodes.GetPodcast(161),
    1292
  ),
  new Soundbite(
    "I love pizza and I love people",
    SB.PapaJohn_ILovePizzaAndILovePeople,
    [P.PapaJohn], episodes.GetPodcast(174),
    80
  ),
  new Soundbite(
    "Pizza's actually very nutricious",
    SB.PapaJohn_PizzaIsActuallyVeryNutricious,
    [P.PapaJohn], episodes.GetPodcast(174),
    1036
  ),
  new Soundbite(
    "Semen is another kind of milk",
    SB.PastorManning_SemenIsAnotherKindOfMilk,
    [P.PastorManning], episodes.GetAfterDark(26),
    5711
  ),
  new Soundbite(
    "Victory victory victory victory",
    SB.PaulaWhite_VictoryVictoryVictoryVictory,
    [P.PaulaWhite], episodes.GetAfterDark(11),
    2364
  ),
  new Soundbite(
    "Sucking a Smoko",
    SB.PrinceHarry_SuckingASmoko,
    [P.PrinceHarry], episodes.GetOffTheRails(57),
    3284
  ),
  new Soundbite(
    "Todger",
    SB.PrinceHarry_Todger,
    [P.PrinceHarry], episodes.GetOffTheRails(57),
    3002
  ),
  new Soundbite(
    "Dan is the Queen, can't do nothing wrong!",
    SB.RichLux_DanIsTheQueen,
    [P.RichLux], episodes.GetEpisodeByTitle("See You Next Tuesday #31")!,
    2805
  ),
  
  new Soundbite(
    "I'm warning you with peace and love",
    SB.RingoStarr_ImWarningYouWithPeaceAndLove,
    [P.RingoStarr], episodes.GetPodcast(205),
    3744
  ),
  new Soundbite(
    "Thank you, thank you",
    SB.RingoStarr_ThankYouThankYou,
    [P.RingoStarr], episodes.GetPodcast(205),
    3750
  ),
  new Soundbite(
    "Do you have your passports did you get your shots",
    SB.RKelly_DoYouHaveYouPassports,
    [P.RKelly], episodes.GetPodcast(107),
    3550
  ),
  new Soundbite(
    "What are you afraid of Ian",
    SB.RoloTony_WhatAreYouAfraidOfIan,
    [P.RoloTony], episodes.GetOffTheRails(26),
    7942
  ),
  new Soundbite(
    "I THOUGHT THE BITCH WAS WHITE",
    SB.RoseanneBarr_IThoughtTheBitchWasWhite,
    [P.RoseanneBarr], episodes.GetPodcast(75),
    4100
  ),
  new Soundbite(
    "Anal sex",
    SB.RudyGuiliani_AnalSex,
    [P.RudyGiuliani], episodes.GetPodcast(242),
    4119
  ),
  new Soundbite(
    "It's a sexual dance",
    SB.RudyGuiliani_ItsASexualDance,
    [P.RudyGiuliani], episodes.GetPodcast(242),
    4105
  ),
  new Soundbite(
    "Time to take a short break",
    SB.RudyGuiliani_TimeToTakeAShortBreak,
    [P.RudyGiuliani], episodes.GetPodcast(242),
    4671
  ),
  new Soundbite(
    "An innappropriate relationship with a 14 year old Natalie Portman",
    SB.RyanKavanaugh_14YearOldNataliePortman,
    [P.RyanKavanaugh], episodes.GetH3TV(21),
    4678
  ),
  new Soundbite(
    "Too much wine sorry",
    SB.RyanKavanaugh_TooMuchWineSorry,
    [P.RyanKavanaugh], episodes.GetH3TV(21),
    4704
  ),
  new Soundbite(
    "KIM KARDASHIAN",
    SB.Sam_KIMKARDASHIAN,
    [P.SamTemple], episodes.GetOffTheRails(72),
    1847
  ),
  new Soundbite(
    "Why are you gay",
    SB.SimonKaggwa_WhyAreYouGay,
    [P.SimonKaggwaNjala], episodes.GetAfterDark(3),
    6854
  ),
  new Soundbite(
    "FUCK",
    SB.SnoopDogg_FUCK,
    [P.SnoopDogg], episodes.GetPodcast(238),
    2514
  ),
  new Soundbite(
    "We are gay we are straight",
    SB.Misc_WeAreGayWeAreStraight,
    [P.Misc], episodes.GetH3TV(62),
    10749
  ),
  new Soundbite(
    "♪ DAN THE HATER!! ♪ ♪",
    SB.Misc_DanTheHater,
    [P.Dan], episodes.GetAfterDark(24),
    5418,
    "https://preview.redd.it/dan-is-the-man-v0-jtuahoa1g1z91.png?width=853&format=png&auto=webp&s=c5af8f6d42ad017ed3df858ad842f4b69fd08ea2"
  ),
  new Soundbite(
    "I had no idea this was going to happen",
    SB.StevenCrowder_IHadNoIdeaThisWasGoingToHappen,
    [P.StevenCrowder], episodes.GetPodcast(248),
    639
  ),
  new Soundbite(
    "I thought Ethan was a stand up guy",
    SB.StevenCrowder_EthanStandUpGuy,
    [P.StevenCrowder], episodes.GetPodcast(248),
    645
  ),
  new Soundbite(
    "That doesn't work for me eiiiither",
    SB.StevenCrowder_ThatDoesntWorkEither,
    [P.StevenCrowder], episodes.GetAfterDark(103),
    3345
  ),
  new Soundbite(
    "You don't even have to think about it dude",
    SB.StevenCrowder_YouDontEvenHaveToThinkAboutIt,
    [P.StevenCrowder], episodes.GetAfterDark(38),
    7471
  ),
  new Soundbite(
    "What da fuck",
    SB.Theodore_WhatTheFuck,
    [P.TheodoreKlein], episodes.GetH3TV(21),
    552
  ),
  new Soundbite(
    "I'm not taking a pause to SHIT ALL OVER THE FLOOR",
    SB.TheQuartering_ImNotTakingAPauseToSHITALLOVERTHEFLOOR,
    [P.TheQuartering], episodes.GetOffTheRails(21),
    8421
  ),
  new Soundbite(
    "There's shit all over the floor",
    SB.TheQuartering_TheresSHITALLOVERTHEFLOOR,
    [P.TheQuartering], episodes.GetAfterDark(54),
    6699
  ),
  new Soundbite(
    "You know you get that crotch rot",
    SB.TheQuartering_YouGetThatCrotchRot,
    [P.TheQuartering], episodes.GetAfterDark(54),
    7649
  ),
  new Soundbite(
    "Shut up Bitch",
    SB.TheRock_ShutUpBitch,
    [P.TheRock], episodes.GetPodcast(244),
    4730
  ),
  new Soundbite(
    "A bag of turd you know a flaming turd bag",
    SB.TimPool_FlamingTurdBag,
    [P.TimPool], episodes.GetAfterDark(43),
    2709
  ),
  new Soundbite(
    "Ethan Klein is damaging everything making it all worse",
    SB.TimPool_EthanKleinIsDamagingEverything,
    [P.TimPool], episodes.GetAfterDark(43),
    2309
  ),
  new Soundbite(
    "Cheers my dude",
    SB.Tipster_CheersMyDude,
    [P.Tipster], episodes.GetAfterDark(110),
    14
  ),
  new Soundbite(
    "And it's become your family's heart and soul",
    SB.TomSelleck_AndItSBecomeYourFamiliesHeartAndSoul,
    [P.TomSelleck], episodes.GetAfterDark(6),
    6872
  ),
  new Soundbite(
    "It's Just a Loan",
    SB.TomSelleck_ItsJustALoan,
    [P.TomSelleck], episodes.GetAfterDark(6),
    6731
  ),
  new Soundbite(
    "Fat fat fatty",
    SB.TrishaPaytas_YoureFatFatFatty,
    [P.TrishaPaytas], episodes.GetFrenemies(4),
    2772
  ),
  new Soundbite(
    "Fuck you Dan",
    SB.TrishaPaytas_FuckYouDan,
    [P.TrishaPaytas], episodes.GetPodcast(152),
    3900
  ),
  new Soundbite(
    "Big massive dumps",
    SB.DonaldTrump_BigMassiveDumps,
    [P.DonaldTrump], episodes.GetPodcast(228),
    6642
  ),
  new Soundbite(
    "Dan please stand up",
    SB.DonaldTrump_DanPleaseStandUp,
    [P.DonaldTrump], episodes.GetOffTheRails(22),
    3973
  ),
  new Soundbite(
    "Ethan please stand up",
    SB.DonaldTrump_EthanPleaseStandUp,
    [P.DonaldTrump], episodes.GetOffTheRails(22),
    3973
  ),
  new Soundbite(
    "Hey Dan that's not bad huh",
    SB.DonaldTrump_HeyDanThatsNotBadHuh,
    [P.DonaldTrump], episodes.GetAfterDark(15),
    2333
  ),
  new Soundbite(
    "I did everything right and the indicted me",
    SB.DonaldTrump_IDidEverythingRightAndTheyIndictedMe,
    [P.DonaldTrump], episodes.GetLeftovers(50),
    2458
  ),
  new Soundbite(
    "I LOVE IT",
    SB.DonaldTrump_ILoveIt,
    [P.DonaldTrump], episodes.GetPodcast(206),
    1966
  ),
  new Soundbite(
    "Ian please stand up",
    SB.DonaldTrump_IanPleaseStandUp,
    [P.DonaldTrump], episodes.GetOffTheRails(22),
    3973
  ),
  new Soundbite(
    "I'll just give ya a big fat kiss",
    "",
    [P.DonaldTrump], episodes.GetAfterDark(10),
    760
  ),
  new Soundbite(
    "I'll kiss the GUYS and the BEAUTIFUL WOMEN",
    "",
    [P.DonaldTrump], episodes.GetPodcast(243),
    1402
  ),
  new Soundbite(
    "They call em dumps",
    SB.DonaldTrump_TheyCallThemDumps,
    [P.DonaldTrump], episodes.GetPodcast(228),
    6717
  ),
  new Soundbite(
    "We do a little trolling it's called we do a little trolling",
    SB.DonaldTrump_WeDoALittleTrolling,
    [P.DonaldTrump], episodes.GetH3TV(4),
    5723
  ),
  new Soundbite(
    "We love you you're very special",
    SB.DonaldTrump_WeLoveYouYoureVerySpecial,
    [P.DonaldTrump], episodes.GetPodcast(230),
    2119
  ),
  new Soundbite(
    "We need to keep our country gay brup bup",
    SB.DonaldTrump_KeepOurCountryGayAgainBupBup,
    [P.DonaldTrump], episodes.GetAfterDark(87),
    2498
  ),
  new Soundbite(
    "Sorry about your dad passing away",
    SB.UncleGabe_ImSorryAboutYourDadPassingAway,
    [P.Gabe], episodes.GetAfterDark(84),
    1299
  ),
  new Soundbite(
    "Someone save me",
    SB.VinDiesel_SomeoneSaveMe,
    [P.VinDiesel], episodes.GetPodcast(21),
    1317
  ),
  new Soundbite(
    "Talk to me Baby",
    SB.VinDiesel_TalkToMeBaby,
    [P.VinDiesel], episodes.GetPodcast(21),
    1164
  ),
  new Soundbite(
    "When did this turn into beautiful world",
    SB.VinDiesel_WhenDidThisTurnIntoBeautifulWorld,
    [P.VinDiesel], episodes.GetPodcast(21),
    1318
  ),
  new Soundbite(
    "Wow man",
    SB.VinDiesel_WowMan,
    [P.VinDiesel], episodes.GetPodcast(21),
    1192
  ),
  new Soundbite(
    "Family",
    SB.Misc_Family,
    [P.Misc], episodes.GetAfterDark(60),
    3459,
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/Vin-Diesel-look-a-likes-family.jpg"
  ),
  new Soundbite(
    "Clap if you think she should suffer",
    SB.WendyWilliams_ClapIfYouThinkSheShouldSuffer,
    [P.WendyWilliams], episodes.GetAfterDark(44),
    468
  ),
  new Soundbite(
    "Death to all of them",
    SB.WendyWilliams_DeathToAllOfThem,
    [P.WendyWilliams], episodes.GetOffTheRails(3),
    654
  ),
  new Soundbite(
    "DIE DIE DIE",
    SB.WendyWilliams_DIEDIEDIE,
    [P.WendyWilliams], episodes.GetAfterDark(66),
    5957
  ),
  new Soundbite(
    "Isolated Fart",
    SB.WendyWilliams_Fart,
    [P.WendyWilliams], episodes.GetAfterDark(29),
    4819
  ),
  new Soundbite(
    "Just Sayin'",
    SB.WendyWilliams_JustSayin,
    [P.WendyWilliams], episodes.GetAfterDark(47),
    394
  ),
  new Soundbite(
    "Excuse me AH",
    SB.WilliamKnight_ExcuseMeAHH,
    [P.WilliamKnight], episodes.GetAfterDark(43),
    5569
  ),
  new Soundbite(
    "There's no such thing as a coincidence",
    SB.WilliamKnight_TheresNoSuchThingAsACoincidence,
    [P.WilliamKnight], episodes.GetAfterDark(35),
    7214
  ),
  new Soundbite(
    "Oh my God",
    SB.WilliamShatner_OhMyGod,
    [P.WilliamShatner], episodes.GetOffTheRails(22),
    8371
  ),
  new Soundbite(
    "Oh I'm telling you",
    SB.WilliamShatner_OhImTellingYou,
    [P.WilliamShatner], episodes.GetOffTheRails(22),
    8378
  ),
  new Soundbite(
    "Oh Jesus",
    SB.WilliamShatner_OhJesus,
    [P.WilliamShatner], episodes.GetOffTheRails(22),
    8357
  ),
  new Soundbite(
    "auugh",
    SB.WillSmith_Ahhh,
    [P.WillSmith], episodes.GetPodcast(98),
    9806
  ),
  new Soundbite(
    "Fortnite",
    SB.WillSmith_Fortnite,
    [P.WillSmith], episodes.GetPodcast(98),
    9806
  ),
  new Soundbite(
    "It's rewind time",
    SB.WillSmith_ItsRewindTime,
    [P.WillSmith], episodes.GetPodcast(98),
    9806
  ),
  new Soundbite(
    "That's hot",
    SB.WillSmith_ThatsHot,
    [P.WillSmith], episodes.GetPodcast(98),
    9806
  ),
  new Soundbite(
    "Yaahh",
    SB.WillSmith_ThatsHot,
    [P.WillSmith], episodes.GetPodcast(98),
    9806
  ),
  new Soundbite(
    "A CARROTAH",
    SB.XQC_ACarrotah,
    [P.XQC], episodes.GetOffTheRails(59),
    5985
  ),
  new Soundbite(
    "Get yo balls off my face man",
    SB.XQC_GetYourBallsOffMyFace,
    [P.XQC], episodes.GetLeftovers(25),
    468
  ),
  new Soundbite(
    "FAT FAT FAT FAT",
    SB.XQC_FatFatFatFat,
    [P.XQC], episodes.GetH3TV(77),
    2838
  ),
  new Soundbite(
    "Mohney",
    SB.YilongMa_Money,
    [P.YiLongMa], episodes.GetPodcast(257),
    3286
  ),
  new Soundbite(
    "I'm not a cat",
    SB.Misc_ImNotACat,
    [P.Misc], episodes.GetPodcast(235),
    3712,
    "https://images.mktw.net/im-297079?width=1280&size=1"
  ),
  
  new Soundbite(
    "Who you kiddin' eh",
    SB.AB_WhoYouKiddingEh,
    [P.AB], episodes.GetEpisodeByTitle("Content Court: The ACE Family")!,
    207
  ),
  
  new Soundbite(
    "I Need That Clout",
    SB.AustinMcBroom_INeedThatClout,
    [P.AustinMcBroom],
    episodes.GetEpisodeByTitle("Content Court: The ACE Family"),
    1200
  ),
  new Soundbite(
    "I'm itching for that clout pill",
    SB.AustinMcBroom_ImItchingForThatCloutPill,
    [P.AustinMcBroom],
    episodes.GetEpisodeByTitle("Content Court: The ACE Family"),
    1200
  ),
  new Soundbite(
    "I might really start selling the clout pill",
    SB.AustinMcBroom_SellingTheCloutPill,
    [P.AustinMcBroom],
    episodes.GetEpisodeByTitle("Content Court: The ACE Family"),
    4010
  ),
  new Soundbite(
    "STOPPPPP",
    SB.AustinMcBroom_Stop,
    [P.AustinMcBroom],
    episodes.GetEpisodeByTitle("Content Court: The ACE Family"),
    493
  ),
  new Soundbite(
    "So thick",
    SB.BelleDelphine_SoThick,
    [P.BelleDelphine], episodes.GetPodcast(225),
    4539
  ),
  new Soundbite(
    "BITCONNNNECT",
    SB.CarlosMatos_BITCONNNNECT,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    )!,
    49
  ),
  new Soundbite(
    "Hey hey heyyyy",
    SB.CarlosMatos_HEYHEYHEYYYY,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    )!,
    36
  ),
  new Soundbite(
    "Mmmm NO NO NO",
    SB.CarlosMatos_MmmMmmNoNoNo,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    )!,
    113
  ),
  new Soundbite(
    "What am I gonna do",
    SB.CarlosMatos_WhatAmIGonnaDo,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    )!,
    356
  ),
  
  new Soundbite(
    "Did you bring condoms",
    SB.ChrisHansen_DidYouBringCondoms,
    [P.ChrisHansen], new JeffEpisode()
  ),
  new Soundbite(
    "*breathes*",
    SB.CorpseHusband_Breaths,
    [P.CorpseHusband], new JeffEpisode()
  ),
  new Soundbite(
    "I'm so sorry to interrupt we gotta go to break",
    SB.Dan_ImSoSorryToInterrupt,
    [P.Dan], episodes.GetPodcast(148),
    2058
  ),
  new Soundbite(
    "I smoke marijuana so I don't beat my wife and children",
    SB.DanaWhite_ISmokeSoIDontBeatMyWifeAndChildren,
    [P.DanaWhite], new JeffEpisode()
  ),
  new Soundbite(
    "I guess I did something to piss of the Instagram God",
    SB.TrumpJr_IGuessIDidSomethingToPissOfTheInstagramGods,
    [P.TrumpJr], new JeffEpisode()
  ),
  new Soundbite(
    "Just watching my algorithms get crushed",
    SB.TrumpJr_JustWatchingMyAlgorithmsGetCrushed,
    [P.TrumpJr], new JeffEpisode()
  ),
  new Soundbite(
    "Blew my tits right off my fat body",
    SB.Ethan_BlewMyTits,
    [P.EthanKlein], new JeffEpisode()
  ),
  new Soundbite(
    "WOAAAAAAH",
    SB.Ethan_WOOOOAAAAH,
    [P.EthanKlein], new JeffEpisode()
  ),
  new Soundbite(
    "Hila's Ricegum laugh",
    SB.Hila_RiceGumLaugh,
    [P.HilaKlein], new JeffEpisode()
  ),
  new Soundbite(
    "What up big pimps",
    SB.Hila_WhatUpBigPimps,
    [P.HilaKlein], new JeffEpisode()
  ),
  new Soundbite(
    "You're in the wrong street cuz",
    SB.Hila_WrongStreetCuz,
    [P.HilaKlein], new JeffEpisode()
  ),
  new Soundbite(
    "I would call that uh FRAUD",
    SB.JaRule_IWouldCallThatFraud,
    [P.JaRule], new JeffEpisode()
  ),
  new Soundbite(
    "Thats FRAUD",
    SB.JaRule_ThatsFraud,
    [P.JaRule], new JeffEpisode()
  ),
  new Soundbite(
    "That's not fraud",
    SB.JaRule_ThatsNotFraud,
    [P.JaRule], new JeffEpisode()
  ),
  new Soundbite(
    "I would call that uh false advertising",
    SB.JaRule_IWouldCallThatFalseAdvertising,
    [P.JaRule], new JeffEpisode()
  ),
  new Soundbite(
    "Gotcha hat",
    SB.JakePaul_GotchaHat,
    [P.JakePaul], new JeffEpisode()
  ),
  new Soundbite(
    "Wow sister shnapped",
    SB.JamesCharles_SisterSnapped,
    [P.JamesCharles], new JeffEpisode()
  ),
  
  new Soundbite(
    "Sonic.exe",
    SB.JayStation_SonicExe,
    [P.JayStation], new JeffEpisode()
  ),
  new Soundbite(
    "What the frick",
    SB.Jaystation_WhatTheFrick,
    [P.JayStation], new JeffEpisode()
  ),
  new Soundbite(
    "Hell yes",
    SB.JeffBezos_HellYes,
    [P.JeffBezos], new JeffEpisode()
  ),
  new Soundbite(
    "*Evil Laugh*",
    SB.JeffBezos_Laughing,
    [P.JeffBezos], new JeffEpisode()
  ),
  new Soundbite(
    "Do not come",
    SB.KamalaHarris_DoNotCome,
    [P.KamalaHarris], new JeffEpisode()
  ),
  new Soundbite(
    "Oh Jesus",
    SB.KennethCopeland_OhJesus,
    [P.KennethCopeland], new JeffEpisode()
  ),
  new Soundbite(
    "Get out",
    SB.LilXan_GETOUT,
    [P.LilXan], episodes.GetPodcast(121),
    3473
  ),
  new Soundbite(
    "I'm a motha freakin blueberry",
    SB.LoganPaul_ImAMotherFreakingBlueberry,
    [P.LoganPaul], episodes.GetEpisodeByTitle(
      "THESE GLASSES CURED OUR COLOR BLINDNESS! FT. iDubbbzTV"
    ),
    684
  ),
  new Soundbite(
    "Let me tell you 'bout banana",
    SB.LoganPaul_LetMeTellYouAboutBanana,
    [P.LoganPaul], episodes.GetEpisodeByTitle(
      "THESE GLASSES CURED OUR COLOR BLINDNESS! FT. iDubbbzTV"
    ),
    684
  ),
  new Soundbite(
    "Ohoho Now I'm a strawberry",
    SB.LoganPaul_NowImAStrawberry,
    [P.LoganPaul], episodes.GetEpisodeByTitle(
      "THESE GLASSES CURED OUR COLOR BLINDNESS! FT. iDubbbzTV"
    ),
    684
  ),
  new Soundbite(
    "I'm the meat chef",
    SB.MarkZuckerberg_NowImTheMeatChef,
    [P.MarkZuckerberg], episodes.GetEpisodeByTitle("Becoming THE ZUCC (ft idubbbz)"),
    1035
  ),
  new Soundbite(
    "Joe Biden Wake Up",
    SB.Wali_JoeBidenWakeUp,
    [P.MohammadRajabWali], new JeffEpisode()
  ),
  new Soundbite(
    "My wife went out for pizza without me",
    SB.TheQuartering_MyWifeWentOutForPizzaWithoutMe,
    [P.TheQuartering], episodes.GetEpisodeByTitle("Content Court: TheQuartering"),
    3308
  ),
  new Soundbite(
    "I just pee'd in my basement",
    SB.TheQuartering_IJustPeedInMyBasement,
    [P.TheQuartering], episodes.GetEpisodeByTitle("Content Court: TheQuartering"),
    3369
  ),
  new Soundbite(
    "erhaha",
    SB.Ricegum_Laugh,
    [P.Ricegum], episodes.GetEpisodeByTitle("This YouTuber is Lying To You (H3H3)"),
    359
  ),
  new Soundbite(
    "Something is about to bust",
    SB.Misc_SomethingIsAboutToBust,
    [P.Misc], new JeffEpisode(),
    0,
    "https://media-cldnry.s-nbcnews.com/image/upload/MSNBC/Components/Video/201811/tdy_money_klg_gospel_choir_181102_1920x1080.jpg"
  ),
  new Soundbite(
    "Fuck you AB",
    SB.TrishaPaytas_FuckYouAB,
    [P.TrishaPaytas], new JeffEpisode()
  ),
  new Soundbite(
    "Bye Bye",
    SB.DonaldTrump_ByeBye,
    [P.DonaldTrump], new JeffEpisode()
  ),
  new Soundbite(
    "Okaaaay",
    SB.DonaldTrump_Okaaaay,
    [P.DonaldTrump], new JeffEpisode()
  ),
  new Soundbite(
    "HE'S STEALING IT",
    SB.Misc_HesStealingIt,
    [P.Misc], new JeffEpisode(),
    0,
    Faces.TrumpSupporter
  ),
  new Soundbite(
    "mmm-m-mm-m-mm-mm-m",
    SB.WendyWilliams_MmMmMmMmMmM,
    [P.WendyWilliams], new JeffEpisode()
  ),
  new Soundbite(
    "It's Friday baby",
    SB.UncleGabe_ItsFridayBabyFUCK,
    [P.Gabe], new JeffEpisode()
  ),
  new Soundbite(
    "Fried Chicken Wednesday",
    SB.UncleGabe_FriedChickenWednesdays,
    [P.Gabe], new JeffEpisode()
  ),
  new Soundbite(
    "I've been listening to Olivia the entire time",
    SB.DonaldTrump_IveBeenListeningToOliviaTheEntireTime,
    [P.DonaldTrump], episodes.GetOffTheRails(19),
    2430
  ),
  new Soundbite(
    "CRACKA",
    SB.HasanPiker_Cracka,
    [P.HasanPiker], new JeffEpisode()
  ),
  new Soundbite(
    "What a fucking piece of shit dude",
    SB.HasanPiker_WhatAFuckingPieceOfShit,
    [P.HasanPiker], new JeffEpisode()
  ),
  new Soundbite(
    "Let's google some Isis videos",
    SB.Hila_LetsGoogleSomeISISVideos,
    [P.HilaKlein], new JeffEpisode()
  ),
  new Soundbite(
    "BETA",
    SB.JesseLeePeterson_BETA,
    [P.JesseLeePeterson], new JeffEpisode()
  ),
  new Soundbite(
    "I FUCKED UP",
    SB.Keemstar_IFuckedUp,
    [P.Keemstar], new JeffEpisode()
  ),
  new Soundbite(
    "From death to life",
    SB.KennethCopeland_FromDeathToLife,
    [P.KennethCopeland], new JeffEpisode()
  ),
  new Soundbite(
    "Hah Hah",
    SB.KennethCopeland_HaaaHaaa,
    [P.KennethCopeland], new JeffEpisode()
  ),
  new Soundbite(
    "It's not your fault",
    SB.RobinWilliams_ItsNotYourFault,
    [P.RobinWilliams], new JeffEpisode()
  ),
  new Soundbite(
    "Delete Me From This Conversation",
    SB.Shaq_DeleteMeFromThisConversation,
    [P.Shaq], episodes.GetEpisodeByTitle("NELK Is A Menace To Society - Content Court"),
    2151
  ),
  new Soundbite(
    "Vladamir Putin",
    SB.StevenSeagal_VladamirPutin,
    [P.StevenSeagal], new JeffEpisode()
  ),
  new Soundbite(
    "Ah",
    SB.JaredLeto_Ah,
    [P.JaredLeto], new JeffEpisode()
  ),
  new Soundbite(
    "I'm gonna cum",
    SB.DonaldTrump_ImGonnaCum,
    [P.DonaldTrump], new JeffEpisode()
  ),
  new Soundbite(
    "I am so excited",
    SB.CarlosMatos_ImSoExcited,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    )!,
    92
  ),
  new Soundbite(
    "14 PAGES!!",
    SB.DarkViper_Its14Pages,
    [P.DarkViperAU], episodes.GetEpisodeByTitle("MoistCritikal Is Destroying YouTube"),
    370
  ),
  new Soundbite(
    "Keep fucking my my wifes mouth I'm going to okay",
    SB.WillSmith_KeepFuckingMyWifesMouth,
    [P.WillSmith], new JeffEpisode()
  ),
  new Soundbite(
    "Monotone Monica over here",
    SB.Ricegum_MonotoneMonica,
    [P.Ricegum], episodes.GetEpisodeByTitle("This YouTuber is Lying To You (H3H3)"),
    359
  ),
  new Soundbite(
    "Olivia",
    SB.DonaldTrump_Olivia,
    [P.DonaldTrump], episodes.GetOffTheRails(19),
    2430
  ),
  new Soundbite(
    "I have small dick energy",
    SB.AndrewTate_SmallDickEnergy,
    [P.AndrewTate], new JeffEpisode()
  ),
  new Soundbite(
    "Stop laughing AT SONIC",
    SB.BowBlax_StopLaughingAtSonic,
    [P.Bowblax], new JeffEpisode()
  ),
  new Soundbite(
    "Ladies and gentleman we are all deomstic terrorists",
    SB.Misc_LadiesAndGentlemenWeAreAllDomesticTerrorists,
    [P.Misc], new JeffEpisode()
  ),
  new Soundbite(
    "You know the age where we burn the witch? ...",
    SB.AbaAndPreach_BurnTheWitch,
    [P.AbaAndPreach], episodes.GetAfterDark(108),
    12939
  ),
  new Soundbite(
    "The omelette of KNOWLEDGE",
    SB.AbaAndPreach_OmeletteOfKnowledge,
    [P.AbaAndPreach], episodes.GetAfterDark(108),
    12968
  ),
  new Soundbite(
    "DESTROY THE CHILD!",
    SB.AlexJones_DestroyTheChild,
    [P.AlexJones], episodes.GetPodcast(77),
    1593
  ),
  new Soundbite(
    "I NEVER DID. I NEVER DID. I NEEEVER DID!",
    SB.Boogie_INeverDid,
    [P.Boogie2988], episodes.GetOffTheRails(77),
    1293
  ),
  new Soundbite(
    "*Unemployment Rant*",
    SB.Boogie_UnemploymentRant,
    [P.Boogie2988], episodes.GetOffTheRails(93),
    10917
  ),
  new Soundbite(
    "THE WORLD IS NOT ANYMORE THE WAY THAT IT USED TO BE!",
    SB.CarlosMatos_TheWorldIsNotTheWayItUsedToBe,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    ),
    110
  ),
  new Soundbite(
    "WHATSA WHATSA WHATSA WHATSA WHATS UP",
    SB.CarlosMatos_WhatsUp,
    [P.CarlosMatos], episodes.GetEpisodeByTitle(
      "How To Lose Your Life's Savings w Cryptocurrency"
    ),
    44
  ),
  new Soundbite(
    "If I see a black pilot...",
    SB.CharlieKirk_IfISeeABlackPilot,
    [P.CharlieKirk], episodes.GetH3TV(105),
    5772
  ),
  new Soundbite(
    "Fuck me right?",
    SB.ColleenBallinger_FuckMeRight,
    [P.ColleenBallinger], episodes.GetH3TV(82),
    8593
  ),
  new Soundbite(
    "Suck... My Tongue",
    SB.DalaiLama_SuckMyTongue,
    [P.DalaiLama], episodes.GetOffTheRails(67),
    5349
  ),
  new Soundbite(
    "Put your balls in my mouth",
    SB.Dan_PutYourBallsInMyMouth,
    [P.Dan], episodes.GetOffTheRails(62),
    4419
  ),
  new Soundbite(
    "Tell em' to bring out the whole ocean!",
    SB.DJKhaled_TheWholeOcean,
    [P.DJKhaled], episodes.GetH3TV(85),
    5171
  ),
  new Soundbite(
    "Congrachulations!",
    SB.Drake_Congratulations,
    [P.Drake], new JeffEpisode()
  ),
  new Soundbite(
    "I'm SorrEeey!",
    SB.Drake_ImSorry,
    [P.Drake], new JeffEpisode()
  ),
  new Soundbite(
    "I need a max wynn.",
    SB.Drake_INeedTheMaxWin,
    [P.Drake], new JeffEpisode()
  ),
  new Soundbite(
    "Ohhhh my Gohhhd!",
    SB.Drake_OhMyGod,
    [P.Drake], new JeffEpisode()
  ),
  new Soundbite(
    "A nightmare... A nightmare.",
    SB.Dream_ANightmareANightmare,
    [P.Dream], episodes.GetH3TV(93),
    9297
  ),
  new Soundbite(
    "I can't breath when you're not there!",
    SB.Dream_ICantBreathWhenYoureNotThere1,
    [P.Dream], episodes.GetH3TV(93),
    9249
  ),
  new Soundbite(
    "I can't sleep, it's a nightmare!",
    SB.Dream_ICantSleepItsANightmare,
    [P.Dream], episodes.GetH3TV(93),
    9288
  ),
  new Soundbite(
    "I can't BREATH WHEN YOU'RE NOT THEeeRe!",
    SB.Dream_ICantBreathWhenYoureNotThere2,
    [P.Dream], episodes.GetH3TV(93),
    9300
  ),
  new Soundbite(
    "You're not there... You're not there.",
    SB.Dream_YoureNotThere,
    [P.Dream], episodes.GetH3TV(93),
    9342
  ),
  new Soundbite(
    "♪ AlLlL I NeeEEEd iS the RYThM DIViNE!! ... ♪",
    SB.EnriqueIglesias_SingingPoorly,
    [P.EnriqueIglesias], episodes.GetOffTheRails(96),
    743
  ),
  new Soundbite(
    "♪ IMAGINE IF NINJA GOT A LOW TAPER FADE ♪",
    SB.Ericdoa_ImagineIfNinjaGotALowTaperFade,
    [P.EricDOA], episodes.GetOffTheRails(100),
    6265
  ),
  new Soundbite(
    "SZIT (?) SZIT!!! (?)",
    SB.Ethan_DrunkTalk,
    [P.EthanKlein], episodes.GetAfterDark(23),
    22987
  ),
  new Soundbite(
    "It's a rainy day out here in Los Angeles!",
    SB.Ethan_ItsARainyDayOutHereInLosAngeles,
    [P.EthanKlein], episodes.GetPodcast(267),
    3
  ),
  new Soundbite(
    "X-X-X-Tassion",
    SB.Ethan_XXXTassion,
    [P.EthanKlein], episodes.GetEpisodeByTitle("Content Court: JayStation"),
    314
  ),
  new Soundbite(
    "I'm from the HEEEART of Brooklyn!",
    SB.EthanBradberry_TheHeartOfBrooklyn,
    [P.EthanBradberry], episodes.GetH3TV(105),
    1173
  ),
  new Soundbite(
    "I'm not gonna read it, FUCK YOU",
    SB.HowieMandel_ImNotGonnaReadIt,
    [P.HowieMandel], episodes.GetEpisodeByTitle(
      "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
    ),
    3910
  ),
  new Soundbite(
    "Does anyone know, is this Covid Related? ...",
    SB.HowieMandel_IsThisCovidRelated,
    [P.HowieMandel], episodes.GetH3TV(42),
    829
  ),
  new Soundbite(
    "Ow",
    SB.HowieMandel_Ow,
    [P.HowieMandel], episodes.GetH3TV(42),
    829
  ),
  new Soundbite(
    "Show Us!! ...",
    SB.HowieMandel_ShowUs,
    [P.HowieMandel], episodes.GetEpisodeByTitle(
      "Ethan's Birthday Extravaganza LIVE From The Ace Theater!"
    ),
    2581
  ),
  new Soundbite(
    "No - Ethan, that's not how that works",
    SB.JakeDoolittle_NoEthanThatsNotHowThatWorks,
    [P.JakeDoolittle], episodes.GetH3TV(103),
    10012
  ),
  new Soundbite(
    "OooOoOops",
    SB.JakeDoolittle_Ooooops,
    [P.JakeDoolittle], episodes.GetH3TV(103),
    13046
  ),
  new Soundbite(
    "Now entering GLIZZY OVERDRIVE",
    SB.JasonReborn_FullGlizzyOverDrive,
    [P.JasonReborn], episodes.GetAfterDark(117),
    3859
  ),
  new Soundbite(
    "*INTENSE GLIZZY NOISES*",
    SB.JasonReborn_GlizzyOverdriveConsumption,
    [P.JasonReborn], episodes.GetAfterDark(117),
    3877
  ),
  new Soundbite(
    "*Does God know you're gay?*",
    SB.JesseLeePeterson_DoesGodKnowYoureGay,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3555
  ),
  new Soundbite(
    "I didn't know you were gay!",
    SB.JesseLeePeterson_IDidntKnowYouWereGay,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3555
  ),
  new Soundbite(
    "Thas Min' Blowin'",
    SB.JesseLeePeterson_MindBlowin,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3514
  ),
  new Soundbite(
    "REeAAally?!",
    SB.JesseLeePeterson_Reaaaally,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3514
  ),
  new Soundbite(
    "REeAAally?! Thas Min' Blowin'",
    SB.JesseLeePeterson_REAALLYThatsMindblowin,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3514
  ),
  new Soundbite(
    "You Gay?",
    SB.JesseLeePeterson_YouGay,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3555
  ),
  new Soundbite(
    "You Gaaay?!",
    SB.JesseLeePeterson_YouGay2,
    [P.JesseLeePeterson], episodes.GetH3TV(70),
    3555
  ),
  new Soundbite(
    "UhHHhp",
    SB.JimmieLee_UHHHP,
    [P.JimmieLee], episodes.GetOffTheRails(105),
    1096
  ),
  new Soundbite(
    "MAYO FOR SAM!!",
    SB.JoeBiden_MayoForSam,
    [P.JoeBiden], episodes.GetH3TV(73),
    10773
  ),
  new Soundbite(
    "We're the last line of defense - This is where the woke meets the wall",
    SB.JoeRogan_WhereTheWokeMeetsTheWall,
    [P.JoeRogan], episodes.GetOffTheRails(99),
    6463
  ),
  new Soundbite(
    "You can take the ULTIMATE load",
    SB.JordanPeterson_TakeTheUltimateLoad,
    [P.JordanPeterson], episodes.GetOffTheRails(107),
    5281
  ),
  new Soundbite(
    "Grandpa's feeling a little frisky",
    SB.KidRock_GrandpasFeelingALittleFrisky,
    [P.KidRock], episodes.GetPodcast(269),
    2950
  ),
  new Soundbite(
    "5000 dun garne",
    SB.Love_5000DunGarne,
    [P.Love], episodes.GetH3TV(30),
    3099
  ),
  new Soundbite(
    "5000 dun garne",
    SB.Love_oOoOoeeee,
    [P.Love], episodes.GetH3TV(30),
    3021
  ),
  new Soundbite(
    "SHWEEEE",
    SB.Love_ShweeEeeeEeEee,
    [P.Love], episodes.GetH3TV(30),
    3404
  ),
  new Soundbite(
    "Where's my shoompa loompa?",
    SB.Love_WheresMyShoompaLoompa,
    [P.Love], episodes.GetAfterDark(111),
    9012
  ),
  new Soundbite(
    "What the heckin' dog?!",
    SB.Love_WhatTheHeckinDog,
    [P.Love], episodes.GetH3TV(30),
    3108
  ),
  new Soundbite(
    "YeEeEEee!!",
    SB.Love_Yeeeee,
    [P.Love], episodes.GetH3TV(30),
    3021
  ),
  new Soundbite(
    "Good Smokey Flavor",
    SB.MarkZuckerberg_GoodSmokyFlavor,
    [P.MarkZuckerberg], episodes.GetEpisodeByTitle("Becoming THE ZUCC (ft idubbbz)"),
    1035
  ),
  new Soundbite(
    "Smoking these meats!",
    SB.MarkZuckerberg_SmokingTheseMeats,
    [P.MarkZuckerberg], episodes.GetEpisodeByTitle("Becoming THE ZUCC (ft idubbbz)"),
    1035
  ),
  new Soundbite(
    "And this one is eating the poo poo all over the place",
    SB.MartinSsempa_EatingPooPooAllOver,
    [P.MartinSsempa], episodes.GetAfterDark(3),
    7287
  ),
  new Soundbite(
    "This filter is suppose to make you look like BAHBEE",
    SB.Mikayla_MAKEUPBAG,
    [P.MikaylaNogueira], episodes.GetH3TV(78),
    7217
  ),
  new Soundbite(
    "*BONK*",
    SB.Misc_BonkNoise,
    [P.Misc], new JeffEpisode(), 0, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZ4Jcx5JW4LCjsdwMdSG0QVpubmrR-8l_h_BJBCYaoQ&s"
  ),
  new Soundbite(
    "Bruh.",
    SB.Misc_Bruh,
    [P.Misc], new JeffEpisode()
  ),
  new Soundbite(
    "The death bell tolls.",
    SB.Misc_DeathBell,
    [P.Misc], episodes.GetLeftovers(52),
    3077,
    "https://staticg.sportskeeda.com/editor/2023/07/51744-16904447462473-1920.jpg"
  ),
  new Soundbite(
    "Balenciagaaa",
    SB.Ninja_Balenciaga,
    [P.Ninja], episodes.GetEpisodeByTitle("We Play Silent Library 2 And Regret It"),
    165
  ),
  new Soundbite(
    "I can't control my GOOOO",
    SB.Ninja_CantControlMyGoo,
    [P.Ninja], episodes.GetOffTheRails(52),
    1758
  ),
  new Soundbite(
    "$28 A LOT for some Cookies",
    SB.MoistCritical_CookieRant,
    [P.MoistCritical], episodes.GetH3TV(99),
    10981
  ),
  new Soundbite(
    "SUP SUP SUP SUP SUP SUP SUP",
    SB.PhillyD_supsupsupsup,
    [P.PhilipDefranco], new JeffEpisode()
  ),
  new Soundbite(
    "*Screams as car runs over foot",
    SB.RichardSimons_Screaming,
    [P.RichardSimmons], 
    episodes.GetH3TV(113),
    7433
  ),
  new Soundbite(
    "Dan... Is jealous of me",
    SB.RichLux_DanIsJealousOfMe,
    [P.RichLux], episodes.GetEpisodeByTitle("See You Next Tuesday #31"),
    2284
  ),
  new Soundbite(
    "I can't STAND Dan",
    SB.RichLux_ICantStandDan,
    [P.RichLux], episodes.GetEpisodeByTitle("See You Next Tuesday #31")
  ),
  new Soundbite(
    "Can't even ride Space Mountain without Dan ruining my vacation",
    SB.RichLux_SpaceMountain,
    [P.RichLux], episodes.GetEpisodeByTitle("See You Next Tuesday #31")
  ),
  new Soundbite(
    "Thank you Luke",
    SB.RyanKavanaugh_ThankYouLuke,
    [P.RyanKavanaugh], episodes.GetH3TV(21),
    4663
  ),
  new Soundbite(
    "I'm going to give you the blowjob of your life",
    SB.SenatorJohnKennedy_BlowJobOfYourLife,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "I can't wait to have your cock in my mouth",
    SB.SenatorJohnKennedy_ICantWaitToHaveYourCockInMyMouth,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "I got a new strap on harness today",
    SB.SenatorJohnKennedy_IGotANewStrapOnHarnessToday,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "I got some lube on and got him on his knee's",
    SB.SenatorJohnKennedy_IGotSomeLubeOnAndGotHimOnHisKnees,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "I pulled out of him and kissed him while he masturbated",
    SB.SenatorJohnKennedy_IPullOutOfHimAndKissedHimWhileHeMasturbated,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "I want you inside of me",
    SB.SenatorJohnKennedy_IWantYouInsideOfMe,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "He asked me to turn over while he slipped a condom on himself",
    SB.SenatorJohnKennedy_SlippedACondomOn,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "He got on top and slowly inserted himself into me",
    SB.SenatorJohnKennedy_SlowlyInsertedIntoMe,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "This was MY ASS",
    SB.SenatorJohnKennedy_ThisWasMyAss,
    [P.JohnKennedy], episodes.GetLeftovers(57),
    5526
  ),
  new Soundbite(
    "Oh no, what a fucking nightmare!",
    SB.StevenCrowder_OhNoSamSeder,
    [P.StevenCrowder], episodes.GetPodcast(248),
    630
  ),
  new Soundbite(
    "Can't-Cant do this!",
    SB.TheGoodDoctor_CantDoThis,
    [P.TheGoodDoctor], episodes.GetPodcast(248),
    630
  ),
  new Soundbite(
    "I AM A SURGEON",
    SB.TheGoodDoctor_IAmASurgeon,
    [P.TheGoodDoctor], episodes.GetOffTheRails(71),
    6496
  ),
  new Soundbite(
    "I said no pickles...",
    SB.TheGoodDoctor_ISaidNoPickles,
    [P.TheGoodDoctor], episodes.GetH3TV(102),
    6808
  ),
  new Soundbite(
    "Nooo!",
    SB.TheGoodDoctor_No,
    [P.TheGoodDoctor], episodes.GetOffTheRails(71),
    6622
  ),
  new Soundbite(
    "No-No-Nooo!",
    SB.TheGoodDoctor_NoNoNo,
    [P.TheGoodDoctor], episodes.GetOffTheRails(71),
    6622
  ),
  new Soundbite(
    "... When I was giving it to your FUCKING MOM!",
    SB.Tipster_GivingItToYourMom,
    [P.Tipster], episodes.GetH3TV(103),
    12510
  ),
  new Soundbite(
    "At least I've seen what a vagina looks like",
    SB.Tipster_VaginaLooksLike,
    [P.Tipster], episodes.GetAfterDark(112),
    922
  ),
  new Soundbite(
    "I'm blowin' out my voice talking in this stupid mic!",
    SB.Trump_BlowinOutMyVoiceTalkingToThisStupidMic,
    [P.DonaldTrump], new JeffEpisode()
  ),
  new Soundbite(
    "Don't call him a fat pig",
    SB.Trump_DontCallHimAFatPig,
    [P.DonaldTrump], episodes.GetLeftovers(54),
    6657
  ),
  new Soundbite(
    "EXTREMELY WET",
    SB.Trump_ExtremelyWet,
    [P.DonaldTrump], episodes.GetLeftovers(54),
    6581
  ),
  new Soundbite(
    "It's about 104 or 5 degrees in this room",
    SB.Trump_Its104Or5DegressInThisRoom,
    [P.DonaldTrump], episodes.GetLeftovers(54),
    6581
  ),
  new Soundbite(
    "This is the worst microphone I think I've ever had.",
    SB.Trump_ThisIsTheWorstMicrophoneIveEverHad,
    [P.DonaldTrump], new JeffEpisode()
  ),
  new Soundbite(
    "Please do not call him a fat pig",
    SB.Trump_PleaseDoNotCallHimAFatPig,
    [P.DonaldTrump], episodes.GetLeftovers(54),
    6657
  ),
  new Soundbite(
    "This is the worst mic I've ever had",
    SB.Trump_WorstMicIveEverHad,
    [P.DonaldTrump], new JeffEpisode()
  ),
  new Soundbite(
    "Tacoma Wept",
    SB.Vaush_TakomaWept,
    [P.Vaush], episodes.GetAfterDark(136),
    8748
  ),
  new Soundbite(
    "GIVE TO YA",
    SB.YilongMe_GiveToYa,
    [P.YiLongMa], episodes.GetPodcast(257),
    3306
  ),
  new Soundbite(
    "WHAT?!",
    SB.Ethan_BFFTWHAT,
    [P.EthanKlein], episodes.GetH3TV(82),
    7978
  ),
  new Soundbite(
    "I like it!",
    SB.Ethan_ILikeIt,
    [P.EthanKlein], episodes.GetPodcast(155),
    4990
  ),
  new Soundbite(
    "I DONT like it",
    SB.Ethan_IDontLikeIt,
    [P.EthanKlein], episodes.GetPodcast(171),
    6997
  ),
  new Soundbite(
    "Fart Joke!",
    SB.ColleenBallinger_FartJoke,
    [P.ColleenBallinger], episodes.GetH3TV(82),
    7978
  ),
  new Soundbite(
    "Heil Hitler",
    SB.Dan_HeilHitler,
    [P.Dan], episodes.GetOffTheRails(40),
    9118
  ),
  new Soundbite(
    "DEEZ NUTS",
    SB.DonnaKlein_DeezNuts,
    [P.DonnaKlein], episodes.GetAfterDark(99),
    10100
  ),
  new Soundbite(
    "Can't wait to report your death HE-HA!",
    SB.Keemstar_CantWaitToReportYourDeath,
    [P.Keemstar], episodes.GetH3TV(30),
    5025
  ),
  new Soundbite(
    "A crane fuckin' smashed him right in his head",
    SB.LilMo_ACraneSmashedHimRightInHisHead,
    [P.LilMo], episodes.GetOffTheRails(87),
    11049
  ),
  new Soundbite(
    "Am I Jewish?!",
    SB.Ninja_AmIJewish,
    [P.Ninja], episodes.GetOffTheRails(56),
    1245
  ),
  new Soundbite(
    "And DICK too!",
    SB.Obama_AndDickToo,
    [P.BarackObama], episodes.GetAfterDark(119),
    274
  ),
  new Soundbite(
    "Gayy",
    SB.SunnyV2_Gay,
    [P.SunnyV2], episodes.GetAfterDark(101),
    7826
  ),
  new Soundbite(
    "Hold my fart like a bong rip",
    SB.CandaceOwens_AndHoldMyFartLikeABongRip,
    [P.CandaceOwens], episodes.GetOffTheRails(109),
    420
  ),
  new Soundbite(
    "GOD DID",
    SB.DJKhaled_GodDid,
    [P.DJKhaled], episodes.GetAfterDark(91),
    6665
  ),
  new Soundbite(
    "I hope you get ass cancer and DIE",
    SB.DrPhil_IHopeYouGetAssCancerAndDie,
    [P.DrPhil], episodes.GetH3TV(65),
    1421
  ),
  new Soundbite(
    "I want to fuck this bitch",
    SB.Fidias_IWantToFuckThisBitch,
    [P.Fidias], episodes.GetAfterDark(131),
    5349
  ),
  new Soundbite(
    "Margot Robbie...",
    SB.Fidias_MargotRobbie,
    [P.Fidias],
    episodes.GetAfterDark(131),
    5349
  ),
  new Soundbite(
    "Yay I got a subscriber!",
    SB.JustTree_YayIGotASubscriber,
    [P.JustTree411],
    new Episode(
      "H3 Show #1",
      "https://www.youtube.com/watch?v=0lt0tTr-lj4&list=RDCMUCLtREJY21xRfCuEKvdki1Kw",
      "4-22-2024",
      [EpisodeType["H3 Show"]],
      1
    ),  
    4454
  ),
  new Soundbite(
    "I believe a citizen can own a nuclear warhead",
    SB.TimPool_IndividualCitizenRightToOwnWarhead,
    [P.TimPool],
    episodes.GetH3TV(38),
    3892
  ),
);