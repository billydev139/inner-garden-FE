"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles";
interface VideoCardProps {
  tumbnailImage: any; 
  videoUrl: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ tumbnailImage, videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-white border-4 border-tetra rounded-lg">
      <div className="w-full h-[200px]">
        {!isPlaying ? (
          <div
            onClick={handlePlayVideo}
            className="cursor-pointer w-full h-full relative"

          >
            <div className="relative w-full h-full">
              <Image
                src={tumbnailImage}
                alt="Poster"
                layout="fill"
                objectFit="cover"
                className="thumbnail-image"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-play"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              style={{ border: "none" }}
            ></iframe>
          </div>
        )}
      </div>
      <h2 className={`text-center py-6 text-tertiary ${styles.subHeading}`}>{title}</h2>
    </section>
  );
};

export default VideoCard;
