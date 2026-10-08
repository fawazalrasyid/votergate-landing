# Brand & Design Tokens — VoterGate (dari Figma)

Audit: 7 Oct 2026 · Sumber: frame "Landing Page" (Figma node 1256-76) via embed publik, cover file Figma, `index.html` lama, dan aset yang dibagikan Fawaz 7 Oct 2026 (color palette + logo PNG, tersimpan di `assets/`).
Aturan: **Figma = spesifikasi.** Build mengikuti frame persis; token di bawah jangan diganti tanpa konfirmasi.

## Token resmi dari Figma MCP (terekstrak 7 Oct 2026)
Design context node 1256:76 berhasil ditarik (file `figma-design-context.json`, kode referensi `figma-code-reference.txt`, 55 aset terunduh ke `assets/figma/`). **File sumber resmi per 7 Oct 2026: "Votergate (Copy)" `O2BjtfWmD3buUOwIi9qUZ3` node 1256-76** — atas arahan Fawaz menggantikan file asli `c2RnTKUfgInhYhZSn9r9XH`; kontennya terverifikasi identik (kode sama setelah URL aset dibuang, teks & token sama, sampel aset hash-identik), ekstrak Copy tersimpan di `figma-copy/`.
- **Background navy:** `#01164D`, `#0A0331`, `#0E1135` · **Primary blue:** `#006DFF` · **Brand/logo blue:** `#2280FD` · **Ungu:** `#6654F1` · **Coral aksen:** `#FF7A57` · **Teks terang:** `#C9D1E8` · **Teks muted:** `#525E87` · **Cyan terang:** `#BDF3FF`.
- **Tipografi frame (koreksi):** DM Sans (utama: Regular/Medium/Bold), Encode Sans Expanded (display Bold/SemiBold), Space Grotesk (aksen Bold), Poppins & Plus Jakarta Sans (pemakaian minor). Poppins hanya terkonfirmasi untuk situs lama (`index.html`), bukan font utama frame.
- **Struktur frame persis:** Nav (Tentang, Fitur, Benefit, Teknologi, Cara Kerja, FAQ, Hubungi Kami; CTA "Unduh Sekarang") → Hero ("Modern Voting with High Security and Flexibility") → Teknologi (Biometric Verification, IPFS as Decentralize Storage, Secure Hash Algorithm, Blockchain as Decentralize DB) → Fitur (Voting Room, Voter Space, Voter Assist, Monetize) → Benefit (Kenyamanan, Cost Saving, Ketepatan, Keamanan Data) → "Kenapa VoterGate dibanding Konvensional?" → tagline "No one has access, even us." → FAQ (4 pertanyaan) → CTA "Voting Sekarang!" (demo + "Unduh Aplikasi").
- Catatan copy: typo asli di frame ("Apakaha votergate berbayar?") — **keputusan Fawaz 7 Oct 2026: perbaiki typo saat build** (isi teks tidak diubah). CTA ("Unduh Sekarang", "Voting Sekarang!", "Unduh Aplikasi") dan kontak = **placeholder dulu**. Klaim prestasi IdenTIK 2023 **tidak ditampilkan**.

## Logo (dari file yang dibagikan)
- `assets/logo-icon.png` (132×145) — centang biru di atas bentuk V coral; `assets/logo-full.png` (277×172) — wordmark "VoterGate": bagian "Voter" biru, "Gate" coral, huruf awal dibentuk dari gabungan centang+V logo.
- Warna logo terukur persis dari piksel: biru `#2280FD`, coral `#FF8C6E`, aksen bayangan biru `#0060E0` / coral `#FF6C46`.
- Catatan: resolusi PNG kecil — cukup untuk navbar/footer, tapi idealnya tetap minta ekspor SVG dari Figma untuk hasil tajam/retina.

## Color palette resmi (Material Design 50–900, dari `assets/color-palette.png`)
Warna dasar (BASE) terukur: biru `#2280FD` · coral `#FF8C6E` · hijau `#6CCC77` · merah-pink `#FF5070` · oranye `#FDAC71`.

| Shade | Biru | Coral | Hijau | Merah-pink | Oranye |
|---|---|---|---|---|---|
| 900 | #0038A5 | #741101 | #004700 | #8E001F | #622800 |
| 800 | #004ABB | #8B2815 | #005A0E | #A7002F | #783A01 |
| 700 | #005CD2 | #A33D26 | #006F22 | #C00040 | #8F4D16 |
| 600 | #006FE9 | #BB5238 | #1A8335 | #D92753 | #A6612A |
| 500 | #2983FF | #D3664B | #369948 | #F24366 | #BE753D |
| 400 | #5097FF | #EC7B5E | #4EAE5C | #FF5C7A | #D68950 |
| 300 | #6EACFF | #FF9172 | #65C570 | #FF748E | #EE9E64 |
| 200 | #89C2FF | #FFA687 | #7BDB85 | #FF8BA3 | #FFB479 |
| 100 | #A3D8FF | #FFBD9C | #92F29A | #FFA2B9 | #FFCA8E |
| 50 | #BCEEFF | #FFD3B2 | #A8FFB0 | #FFBACF | #FFE1A3 |

## Warna pemakaian di frame (sampling screenshot, belum token resmi)
- Background navy landing ≈ `#161C4A`, background cover ≈ `#132357` — label perkiraan sampai ada inspect/ekspor Figma.
- Biru tombol CTA di frame ≈ `#0E98FD` (sampling resolusi rendah; kandidat resminya `#2280FD` — cocokkan saat build).
- Teks utama di atas navy: putih `#FFFFFF`.

## Tipografi
- **Poppins** — terkonfirmasi dari `index.html` lama (Google Fonts, weight 100–900); headline Figma geometric bold konsisten dengan Poppins Bold. Skala ukuran persis menyusul setelah inspect.

## Komponen teridentifikasi di frame
Navbar + logo, tombol CTA biru rounded, hero visual chip/circuit, mockup HP voting, 4 card "Keamanan & Kepercayaan adalah yang Utama", FAQ "Pertanyaan yang Sering Ditanyakan", CTA penutup "Voting Sekarang!". Copy campuran EN (headline) + ID (body), tagline "Your vote is yours. No one has access, even us."

## Setup responsive (wajib)
- Breakpoint: desktop ≥1200px (ikuti frame), tablet 768–1199px, mobile <768px. Container ±1200px, grid fluid, font `clamp()`.
- Mobile: hero copy di atas visual, card stack 1 kolom (tablet 2 kolom), FAQ full-width, mockup skala proporsional, target sentuh ≥44px.
- Aset visual pakai hasil ekspor Figma (SVG/PNG), jangan digambar ulang.
- QA: screenshot 360/390/768/1024/1440 dibandingkan side-by-side dengan frame Figma sebelum selesai.
