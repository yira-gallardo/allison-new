import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const channelHandle = searchParams.get("channelHandle");

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!channelHandle || !apiKey) {
    return NextResponse.json(
      { error: "Channel handle and API key are required" },
      { status: 400 }
    );
  }

  try {
    let channelData;

    // If it's a channel ID (starts with UC), use it directly
    if (channelHandle.startsWith("UC")) {
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelHandle}&key=${apiKey}`
      );

      if (!channelResponse.ok) {
        throw new Error("Failed to fetch channel data");
      }

      channelData = await channelResponse.json();
    } else {
      // Otherwise, search for the channel by handle/username
      const searchQuery = channelHandle.startsWith("@")
        ? channelHandle.substring(1)
        : channelHandle;

      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
          searchQuery
        )}&key=${apiKey}&maxResults=1`
      );

      if (!searchResponse.ok) {
        throw new Error("Failed to search for channel");
      }

      const searchData = await searchResponse.json();

      if (!searchData.items || searchData.items.length === 0) {
        throw new Error("Channel not found");
      }

      const channelId = searchData.items[0].snippet.channelId;

      // Now get the channel details with the found channel ID
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
      );

      if (!channelResponse.ok) {
        throw new Error("Failed to fetch channel data");
      }

      channelData = await channelResponse.json();
    }

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Get the latest video from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&order=date&key=${apiKey}`
    );

    if (!videosResponse.ok) {
      throw new Error("Failed to fetch videos");
    }

    const videosData = await videosResponse.json();

    if (!videosData.items || videosData.items.length === 0) {
      throw new Error("No videos found");
    }

    return NextResponse.json(videosData.items[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
