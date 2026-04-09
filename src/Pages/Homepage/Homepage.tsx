import { useDataContext } from "../../context/DataContext";
import "./Homepage.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import AfterDarkBG from "../../assets/images/AfterDarkBG.mp4";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import GeneralFeedbackModal from "../../components/Modals/GeneralFeedbackModal/GeneralFeedbackModal";
import HomepagePersonCard from "./HomepagePersonCard";
import { Episode } from "../../models/Episode";

function Homepage() {
  // @ts-ignore
  const { people, episodes, moments } = useDataContext();
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  //const [breakTabSelected, setBreakTabSelected] = useState<boolean>(false);
  //const [psychologySelected, setPsychologySelected] = useState<boolean>(false);
  const [vodsOnDemandSelected, setVodsOnDemandSelected] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  // static offset currently unused as a stateful setter; keep as const to avoid unused state warning
  const episodeOffset = 0;
  const [isMobile, setIsMobile] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState<Episode>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, [people.length]);

  function getLatestEpisode() {
    if (episodes.length <= 0) return;

    const episodesByDate = episodes.sort((a, b) => {
      let dateA = new Date(a.date ? a.date : new Date("1995-12-17"));
      let dateB = new Date(b.date ? b.date : new Date("1995-12-17"));
      return dateA.getTime() - dateB.getTime();
    });
    return episodesByDate[episodesByDate.length - 1];
  }

  // @ts-ignore
  const getEpisodeByTitle = (title: string) => {
    if (episodes.length <= 0) return;

    return episodes.find((x) => x.title == title);
  };

  const onReady = (event: YouTubeEvent<number>) => {
    const target = event.target;
    setPlayer(target);
    setIsVideoLoading(false); // Video player is ready
    // Try to cue the current episode now that the player is ready.
    try {
      const getIframe = (target as any).getIframe;
      const iframe =
        typeof getIframe === "function" ? getIframe.call(target) : null;
      const src = iframe?.src;
      if (src && currentEpisode) {
        try {
          target.cueVideoById(currentEpisode.getVideoId());
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error("onReady: failed to cue currentEpisode:", e);
        }
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("onReady: iframe check failed:", e);
    }
  };

  // @ts-ignore
  const jumpToTime = (seconds: number) => {
    if (!player) return;
    try {
      const getIframe = (player as any).getIframe;
      const iframe =
        typeof getIframe === "function" ? getIframe.call(player) : null;
      const src = iframe?.src;
      if (!src) return;
      player.seekTo(seconds, true);
      player.playVideo();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to jumpToTime:", e);
    }
  };

  // --- Video description timestamps ---
  const [videoTimestamps, setVideoTimestamps] = useState<{ label: string; seconds: number }[]>([]);
  // We still store parsed timestamps for matching people and render them in the UI
  // timestamp UI removed; keep parsed timestamps for matching but no loading/error state

  const parseTimeStringToSeconds = (timeStr: string) => {
    const parts = timeStr.split(":").map((p) => Number(p));
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return NaN;
  };

  const parseTimestampsFromDescription = (desc: string) => {
    const results: { label: string; seconds: number }[] = [];
    if (!desc) return results;
    const lineRegex =
      /(^|\n)\s*(?:-\s*)?(\d{1,2}:\d{2}(?::\d{2})?)\s*(?:[-–—:\t]{1,3})?\s*(.*?)(?=\n|$)/g;
    let m: RegExpExecArray | null;
    while ((m = lineRegex.exec(desc)) !== null) {
      const timeStr = m[2];
      const rest = (m[3] || "").trim();
      const seconds = parseTimeStringToSeconds(timeStr);
      if (!isNaN(seconds)) {
        results.push({ label: rest || timeStr, seconds });
      }
    }

    if (results.length === 0) {
      const inlineRegex = /(\d{1,2}:\d{2}(?::\d{2})?)/g;
      const matches = Array.from(desc.matchAll(inlineRegex)).map((x) => x[0]);
      for (const t of matches) {
        const seconds = parseTimeStringToSeconds(t);
        if (!isNaN(seconds)) results.push({ label: t, seconds });
      }
    }

    return results;
  };

  useEffect(() => {
    const loadTimestamps = async () => {
      setVideoTimestamps([]);
      if (!currentEpisode) return;
      const videoId = currentEpisode.getVideoId();
      if (!videoId) return;
      const YOUTUBE_API_KEY = (import.meta as any).env?.VITE_YOUTUBE_API_KEY;
      if (!YOUTUBE_API_KEY) {
        // API key missing, leave timestamps empty
        return;
      }
      try {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
        const res = await fetch(url);
        const txt = await res.text();
        if (!res.ok)
          throw new Error(`YouTube videos API returned ${res.status} - ${txt}`);
        const data = JSON.parse(txt || "{}");
        const items = data.items || [];
        const desc = items[0]?.snippet?.description || "";
        const parsed = parseTimestampsFromDescription(desc);
        setVideoTimestamps(parsed);
      } catch (err: any) {
        // keep timestamps empty on error; log for debugging
        // eslint-disable-next-line no-console
        console.error("loadTimestamps error:", err);
      } finally {
        // no-op
      }
    };

    loadTimestamps();
  }, [currentEpisode]);

  const [isFetchingNextEpisode, setIsFetchingNextEpisode] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);
  const [fetchNextError, setFetchNextError] = useState<string | null>(null);
  // Strict navigation lock: only allow one navigation at a time
  const navigatingRef = useRef(false);
  type PlaylistItem = {
    videoId: string;
    title: string;
    publishAt: string;
    position: number;
    isPublic?: boolean;
  };
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([]);
  const [playlistIndex, setPlaylistIndex] = useState<number | null>(null);

  const loadPlaylistFromYouTube = async (playlistType: 'live' | 'vods' = 'live'): Promise<{
    parsed: PlaylistItem[];
    idx: number;
  } | null> => {
    const YOUTUBE_API_KEY = (import.meta as any).env?.VITE_YOUTUBE_API_KEY;
    const H3_CHANNEL_ID = (import.meta as any).env?.VITE_H3_CHANNEL_ID;
    const H3_PLAYLIST_ID =
      (import.meta as any).env?.VITE_H3_PLAYLIST_ID ||
      "PLvcSNZqNYJCn_rVbHeJ0SrxQ4oDrlUlbr"; // fallback to requested playlist

    const TEST_VIDEO_ID = (import.meta as any).env?.VITE_TEST_VIDEO_ID;

    try {
      setIsFetchingNextEpisode(true);
      setFetchNextError(null);

      // Quick local fallback for testing a specific video id (avoid API usage)
      if (TEST_VIDEO_ID) {
        const newEpisode = new Episode(
          "H3Show",
          0,
          new Date().toISOString(),
          "Test video",
          `https://www.youtube.com/watch?v=${TEST_VIDEO_ID}`,
          []
        );
        const parsed = [
          {
            videoId: TEST_VIDEO_ID,
            title: "Test video",
            publishAt: new Date().toISOString(),
            position: 0,
          },
        ];
        setPlaylistItems(parsed);
        setPlaylistIndex(0);
        setCurrentEpisode(newEpisode);
        return { parsed, idx: 0 };
      }

      if (!YOUTUBE_API_KEY) {
        throw new Error("Missing VITE_YOUTUBE_API_KEY");
      }

      // Determine which playlist to use based on mode
      let targetPlaylistId = H3_PLAYLIST_ID;
      
      if (playlistType === 'vods') {
        // For VODs, fetch the channel's uploads playlist
        if (!H3_CHANNEL_ID) {
          throw new Error("Missing VITE_H3_CHANNEL_ID - required for VODs mode");
        }
        
        // Get channel details to find the uploads playlist ID
        // Support both channel IDs (UC...) and handles (@username)
        const isHandle = H3_CHANNEL_ID.startsWith('@');
        const channelParam = isHandle ? `forHandle=${H3_CHANNEL_ID.slice(1)}` : `id=${H3_CHANNEL_ID}`;
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&${channelParam}&key=${YOUTUBE_API_KEY}`;
        const channelRes = await fetch(channelUrl);
        const channelTxt = await channelRes.text();
        if (!channelRes.ok)
          throw new Error(
            `YouTube channel API returned ${channelRes.status} - ${channelTxt}`
          );
        const channelData = JSON.parse(channelTxt || "{}");
        const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
        
        if (!uploadsPlaylistId) {
          throw new Error("Could not find uploads playlist for channel");
        }
        
        targetPlaylistId = uploadsPlaylistId;
      }

      // Paginate through playlistItems (50 per page)
      // For VODs mode, limit to most recent 150 videos to speed up loading
      const maxVideos = 30;
      let allItems: any[] = [];
      let pageToken: string | undefined = undefined;
      do {
        const tokenPart = pageToken ? `&pageToken=${pageToken}` : "";
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${targetPlaylistId}&maxResults=50${tokenPart}&key=${YOUTUBE_API_KEY}`;
        const res = await fetch(playlistUrl);
        const txt = await res.text();
        if (!res.ok)
          throw new Error(
            `YouTube playlist API returned ${res.status} - ${txt}`
          );
        const data = JSON.parse(txt || "{}");
        const items = data.items || [];
        allItems.push(...items);
        pageToken = data.nextPageToken;
        
        // Break early if we've reached the limit for VODs
        if (maxVideos && allItems.length >= maxVideos) {
          break;
        }
      } while (pageToken);

      if (allItems.length === 0) throw new Error("Playlist returned no videos");

      let parsed: PlaylistItem[] = allItems
        .map((it: any) => {
          const videoId = it.snippet?.resourceId?.videoId;
          const title = it.snippet?.title || "";
          const publishAt =
            it.contentDetails?.videoPublishedAt ||
            it.snippet?.publishedAt ||
            new Date().toISOString();
          const position =
            typeof it.snippet?.position === "number" ? it.snippet.position : 0;
          return { videoId, title, publishAt, position };
        })
        .filter((p: any) => p.videoId)
        .sort((a: any, b: any) => a.position - b.position);

      // Batch Videos API calls (50 ids per request)
      const ids = parsed.map((p) => p.videoId);
      const chunkSize = 50;
      const publicIds = new Set<string>();
      const videoDetailsMap = new Map<string, { duration: string; liveBroadcastContent: string }>();
      const blockedPatterns = [
        "private video",
        "deleted video",
        "video unavailable",
        "unavailable",
        "synw",
        "synt",
      ];

      try {
        for (let i = 0; i < ids.length; i += chunkSize) {
          const chunk = ids.slice(i, i + chunkSize);
          const idList = chunk.join(",");
          const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=status,contentDetails,snippet&id=${idList}&key=${YOUTUBE_API_KEY}`;
          const vidsRes = await fetch(videosUrl);
          const vidsTxt = await vidsRes.text();
          if (!vidsRes.ok)
            throw new Error(
              `YouTube videos API returned ${vidsRes.status} - ${vidsTxt}`
            );
          const vidsData = JSON.parse(vidsTxt || "{}");
          const vidsItems = vidsData.items || [];
          vidsItems.forEach((v: any) => {
            const id = v.id;
            const privacy = v.status?.privacyStatus;
            const duration = v.contentDetails?.duration || '';
            const liveBroadcastContent = v.snippet?.liveBroadcastContent || 'none';
            
            if (privacy === "public") {
              publicIds.add(id);
              videoDetailsMap.set(id, { duration, liveBroadcastContent });
            }
          });
        }

        // Keep only public ids and mark them
        parsed = parsed
          .map((p) => ({ ...p, isPublic: publicIds.has(p.videoId) }))
          .filter((p) => p.isPublic);

        // For VODs mode, filter out Shorts and Live content
        if (playlistType === 'vods') {
          const beforeFilter = parsed.length;
          
          // Patterns that indicate live content in titles
          const livePatterns = [
            /\blive\b/i,
            /livestream/i,
            /live stream/i,
            /h3\s+show/i,              // "H3 Show" or "H3 SHOW"
            /^h3\s+podcast\s+#\d+$/i,  // Format like "H3 Podcast #123"
            /^leftovers\s+#\d+$/i,     // Format like "Leftovers #45"
            /^off the rails\s+#\d+$/i, // Format like "Off The Rails #67"
            /^h3tv\s+#\d+$/i,          // Format like "H3TV #89"
            /after\s+dark/i,           // "After Dark"
          ];
          
          parsed = parsed.filter((p) => {
            const details = videoDetailsMap.get(p.videoId);
            if (!details) return false;
            
            // Filter out live broadcasts (past, current, or upcoming)
            // liveBroadcastContent can be: 'none', 'upcoming', 'live', or 'completed'
            if (details.liveBroadcastContent !== 'none') {
              return false;
            }
            
            // Filter out videos with live-related keywords in title
            const title = (p.title || '').trim();
            for (const pattern of livePatterns) {
              if (pattern.test(title)) {
                return false;
              }
            }
            
            // Filter out Shorts and very long videos (likely live streams)
            // Duration format: PT#H#M#S (e.g., PT1H23M45S, PT5M30S, PT45S)
            const duration = details.duration;
            if (duration) {
              const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
              if (match) {
                const hours = parseInt(match[1] || '0', 10);
                const minutes = parseInt(match[2] || '0', 10);
                const seconds = parseInt(match[3] || '0', 10);
                const totalSeconds = hours * 3600 + minutes * 60 + seconds;
                
                // Filter out videos 3 minutes (180 seconds) or less (YouTube Shorts)
                if (totalSeconds <= 180) {
                  return false;
                }
                
                // Filter out videos longer than 4 hours (14400 seconds) - likely live streams
                if (totalSeconds > 14400) {
                  return false;
                }
              }
            }
            
            return true;
          });
          console.log(`VODs filter: ${beforeFilter} videos -> ${parsed.length} videos after filtering`);
        }

        // Also apply title heuristics as a safety net
        parsed = parsed.filter((p) => {
          const t = (p.title || "").toLowerCase();
          for (const pat of blockedPatterns) if (t.includes(pat)) return false;
          return true;
        });

        // Enforce After Show rules:
        // - In VODs mode: keep only videos with "H3 After Show" in the title
        // - In Live (H3 Show) mode: exclude any "H3 After Show" videos
        const afterShowRegex = /H3\s*After\s*Dark/i;
        if (playlistType === 'vods') {
          const before = parsed.length;
          parsed = parsed.filter((p) => afterShowRegex.test(p.title || ""));
          // eslint-disable-next-line no-console
          console.log(`AfterShow VODs filter: ${before} -> ${parsed.length}`);
        } else {
          const before = parsed.length;
          parsed = parsed.filter((p) => !afterShowRegex.test(p.title || ""));
          // eslint-disable-next-line no-console
          console.log(`AfterShow Live exclusion: ${before} -> ${parsed.length}`);
        }

        // If everything got filtered out unexpectedly, fall back to heuristic filtering on allItems
        if (parsed.length === 0 && allItems.length > 0) {
          const afterShowRegexFallback = /H3\s*After\s*Dark/i;
          parsed = allItems
            .map((it: any) => ({
              videoId: it.snippet?.resourceId?.videoId,
              title: it.snippet?.title || "",
              publishAt:
                it.contentDetails?.videoPublishedAt ||
                it.snippet?.publishedAt ||
                new Date().toISOString(),
              position:
                typeof it.snippet?.position === "number"
                  ? it.snippet.position
                  : 0,
              isPublic: true, // heuristically allowed
            }))
            .filter((p: any) => p.videoId)
            .filter((p: PlaylistItem) => {
              const t = (p.title || "").toLowerCase();
              for (const pat of blockedPatterns)
                if (t.includes(pat)) return false;
              // enforce Live exclusion in fallback
              if (playlistType === 'live' && afterShowRegexFallback.test(p.title || "")) return false;
              // enforce VODs-only in fallback
              if (playlistType === 'vods' && !afterShowRegexFallback.test(p.title || "")) return false;
              return true;
            })
            .sort((a: any, b: any) => a.position - b.position);
        }
      } catch (vidErr: any) {
        // If videos API fails, fall back to the simpler heuristic filtering
        parsed = parsed.filter((p: PlaylistItem) => {
          const t = (p.title || "").toLowerCase();
          for (const pat of blockedPatterns) if (t.includes(pat)) return false;
          return true;
        });
        setFetchNextError(
          `Videos API check failed: ${vidErr?.message || String(vidErr)}`
        );
      }

      if (parsed.length === 0)
        throw new Error("Playlist contained no public videos after filtering");

      setPlaylistItems(parsed);

      // Determine current index by matching currentEpisode videoId
      const currentVideoId = currentEpisode?.getVideoId();
      let idx = -1;
      if (currentVideoId)
        idx = parsed.findIndex((p) => p.videoId === currentVideoId);
      if (idx === -1) idx = 0;

      const target = parsed[idx];
      const newEpisode = new Episode(
        "H3Show",
        0,
        target.publishAt,
        target.title,
        `https://www.youtube.com/watch?v=${target.videoId}`,
        []
      );

      setPlaylistIndex(idx);
      setCurrentEpisode(newEpisode);
      setIsVideoLoading(true); // Mark video as loading when changing episodes
      return { parsed, idx };
    } catch (err: any) {
      setFetchNextError(err?.message || String(err));
    } finally {
      setIsFetchingNextEpisode(false);
    }
    return null;
  };

  // Load playlist based on selected mode (Live or VODs)
  useEffect(() => {
    const playlistType = vodsOnDemandSelected ? 'vods' : 'live';
    loadPlaylistFromYouTube(playlistType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vodsOnDemandSelected]);

  // Control mounting/unmounting of the background video so we can fade it out
  useEffect(() => {
    // If user enables VODs, ensure video is shown and cancel any fade-out in progress
    if (vodsOnDemandSelected) {
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
      setIsFadingOut(false);
      setShowVideo(true);
      return;
    }

    // If user disables VODs but video is mounted, trigger fade-out then remove
    if (showVideo) {
      setIsFadingOut(true);
      // match CSS fade-out duration (800ms)
      fadeTimeoutRef.current = window.setTimeout(() => {
        setShowVideo(false);
        setIsFadingOut(false);
        fadeTimeoutRef.current = null;
      }, 800);
    }

    return () => {
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
    };
  }, [vodsOnDemandSelected, showVideo]);

  // Toggle PageHeader 'after-dark' class so header can change when VODs (After Dark) is selected
  useEffect(() => {
    try {
      const hdr = document.getElementById("PageHeader");
      if (!hdr) return;
      if (vodsOnDemandSelected) hdr.classList.add("after-dark");
      else hdr.classList.remove("after-dark");
    } catch (e) {
      // ignore in non-browser environments
    }
  }, [vodsOnDemandSelected]);

  // Only allow one navigation at a time; wait for API and UI to update before allowing another
  const moveInPlaylist = async (direction: "next" | "prev") => {
    if (navigatingRef.current) return;

    navigatingRef.current = true;
    setIsFetchingNextEpisode(true);
    let timeoutId: any = null;
    // Failsafe: release lock after 10 seconds no matter what
    timeoutId = setTimeout(() => {
      navigatingRef.current = false;
      setIsFetchingNextEpisode(false);
      setFetchNextError("Navigation timed out. Please try again.");
    }, 10000);

    try {
      setFetchNextError(null);

      // If playlist not loaded yet, load it and then compute the navigation target
      if (playlistItems.length === 0) {
        const playlistType = vodsOnDemandSelected ? 'vods' : 'live';
        const res = await loadPlaylistFromYouTube(playlistType);
        if (!res) return;
        const parsed = res.parsed as PlaylistItem[];
        const loadedIdx = res.idx ?? 0;
        const len = parsed.length;
        // Skip any non-playable items (members-only/private) when moving
        const blockedPatterns = [
          "members only",
          "members-only",
          "membersonly",
          "private video",
          "deleted video",
          "video unavailable",
          "unavailable",
        ];

        const isPlayable = (p: PlaylistItem | undefined) => {
          if (!p) return false;
          if (p.isPublic === false) return false;

          const t = (p.title || "").toLowerCase();
          for (const pat of blockedPatterns) 
            if (t.includes(pat)) 
              return false;

          return true;
        };

        let finalIndex = loadedIdx;
        if (direction === "next") {
          let j = Math.min(len - 1, loadedIdx + 1);
          while (j <= len - 1 && !isPlayable(parsed[j])) j++;
          if (j > len - 1) return; // no playable next
          finalIndex = j;
        } else {
          let j = Math.max(0, loadedIdx - 1);
          while (j >= 0 && !isPlayable(parsed[j])) j--;
          if (j < 0) return; // no playable prev
          finalIndex = j;
        }

        const target = parsed[finalIndex];
        if (target) {
          const newEpisode = new Episode(
            "H3Show",
            0,
            target.publishAt,
            target.title,
            `https://www.youtube.com/watch?v=${target.videoId}`,
            []
          );
          setPlaylistIndex(finalIndex);
          setCurrentEpisode(newEpisode);
          setIsVideoLoading(true); // Mark video as loading
        }
        return;
      }

      if (playlistIndex == null) return;
      const last = parsedLength() - 1;
      let targetIndex = playlistIndex;

      const blockedPatterns = [
        "members only",
        "members-only",
        "membersonly",
        "private video",
        "deleted video",
        "video unavailable",
        "unavailable",
        "synw",
        "synt",
      ];

      const isPlayable = (p: PlaylistItem | undefined) => {
        if (!p) return false;
        if (p.isPublic === false) return false;
        const t = (p.title || "").toLowerCase();
        for (const pat of blockedPatterns) if (t.includes(pat)) return false;
        return true;
      };

      if (direction === "next") {
        let j = Math.min(last, (playlistIndex ?? 0) + 1);
        while (j <= last && !isPlayable(playlistItems[j])) j++;
        if (j > last) return; // nothing playable ahead
        targetIndex = j;
      } else {
        let j = Math.max(0, (playlistIndex ?? 0) - 1);
        while (j >= 0 && !isPlayable(playlistItems[j])) j--;
        if (j < 0) return; // nothing playable behind
        targetIndex = j;
      }

      if (targetIndex === playlistIndex) return; // nothing to do
      const target = playlistItems[targetIndex];
      if (!target) return;
      const newEpisode = new Episode(
        "H3Show",
        0,
        target.publishAt,
        target.title,
        `https://www.youtube.com/watch?v=${target.videoId}`,
        []
      );
      setPlaylistIndex(targetIndex);
      setCurrentEpisode(newEpisode);
      setIsVideoLoading(true); // Mark video as loading
    } catch (e: any) {
      setFetchNextError(e?.message || String(e));
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
      navigatingRef.current = false;
      setIsFetchingNextEpisode(false);
    }
  };

  const parsedLength = () => playlistItems.length;

  // Build matched person cards from parsed timestamps (memoized)
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const normalizeForMatch = (s: string) =>
    String(s)
      .normalize("NFKD")
      .replace(/[\p{Diacritic}]/gu, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ") // replace non letters/numbers with space
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const matchedPersonCards = useMemo(() => {
    const cards: JSX.Element[] = [];
    if (!people || people.length === 0) return cards;
    // Search both timestamps AND episode title for person names
    const labelsToSearch = [];
    
    // Add parsed timestamps if available
    if (videoTimestamps && videoTimestamps.length > 0) {
      labelsToSearch.push(...videoTimestamps);
    }
    
    // Always also search the episode title if available
    if (currentEpisode && currentEpisode.title) {
      labelsToSearch.push({ label: currentEpisode.title, seconds: 0 });
    }

    if (labelsToSearch.length === 0) return cards;

    const map = new Map<string, { person: any; seconds: number }>();
    const ppl = people || [];

    // Exclude these common keywords from generating person cards
    const excludedRaw = [
      "Ethan",
      "Hila",
      "Dan",
      "Love",
      "Zach",
      "Olivia",
      "Sam",
    ];
    const excluded = new Set(excludedRaw.map((s) => normalizeForMatch(s)));
    for (const t of labelsToSearch) {
      const rawLabel = t.label || "";
      const normLabel = normalizeForMatch(rawLabel);
      for (const p of ppl) {
        if (!p || !p.name) continue;
        const pname = String(p.name);
        // Extract parenthetical parts as separate keyword variants
        const parenMatches = Array.from(pname.matchAll(/\(([^)]+)\)/g)).map(
          (m) => m[1]
        );
        // Main name is the portion outside parentheses
        const mainName = pname.replace(/\s*\([^)]*\)\s*/g, " ").trim();
        // Collect nicknames from person object if present
        const rawNicknames: string[] =
          p.nicknames && Array.isArray(p.nicknames) ? p.nicknames : [];
        // Use the full main name, full parenthetical variants, and any nicknames (no first-token fallbacks)
        const variants = [mainName, ...parenMatches, ...rawNicknames].filter(
          Boolean
        );
        for (const variant of variants) {
          const normVariant = normalizeForMatch(variant);
          if (!normVariant) continue;
          if (excluded.has(normVariant)) continue; // skip excluded keywords
          try {
            // Allow optional trailing 's (possessive/plural) unless the variant already ends with s
            const tail = normVariant.endsWith("s") ? "" : "(?:s)?";
            const re = new RegExp(
              "\\b" + escapeRegExp(normVariant) + tail + "\\b",
              "i"
            );
            if (re.test(normLabel)) {
              const existing = map.get(p.name);
              if (!existing || t.seconds < existing.seconds) {
                map.set(p.name, { person: p, seconds: t.seconds });
              }
              break; // variant matched; no need to test other variants for this person
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(
              "Regex error for normalized person variant:",
              variant,
              e
            );
          }
        }
      }
    }

    const arr = Array.from(map.values());
    for (const m of arr) {
      cards.push(
        <HomepagePersonCard
          key={m.person.name}
          person={m.person}
          jumpToTime={() => jumpToTime(m.seconds)}
        />
      );
    }

    if(currentEpisode?.title.includes("[H3 After Dark #1]")) {
      cards.push(
        <HomepagePersonCard
          key={"Harley Morenstein"} 
          person={people.find(p => p.name === "Harley Morenstein")} 
        />
      )

      cards.push(
        <HomepagePersonCard
          key={"Girl With a Microphone"} 
          person={people.find(p => p.name === "Girl With a Microphone")} 
        />
      )

      cards.push(
        <HomepagePersonCard
          key={"David Valdes"} 
          person={people.find(p => p.name === "David Valdes")} 
        />
      )

    }

    return cards;
    // include jumpToTime and currentEpisode in deps so function references are fresh when they change
  }, [videoTimestamps, people, jumpToTime, currentEpisode]);

  // Quiet unused-variable warnings in some build configurations by referencing these values
  // (they are intentionally used in JSX; this ensures TypeScript doesn't tree-shake them)
  void episodeOffset;
  void getLatestEpisode;

  const divStyle = {
    display: "flex",
    width: "700px",
    height: "396px",
    outline: "3px solid black",
    borderRadius: "5px",
    margin: "15px",
    boxShadow: "30px 20px 20px 1px rgba(0, 0, 0, 0.555)",
  };

  const opts = {
    width: "750px",
    height: "397.5px",
    borderRadius: "10px",
    playerVars: {
      autoplay: 0,
    },
  } as any;

  return (
    <>
      <div
        id="Homepage"
        className={
          `${vodsOnDemandSelected ? "vods-bg" : ""} ${isFadingOut ? "vods-fade-out" : ""}`.trim()
        }
      >
        {showVideo && (
          <video
            className={`background-video ${isFadingOut ? "fade-out" : ""}`}
            src={AfterDarkBG}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
        {!isMobile && (
          <div className="subheader">
            {/* <button
              className={
                !breakTabSelected
                  ? "subheader-button"
                  : "subheader-button selected"
              }
              onClick={() => {
                setBreakTabSelected(true);
                setPsychologySelected(false);
              }}
            >
              WINTER BREAK 2025
            </button> */}
            {/* <button
              className={
                breakTabSelected || psychologySelected
                  ? "subheader-button"
                  : "subheader-button selected"
              }
              onClick={() => {
                setBreakTabSelected(false);
                setPsychologySelected(false);
              }}
            >
              EPISODE DEBRIEF
            </button> */}
            {/* <button
              className={
                psychologySelected
                  ? "subheader-button selected"
                  : "subheader-button"
              }
              onClick={() => {
                setBreakTabSelected(false);
                setPsychologySelected(true);
              }}
            >
              PSYCHOLOGY IN SEATTLE RATINGS
            </button> */}
          </div>
        )}

        {/* {!breakTabSelected && !psychologySelected && ( */}
          <>
            {!isMobile && (
              <div className="submit-button-container">
                <button
                  className="submit-button"
                  onClick={() => setShowEmailModal(true)}
                >
                  Submit Feedback
                </button>
              </div>
            )}
            <div className="page-container">
              <div className="video-container">
                {/* Current video title header */}
                <div className="current-video-title">
                  <h5>{currentEpisode?.title ?? "Loading video..."}</h5>
                </div>
                <div className="video">
                  {playlistIndex != null && playlistIndex > 0 && (
                    <div
                      className={`previous-episode-button ${
                        isFetchingNextEpisode || isVideoLoading ? "disabled" : ""
                      }`}
                      onClick={() => {
                        if (!isFetchingNextEpisode && !isVideoLoading) {
                          moveInPlaylist("prev");
                        }
                      }}
                      aria-disabled={isFetchingNextEpisode || isVideoLoading}
                      style={{
                        cursor: isFetchingNextEpisode || isVideoLoading ? "wait" : "pointer",
                      }}
                    >
                      {"<"}
                    </div>
                  )}
                  <div style={{ position: 'relative' }}>
                    <YouTube
                      videoId={currentEpisode?.getVideoId()}
                      opts={opts}
                      onReady={onReady}
                      style={divStyle}
                    />
                    {isFetchingNextEpisode && (
                      <div className="video-loading-overlay">
                        <div className="video-loading-spinner" />
                      </div>
                    )}
                  </div>
                  {playlistIndex != null &&
                    playlistIndex < parsedLength() - 1 && (
                      <div
                        className={`next-episode-button ${
                          isFetchingNextEpisode || isVideoLoading ? "disabled" : ""
                        }`}
                        onClick={() => {
                          if (!isFetchingNextEpisode && !isVideoLoading) {
                            moveInPlaylist("next");
                          }
                        }}
                        style={{
                          cursor: isFetchingNextEpisode || isVideoLoading ? "wait" : "pointer",
                        }}
                        aria-disabled={isFetchingNextEpisode || isVideoLoading}
                      >
                        {">"}
                      </div>
                    )}
                </div>
                <div className="youtube-section-container">  
                  <div 
                    className={vodsOnDemandSelected ? "youtube-section-button" : "youtube-section-button selected"}
                    onClick={() => setVodsOnDemandSelected(false)}>
                      H3 Show
                  </div>
                  <div 
                    className={vodsOnDemandSelected ? "youtube-section-button selected" : "youtube-section-button"}
                    onClick={() => setVodsOnDemandSelected(true)}>
                      H3 After Dark
                    </div>
                </div>
              </div>
              
              {fetchNextError && (
                <div className="next-episode-error">{fetchNextError}</div>
              )}
              {/* Timestamps removed from UI per user request */}
              <div className="topics-container">
                {/* Dynamically generated person cards from timestamps */}
                {matchedPersonCards && matchedPersonCards.length > 0 && (
                  <div className="topics">{matchedPersonCards}</div>
                )}
              </div>
            </div>
          </>
        {/* )} */}
        {/* {breakTabSelected && <SummerBreakSection />}
        {psychologySelected && <PsychologyInSeattleSection />} */}
      </div>
      {showEmailModal && (
        <SubmitModal
          toggleShown={setShowEmailModal}
          soundbite={true}
          modal={<GeneralFeedbackModal />}
        />
      )}
    </>
  );
}

export default Homepage;
