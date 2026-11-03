import React from "react";
import {Composition} from "remotion";
import {FaktaVideo} from "./FaktaVideo";
import {hitungDurasiFrame} from "./durasi";
import {FPS, LEBAR, TINGGI} from "./styles/tema";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="FaktaNyeleneh"
      component={FaktaVideo}
      durationInFrames={hitungDurasiFrame()}
      fps={FPS}
      width={LEBAR}
      height={TINGGI}
    />
  );
};
