import DynamicVideo from "./DynamicVideo";

export default function YouTubeSection() {
  // YouTube API configuration from environment variables
  const channelHandle = process.env.YOUTUBE_CHANNEL_HANDLE || "@allison";
  const apiKey = process.env.YOUTUBE_API_KEY || "";

  return <DynamicVideo channelHandle={channelHandle} apiKey={apiKey} />;
}
