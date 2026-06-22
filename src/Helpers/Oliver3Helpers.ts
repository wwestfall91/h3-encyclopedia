export type PlaylistItem = {
  videoId: string;
  title: string;
  publishAt: string;
  position: number;
  isPublic?: boolean;
};

/**
 * Returns the UTC Date when the Oliver3 episode at `position` becomes public.
 * Release schedule: every weekday at 3 PM EDT (UTC-4), starting 2026-06-22 (Monday).
 * Weekends (Saturday/Sunday) are skipped.
 */
export function getOliver3ReleaseDate(position: number): Date {
  const start = new Date('2026-06-22T19:00:00Z'); // 3 PM EDT = 19:00 UTC
  const d = new Date(start);
  let count = 0;
  while (count < position) {
    d.setUTCDate(d.getUTCDate() + 1);
    const day = d.getUTCDay(); // 0 = Sun, 6 = Sat
    if (day !== 0 && day !== 6) count++;
  }
  return d;
}

/**
 * Returns true if the Oliver3 episode at `position` should be visible at the given time.
 * Defaults to the current time if `now` is not provided.
 */
export function isOliver3EpisodePublic(position: number, now: Date = new Date()): boolean {
  return now >= getOliver3ReleaseDate(position);
}

export const OLIVER3_EPISODES: PlaylistItem[] = [
    {
        videoId: 'LWRqCA1ir9k',
        title: 'Oliver Tree - H3 Podcast #125',
        publishAt: '2026-06-22T19:00:00Z',
        position: 0,
        isPublic: isOliver3EpisodePublic(0),
    },
    {
        videoId: 'ez_bTUjWG5Y',
        title: 'Oliver Tree - H3 Podcast #248',
        publishAt: '2026-06-23T19:00:00Z',
        position: 1,
        isPublic: isOliver3EpisodePublic(1),
    },
    {
        videoId: 'J19qOeSWn6A',
        title: 'Jeff Wittek, Mr. Beast, ACE Family - H3TV #26',
        publishAt: '2026-06-24T19:00:00Z',
        position: 2,
        isPublic: isOliver3EpisodePublic(2),
    },
    {
        videoId: 't29lvnxG0L4',
        title: 'Frenemies Is Back & Short Lived',
        publishAt: '2026-06-25T19:00:00Z',
        position: 3,
        isPublic: isOliver3EpisodePublic(3),
    },
    {
        videoId: 'r6vG1VKGnOo',
        title: `Chris, MrBeast, and H3 are SunnyV2's Worst Nightmare - After Dark #101`,
        publishAt: '2026-06-26T19:00:00Z',
        position: 4,
        isPublic: isOliver3EpisodePublic(4),
    },
        {
        videoId: 'euuma5CoFis',
        title: 'Ethan Debates Pearl Davis of JustPearlyThings - Off The Rails #76',
        publishAt: '2026-06-29T19:00:00Z',
        position: 5,
        isPublic: isOliver3EpisodePublic(5),
    },
        {
        videoId: 'xTsLjVLC__U',
        title: 'Colleen Ballinger Finally Responded & Fousey Got Banned - After Dark #112',
        publishAt: '2026-06-30T19:00:00Z',
        position: 6,
        isPublic: isOliver3EpisodePublic(6),
    },
        {
        videoId: 'COwUauc8cY4',
        title: 'Oliver Tree Back In The Studio For A Serious Interview - After Dark #122',
        publishAt: '2026-07-01T19:00:00Z',
        position: 7,
        isPublic: isOliver3EpisodePublic(7),
    },
        {
        videoId: 'z9IPrpq6wVs',
        title: 'Ace Family Divorce - After Dark #132',
        publishAt: '2026-07-02T19:00:00Z',
        position: 8,
        isPublic: isOliver3EpisodePublic(8),
    },
        {
        videoId: 'ZPdgcyuob2g',
        title: 'Jeff Wittek Is Your Bach3lor - Episode #1 - OTR #104',
        publishAt: '2026-07-03T19:00:00Z',
        position: 9,
        isPublic: isOliver3EpisodePublic(9),
    },
        {
        videoId: 'gjKye-weNxw',
        title: `Ethan's Righteous Crusade Against The Wicked Lolipops - After Dark #137`,
        publishAt: '2026-07-06T19:00:00Z',
        position: 10,
        isPublic: isOliver3EpisodePublic(10),
    },
        {
        videoId: 'x2cyP6KJ0Uc',
        title: 'Catching Up On All The Tea We Missed - H3 Show #2',
        publishAt: '2026-07-07T19:00:00Z',
        position: 11,
        isPublic: isOliver3EpisodePublic(11),
    },
        {
        videoId: 'mvzLHYGR05M',
        title: 'MrBeast, Logan Paul, KSI Sellout Their Child Audience ft. Reggie Watts - H3 Show #56',
        publishAt: '2026-07-08T19:00:00Z',
        position: 12,
        isPublic: isOliver3EpisodePublic(12),
    },
        {
        videoId: 'KaK4EsM0NDk',
        title: 'Selena Gomez Cheating Controversy, Back Into The Metaverse - H3 Show #62',
        publishAt: '2026-07-09T19:00:00Z',
        position: 13,
        isPublic: isOliver3EpisodePublic(13),
    },
    {
        videoId: 'KaK4EsM0NDk',
        title: 'Selena Gomez Cheating Controversy, Back Into The Metaverse - H3 Show #62',
        publishAt: '2026-07-10T19:00:00Z',
        position: 14,
        isPublic: isOliver3EpisodePublic(14),
    },
];
