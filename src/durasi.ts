import data from "../data/fakta.json";
import {DETIK_INTRO, DETIK_OUTRO, FPS} from "./styles/tema";

// Total durasi video dalam frame, dihitung otomatis dari data/fakta.json.
export const hitungDurasiFrame = (): number => {
  const detikFakta = data.fakta.reduce((jumlah, f) => jumlah + f.detik, 0);
  const totalDetik = DETIK_INTRO + detikFakta + DETIK_OUTRO;
  if (totalDetik > 60) {
    console.warn(
      `Durasi ${totalDetik} detik melebihi 60 detik. Kurangi fakta agar sah sebagai Shorts.`
    );
  }
  return Math.round(totalDetik * FPS);
};
