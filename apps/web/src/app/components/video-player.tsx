'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  title: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  onPlay?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  thumbnail,
  title,
  autoplay = false,
  loop = false,
  controls = true,
  className = '',
  onPlay,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      if (!isPlaying) onPlay?.();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        autoPlay={autoplay}
        loop={loop}
        muted={isMuted}
        className="w-full h-full object-cover"
      />

      {/* Custom Controls */}
      {controls && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          {/* Title Overlay */}
          <div>
            <h3 className="text-white font-semibold text-lg drop-shadow-lg">{title}</h3>
          </div>

          {/* Controls Bottom */}
          <div className="flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="bg-brand-500 hover:bg-brand-600 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={toggleMute}
              className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      )}

      {/* Placeholder Indicator */}
      {videoUrl.includes('REPLACE_WITH_YOUR') && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center text-white">
            <p className="text-lg font-semibold mb-2">Video Placeholder</p>
            <p className="text-sm opacity-75">Replace with your video URL</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
