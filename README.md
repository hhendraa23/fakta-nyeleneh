# FAKTA NYELENEH

Proyek YouTube Shorts (1080x1920, 30 fps) dengan Remotion. Semua konten ada di `data/fakta.json`.

## Menjalankan (Codespaces atau Linux)
1. `bash setup-linux.sh`  (sekali saja)
2. `npm install`
3. `npm run dev`     -> pratinjau di browser
4. `npm run render`  -> hasil di `out/fakta.mp4`

## Render lewat GitHub Actions
Tab Actions -> "Render video" -> Run workflow. Setelah selesai, unduh MP4 dari bagian Artifacts.

## Mengubah konten
Edit `data/fakta.json`. Total durasi harus di bawah 60 detik.
Musik opsional: taruh file di `public/musik/` lalu isi `"musik": "musik/namafile.mp3"`.
