import { describe, it, expect } from 'vitest';
import { getOliver3ReleaseDate, isOliver3EpisodePublic, OLIVER3_EPISODES } from './Oliver3Helpers';

// ─── getOliver3ReleaseDate ────────────────────────────────────────────────────

describe('getOliver3ReleaseDate', () => {
  it('position 0 → Monday 2026-06-22 at 3 PM EDT (19:00 UTC)', () => {
    expect(getOliver3ReleaseDate(0).toISOString()).toBe('2026-06-22T19:00:00.000Z');
  });

  it('position 1 → Tuesday 2026-06-23', () => {
    expect(getOliver3ReleaseDate(1).toISOString()).toBe('2026-06-23T19:00:00.000Z');
  });

  it('position 2 → Wednesday 2026-06-24', () => {
    expect(getOliver3ReleaseDate(2).toISOString()).toBe('2026-06-24T19:00:00.000Z');
  });

  it('position 3 → Thursday 2026-06-25', () => {
    expect(getOliver3ReleaseDate(3).toISOString()).toBe('2026-06-25T19:00:00.000Z');
  });

  it('position 4 → Friday 2026-06-26', () => {
    expect(getOliver3ReleaseDate(4).toISOString()).toBe('2026-06-26T19:00:00.000Z');
  });

  it('position 5 → Monday 2026-06-29 (skips Saturday 6/27 and Sunday 6/28)', () => {
    expect(getOliver3ReleaseDate(5).toISOString()).toBe('2026-06-29T19:00:00.000Z');
  });

  it('position 6 → Tuesday 2026-06-30', () => {
    expect(getOliver3ReleaseDate(6).toISOString()).toBe('2026-06-30T19:00:00.000Z');
  });
});

// ─── isOliver3EpisodePublic ───────────────────────────────────────────────────

describe('isOliver3EpisodePublic', () => {
  // Dates before any release
  it('returns false on Saturday 2026-06-20 (two days before first release)', () => {
    const saturday = new Date('2026-06-20T19:00:00Z');
    expect(isOliver3EpisodePublic(0, saturday)).toBe(false);
    expect(isOliver3EpisodePublic(1, saturday)).toBe(false);
    expect(isOliver3EpisodePublic(2, saturday)).toBe(false);
  });

  it('returns false on Sunday 2026-06-21 (one day before first release)', () => {
    const sunday = new Date('2026-06-21T23:59:59Z');
    expect(isOliver3EpisodePublic(0, sunday)).toBe(false);
  });

  // Boundary: one second before first release
  it('returns false one second before the first release (2026-06-22T18:59:59Z)', () => {
    expect(isOliver3EpisodePublic(0, new Date('2026-06-22T18:59:59Z'))).toBe(false);
  });

  // Boundary: exactly at first release time
  it('returns true exactly at the first release time (2026-06-22T19:00:00Z)', () => {
    expect(isOliver3EpisodePublic(0, new Date('2026-06-22T19:00:00Z'))).toBe(true);
  });

  // Tuesday after 3 PM EDT: episodes 0 and 1 public, episode 2 not yet
  it('on 2026-06-23 at 3 PM EDT: episodes 0 and 1 public, episode 2 not yet', () => {
    const tuesday3pm = new Date('2026-06-23T19:00:00Z');
    expect(isOliver3EpisodePublic(0, tuesday3pm)).toBe(true);
    expect(isOliver3EpisodePublic(1, tuesday3pm)).toBe(true);
    expect(isOliver3EpisodePublic(2, tuesday3pm)).toBe(false);
  });

  // One second before Tuesday release: episode 1 still not public
  it('returns false for episode 1 one second before its release', () => {
    expect(isOliver3EpisodePublic(1, new Date('2026-06-23T18:59:59Z'))).toBe(false);
  });

  // Saturday after first week: Mon–Fri all public, following Monday not yet
  it('on Saturday 2026-06-27: episodes 0-4 public, episode 5 (Mon 6/29) not yet', () => {
    const saturday2 = new Date('2026-06-27T19:00:00Z');
    expect(isOliver3EpisodePublic(0, saturday2)).toBe(true);
    expect(isOliver3EpisodePublic(1, saturday2)).toBe(true);
    expect(isOliver3EpisodePublic(2, saturday2)).toBe(true);
    expect(isOliver3EpisodePublic(3, saturday2)).toBe(true);
    expect(isOliver3EpisodePublic(4, saturday2)).toBe(true);
    expect(isOliver3EpisodePublic(5, saturday2)).toBe(false); // releases Mon 2026-06-29
  });
});

// ─── OLIVER3_EPISODES structure ──────────────────────────────────────────────

describe('OLIVER3_EPISODES', () => {
  it('has exactly 3 episodes', () => {
    expect(OLIVER3_EPISODES).toHaveLength(3);
  });

  it('episodes are ordered by position (0, 1, 2)', () => {
    expect(OLIVER3_EPISODES.map(e => e.position)).toEqual([0, 1, 2]);
  });

  it('each episode has a valid videoId', () => {
    OLIVER3_EPISODES.forEach(ep => {
      expect(ep.videoId).toBeTruthy();
      expect(typeof ep.videoId).toBe('string');
    });
  });

  it('publishAt for each episode matches its weekday release slot', () => {
    OLIVER3_EPISODES.forEach(ep => {
      expect(new Date(ep.publishAt).toISOString()).toBe(
        getOliver3ReleaseDate(ep.position).toISOString()
      );
    });
  });
});
