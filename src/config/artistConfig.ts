import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "Samaera",
  tagline: "Official Artist Website",
  genre: "Pop / Alternative Pop",
  bio: "Samaera is a pop singer, songwriter, and producer delivering vibrant melodies, sharp lyricism, and dynamic storytelling.",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-loop.webp",
  heroImage: "/hero-poster.jpg",
  profileImage: "/profile.jpg",

  // ============================================================
  // DESIGN
  // ============================================================
  accentColor: "#ffffff",
  theme: "dark",

  // ============================================================
  // SOCIALS
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/74FCyRCyjTCpKEzoxNoTyG",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/samaera/1527237213",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://youtube.com/@samaeraofficial",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/samaera.wav",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@samaera.wav",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "samaerica-deluxe",
          title: "Samaerica (Deluxe)",
          type: "ep",
          releaseDate: "July 3, 2026",
          coverArt: "/covers/samaerica-deluxe.jpg",
          spotifyUrl: "https://open.spotify.com/track/1ndEqtyQagzN7mjA7W66CH",
          appleMusicUrl: "https://music.apple.com/us/album/samaerica-deluxe-ep/6783205066",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Samaera+Samaerica+Deluxe",
          deezerUrl: "https://www.deezer.com/album/1012169751",
          amazonMusicUrl: "https://music.amazon.com/search/Samaera+Samaerica+Deluxe",
          tracks: [
            { id: "s1", title: "Here Comes Trouble" },
            { id: "s2", title: "Simon Says" },
            { id: "s3", title: "Tragedy" },
            { id: "s4", title: "Damage" },
            { id: "s5", title: "Good Company" }
          ]
        },
        {
          id: "here-comes-trouble",
          title: "Here Comes Trouble",
          type: "single",
          releaseDate: "March 27, 2026",
          coverArt: "/covers/here-comes-trouble.jpg",
          spotifyUrl: "https://open.spotify.com/track/09PEDl4c5eTMurEy3D8UBf",
          appleMusicUrl: "https://music.apple.com/us/album/here-comes-trouble-single/1884911775",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=fUHdl8FfATQ",
          deezerUrl: "https://www.deezer.com/album/938760341",
          youtubeUrl: "https://youtu.be/LB1AaE91ErY",
          amazonMusicUrl: "https://music.amazon.com/search/Samaera+Here+Comes+Trouble"
        },
        {
          id: "tragedy",
          title: "Tragedy",
          type: "single",
          releaseDate: "February 6, 2026",
          coverArt: "/covers/tragedy.jpg",
          spotifyUrl: "https://open.spotify.com/track/2H90nvIp4FsayFlVAExroZ",
          appleMusicUrl: "https://music.apple.com/us/album/tragedy-single/1871051036",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=1czdG-m8ufA",
          deezerUrl: "https://www.deezer.com/album/902356502",
          youtubeUrl: "https://youtu.be/VcWLYvsfY6w",
          amazonMusicUrl: "https://music.amazon.com/search/Samaera+Tragedy"
        },
        {
          id: "one-of-one",
          title: "One of One",
          type: "single",
          releaseDate: "January 30, 2026",
          coverArt: "/covers/one-of-one.jpg",
          spotifyUrl: "https://open.spotify.com/track/3DmToXfhapPlhIeceae5qF",
          appleMusicUrl: "https://music.apple.com/us/album/one-of-one-single/1867491720",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=6_VWrjmZvLY",
          deezerUrl: "https://www.deezer.com/album/893399782",
          amazonMusicUrl: "https://music.amazon.com/search/Samaera+One+of+One"
        },
        {
          id: "miss-me",
          title: "Miss Me",
          type: "single",
          releaseDate: "July 18, 2025",
          coverArt: "/covers/miss-me.jpg",
          spotifyUrl: "https://open.spotify.com/track/3Ml4F9ix0up2m8LwN3tdLB",
          appleMusicUrl: "https://music.apple.com/us/album/miss-me-single/1825456128",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=a9hmtA6Cah4",
          deezerUrl: "https://www.deezer.com/album/784361191",
          amazonMusicUrl: "https://music.amazon.com/search/Samaera+Miss+Me"
        },
        {
          id: "midsommar",
          title: "Midsommar",
          type: "single",
          releaseDate: "April 30, 2025",
          coverArt: "/covers/midsommar.jpg",
          spotifyUrl: "https://open.spotify.com/track/3BZLI6guBiHls50YCOqrIo",
          appleMusicUrl: "https://music.apple.com/us/album/midsommar-single/1811300487",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=dzwESvgfP2g",
          deezerUrl: "https://www.deezer.com/album/749116561",
          youtubeUrl: "https://youtu.be/wIIHbg1Xt8k",
          amazonMusicUrl: "https://music.amazon.com/search/Samaera+Midsommar"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "simon-says",
          title: "Simon Says (Official Visualizer)",
          youtubeId: "QRak6V86ZQ0",
          thumbnail: "https://i.ytimg.com/vi/QRak6V86ZQ0/hqdefault.jpg"
        },
        {
          id: "here-comes-trouble",
          title: "Here Comes Trouble",
          youtubeId: "LB1AaE91ErY",
          thumbnail: "https://i.ytimg.com/vi/LB1AaE91ErY/hqdefault.jpg"
        },
        {
          id: "tragedy",
          title: "Tragedy",
          youtubeId: "VcWLYvsfY6w",
          thumbnail: "https://i.ytimg.com/vi/VcWLYvsfY6w/hqdefault.jpg"
        },
        {
          id: "midsommar",
          title: "Midsommar",
          youtubeId: "wIIHbg1Xt8k",
          thumbnail: "https://i.ytimg.com/vi/wIIHbg1Xt8k/hqdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
