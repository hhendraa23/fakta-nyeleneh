import React from "react";
import {AbsoluteFill, useCurrentFrame} from "remotion";
import {tema} from "../styles/tema";

// Latar gradien yang sudutnya bergerak pelan.
export const Latar: React.FC<{warna: string}> = ({warna}) => {
  const frame = useCurrentFrame();
  const sudut = 160 + Math.sin(frame / 60) * 20;
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${sudut}deg, ${warna} 0%, ${tema.gelap} 85%)`,
      }}
    />
  );
};
