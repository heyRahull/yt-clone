// Function to randomly select an API key from the array
export const getRandomAPIKey = () => {
  const randomIndex = Math.floor(Math.random() * GOOGLE_API_KEYS.length);
  return GOOGLE_API_KEYS[randomIndex];
};

export const GOOGLE_API_KEYS = [
  // "AIzaSyAEfp84SRpo9Hdem-jZKCVlhTjOSKYvZHM", //ra4518272@gmail.com
  // "AIzaSyAhVrAbwHT7DvdGgtspPhuZJhA4-SWI-50", //raag3484@gmail.com
  // "AIzaSyAaU83nbt37T5IBZVVZhQwowp33wmxcKhs", //rahulagar55@gmail.com
  // "AIzaSyAY4qmghvNu0T_ByzL6JiQmXN7ci_wTTIs", //rahulag774@gmail.com
  // "AIzaSyA3u07GJUCJ8xCy6r-PAs_ZuKqxl-NN2TM", //thehumblecoder1@gmail.com
  "AIzaSyBSJzUnMJU2798CpYxlcAThZjUxZwdlmeo",
];

export const GOOGLE_API_KEY = getRandomAPIKey();

export const LIVE_CHAT_COUNT = 15;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
