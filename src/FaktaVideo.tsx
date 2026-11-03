import React from "react";
import {AbsoluteFill, Audio, Series, staticFile} from "remotion";
import data from "../data/fakta.json";
import {Intro} from "./scenes/Intro";
import {FaktaScene} from "./scenes/FaktaScene";
import {Outro} from "./scenes/Outro";
import {BarProgres} from "./components/BarProgres";
import {DETIK_INTRO, DETIK_OUTRO, FPS} from "./styles/tema";

export const FaktaVideo: React.FC = () => {
  const total = data.fakta.length;

  return (
    <AbsoluteFill style={{backgroundColor: "#000"}}>
      <Series>
        <Series.Sequence durationInFrames={DETIK_INTRO * FPS}>
          <Intro judul={data.judul} />
        </Series.Sequence>

        {data.fakta.map((f, i) => (
          <Series.Sequence key={i} durationInFrames={Math.round(f.detik * FPS)}>
            <FaktaScene nomor={i + 1} total={total} teks={f.teks} warna={f.warna} />
          </Series.Sequence>
        ))}

        <Series.Sequence durationInFrames={DETIK_OUTRO * FPS}>
          <Outro penutup={data.penutup} />
        </Series.Sequence>
      </Series>

      <BarProgres />

      {/* Musik opsional: isi "musik" di data/fakta.json, mis. "musik/latar.mp3" */}
      {data.musik ? <Audio src={staticFile(data.musik)} volume={0.3} /> : null}
    </AbsoluteFill>
  );
};
