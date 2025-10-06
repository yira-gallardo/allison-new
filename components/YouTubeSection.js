import DynamicVideo from "./DynamicVideo";

export default function YouTubeSection() {
  // You can set these as environment variables or props
  const channelId =
    process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUR_CHANNEL_ID_HERE";
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";

  return <DynamicVideo channelId={channelId} apiKey={apiKey} />;
}
