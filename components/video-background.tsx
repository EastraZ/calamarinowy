"use client"

import { useEffect, useRef } from "react"

interface VideoBackgroundProps {
  videoId: string
}

export default function VideoBackground({ videoId }: VideoBackgroundProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Create YouTube Player API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(iframeRef.current!, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1, // Muted by default to allow autoplay
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
            // Set video quality to highest available
            event.target.setPlaybackQuality("hd1080")
          },
          onStateChange: (event) => {
            // Loop the video when it ends
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo()
            }
          },
        },
      })
    }

    return () => {
      // Clean up
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full scale-[1.2]">
        <iframe
          ref={iframeRef}
          id="youtube-player"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

// Add YouTube Player API type
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: (() => void) | null
  }
}
