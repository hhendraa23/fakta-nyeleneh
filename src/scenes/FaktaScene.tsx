import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {Latar} from "../components/Latar";
import {TeksAnimasi} from "../components/TeksAnimasi";
import {tema} from "../styles/tema";

type Props = {nomor: number; total: number; teks: string; warna: string};

export const FaktaScene: React.FC<Props> = ({nomor, total, teks, warna}) => {
  const frame = useCurrentFrame();
  const opasitasLabel = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill>
      <Latar warna={warna} />
      {/* Padding bawah besar agar teks tidak tertutup tombol dan judul Shorts */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "180px 90px 420px 90px",
          gap: 60,
        }}
      >
        <div
          style={{
            opacity: opasitasLabel,
            fontFamily: tema.font,
            fontSize: 56,
            fontWeight: 900,
            color: tema.aksen,
            letterSpacing: 4,
          }}
        >
          {`FAKTA ${nomor}/${total}`}
        </div>
        <TeksAnimasi teks={teks} ukuran={88} fontFamily={tema.font} mulai={6} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
