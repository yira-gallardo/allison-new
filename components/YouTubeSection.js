import DynamicVideo from "./DynamicVideo";

export default function YouTubeSection() {
  // YouTube API configuration from environment variables
  const channelHandle = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_HANDLE || "@allison";
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";

  return <DynamicVideo channelHandle={channelHandle} apiKey={apiKey} />;
}
