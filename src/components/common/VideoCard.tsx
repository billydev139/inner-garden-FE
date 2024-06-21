import React from 'react';
import 'video-react/dist/video-react.css';
// import { Player } from 'video-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoSrc: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, videoSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <video
        playsInline
        poster={thumbnail}
        src={videoSrc}
        // fluid={false}
        width={300}
        height={200}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
