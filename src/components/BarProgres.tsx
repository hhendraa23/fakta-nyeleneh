import React from "react";
import {useCurrentFrame, useVideoConfig} from "remotion";
import {tema} from "../styles/tema";

// Bar tipis di bagian atas yang bertambah sepanjang video.
export const BarProgres: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const lebar = (frame / durationInFrames) * 100;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: 14,
        width: `${lebar}%`,
        backgroundColor: tema.aksen,
      }}
    />
  );
};
