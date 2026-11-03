import React from "react";
import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";

type Props = {
  teks: string;
  ukuran?: number;
  warna?: string;
  jedaPerKata?: number; // jeda antar kata, dalam frame
  mulai?: number; // frame mulai animasi
  fontFamily?: string;
};

// Teks yang muncul kata demi kata.
export const TeksAnimasi: React.FC<Props> = ({
  teks,
  ukuran = 84,
  warna = "#FFFFFF",
  jedaPerKata = 4,
  mulai = 0,
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const kata = teks.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px 24px",
        fontSize: ukuran,
        lineHeight: 1.2,
        fontWeight: 900,
        textAlign: "center",
        color: warna,
        fontFamily,
        textShadow: "0 6px 20px rgba(0,0,0,0.45)",
      }}
    >
      {kata.map((k, i) => {
        const p = spring({
          frame: frame - mulai - i * jedaPerKata,
          fps,
          config: {damping: 14},
        });
        const y = interpolate(p, [0, 1], [40, 0]);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: Math.min(1, Math.max(0, p)),
              transform: `translateY(${y}px)`,
            }}
          >
            {k}
          </span>
        );
      })}
    </div>
  );
};
