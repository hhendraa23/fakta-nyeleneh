import React from "react";
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {Latar} from "../components/Latar";
import {tema} from "../styles/tema";

export const Intro: React.FC<{judul: string}> = ({judul}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, config: {damping: 10}});
  const skala = interpolate(s, [0, 1], [0.6, 1]);

  return (
    <AbsoluteFill>
      <Latar warna="#7B2CBF" />
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center", padding: "0 80px"}}>
        <div
          style={{
            transform: `scale(${skala})`,
            opacity: Math.min(1, s),
            fontFamily: tema.font,
            fontSize: 150,
            fontWeight: 900,
            lineHeight: 1.1,
            textAlign: "center",
            color: tema.aksen,
            textShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {judul}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
