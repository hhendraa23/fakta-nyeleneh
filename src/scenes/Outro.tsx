import React from "react";
import {AbsoluteFill} from "remotion";
import {Latar} from "../components/Latar";
import {TeksAnimasi} from "../components/TeksAnimasi";
import {tema} from "../styles/tema";

export const Outro: React.FC<{penutup: string}> = ({penutup}) => {
  return (
    <AbsoluteFill>
      <Latar warna="#7B2CBF" />
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center", padding: "0 90px 300px 90px"}}>
        <TeksAnimasi teks={penutup} ukuran={92} warna={tema.aksen} fontFamily={tema.font} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
