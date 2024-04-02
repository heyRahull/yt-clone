// Function to randomly select an API key from the array
const getRandomAPIKey = () => {
  const randomIndex = Math.floor(Math.random() * GOOGLE_API_KEYS.length);
  return GOOGLE_API_KEYS[randomIndex];
};

const maxResults = 10;

const GOOGLE_API_KEYS = [
  "AIzaSyAEfp84SRpo9Hdem-jZKCVlhTjOSKYvZHM", //ra4518272@gmail.com
  "AIzaSyAhVrAbwHT7DvdGgtspPhuZJhA4-SWI-50", //raag3484@gmail.com
  "AIzaSyAaU83nbt37T5IBZVVZhQwowp33wmxcKhs", //rahulagar55@gmail.com
  "AIzaSyAY4qmghvNu0T_ByzL6JiQmXN7ci_wTTIs", //rahulag774@gmail.com
  "AIzaSyA3u07GJUCJ8xCy6r-PAs_ZuKqxl-NN2TM", //thehumblecoder1@gmail.com
  "AIzaSyBSJzUnMJU2798CpYxlcAThZjUxZwdlmeo",
  "AIzaSyCZ5rnHAsF8u5Ir8RgViHeQGl8uelbTi5c", //raag3484@gmail.com
];

export const GOOGLE_API_KEY = getRandomAPIKey();

export const LIVE_CHAT_COUNT = 28;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SUGGESTION_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}`; //maxResults=50

export const YOUTUBE_SEARCHBYKEYWORD_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}`; //maxResults=50

export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=${maxResults}`; //maxResults=50

export const VIDEO_CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US";

export const CHANNEL_DETAIL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";

export const formatViewCount = (viewCount) => {
  viewCount = parseInt(viewCount); // Convert viewCount to a number
  // Check if viewCount is greater than or equal to 1 million
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  }
  // Check if viewCount is greater than or equal to 1 thousand
  else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(0) + "K";
  }
  // For view counts less than 1 thousand
  else {
    return viewCount;
  }
};

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
