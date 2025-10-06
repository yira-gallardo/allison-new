"use client";

import { useState, useEffect } from "react";

export default function DynamicVideo({ channelId, apiKey }) {
  const [latestVideo, setLatestVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      if (!channelId || !apiKey) {
        setError("Channel ID and API key are required");
        setLoading(false);
        return;
      }

      try {
        // First, get the uploads playlist ID
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );

        if (!channelResponse.ok) {
          throw new Error("Failed to fetch channel data");
        }

        const channelData = await channelResponse.json();

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

        setLatestVideo(videosData.items[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideo();
  }, [channelId, apiKey]);

  if (loading) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 md:h-16 w-12 md:w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-white text-base md:text-lg">
                Loading latest video...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-orange-500 mb-6 md:mb-8 tracking-wider">
                V I D E O
              </h2>
              <p className="text-red-400 text-base md:text-lg mb-4">
                Error: {error}
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                Please check your API configuration
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!latestVideo) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-orange-500 mb-6 md:mb-8 tracking-wider">
                V I D E O
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                No videos found
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const videoId = latestVideo.snippet.resourceId.videoId;

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Embedded YouTube Player - Responsive */}
      <div className="w-full h-screen">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
          title={latestVideo.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
