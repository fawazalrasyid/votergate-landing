# Planning — Landing Page VoterGate (Rebuild)

Dibuat: 7 Oct 2026 · Status: draft v2 — desain asli ketemu di Figma, menunggu ekspor aset/token
Catatan sumber: kode asli votergate.id hilang dan tidak ada di GitHub. Satu-satunya sisa situs lama adalah shell `index.html` (Wayback 29 Mar & 27 Jul 2024): judul "Votergate", font Poppins, SPA kosong. Konteks produk di bawah diambil dari sumber publik soal proyek VoterGate (portfolio LinkedIn + berita IdenTIK 2023 Kominfo) — diasumsikan proyek yang sama dengan votergate.id, perlu dikonfirmasi.

## 0. Sumber desain (update 7 Oct 2026)
- File sumber resmi: Figma "Votergate (Copy)" (`O2BjtfWmD3buUOwIi9qUZ3`, node 1256-76) — dipilih Fawaz 7 Oct 2026 menggantikan file asli; konten terverifikasi identik dengan file asli. File asli sebelumnya terverifikasi bisa diakses publik tanpa login (embed view; inspect butuh sign-up). Design context sudah ditarik via Figma MCP ke `figma-copy/` + `assets/figma/`.
- Node tersebut adalah frame **"Landing Page"** utuh: hero "Modern Voting with High Security and Flexibility", section perbandingan konvensional, section "Keamanan & Kepercayaan adalah yang Utama" (4 card), tagline "Your vote is yours. No one has access, even us.", FAQ "Pertanyaan yang Sering Ditanyakan", CTA penutup "Voting Sekarang!". Warna dominan navy/dark blue + aksen cyan/teal, orange, ungu. Cover file: "VoterGate : UIUX Designs App & Web — Timeline: 31 July 2023".
- Konsekuensi: build mengikuti desain Figma ini (bukan lagi brand dari nol). Struktur §4 di bawah adalah usulan awal dan akan diselaraskan ke frame Figma. Yang masih kurang: ekspor logo (SVG), hex warna & token persis, teks final per section, dan daftar page/frame lain di file (embed hanya menampilkan 1 page).

## 1. Tujuan
- Menghidupkan lagi votergate.id sebagai landing page publik (situs lama mati, domain sekarang parkir di DNSCloud.ID).
- Fungsi utama (pilih satu sebagai CTA utama): perkenalan produk / kumpulkan minat (waitlist) / ajak kontak untuk demo & kemitraan.
- Jadi bukti eksistensi proyek yang bisa dibagikan (pitch, lomba, portofolio).

## 2. Produk dalam satu kalimat
VoterGate adalah aplikasi pemungutan suara berbasis blockchain dengan sistem terpusat yang menjamin keamanan data suara dan data pengguna — menjawab masalah voting konvensional yang rumit, lama, dan mahal.

## 3. Target audiens (prioritas)
1. Penyelenggara voting skala organisasi: kampus/BEM, komunitas, asosiasi, perusahaan (RUPS, pemilihan internal).
2. Juri/program inkubasi & calon mitra (konteks IdenTIK, Startup Studio Indonesia, HUB.ID).
3. Publik umum yang penasaran (sekunder).

## 4. Struktur halaman (one-page, urutan usulan)
1. **Navbar** — logo VoterGate, menu (Masalah, Solusi, Fitur, Cara Kerja, Prestasi, FAQ), tombol CTA.
2. **Hero** — headline + subheadline, 1 CTA utama + 1 CTA sekunder, visual mockup dashboard/aplikasi voting, badge "Juara 2 Digital Innovation — IdenTIK 2023".
3. **Masalah** — voting konvensional: rumit, memakan waktu, biaya besar, rawan manipulasi & sulit diverifikasi.
4. **Solusi / Cara kerja** — 3–4 langkah: buat pemungutan → undang pemilih terverifikasi → voting aman → hasil terverifikasi & transparan.
5. **Fitur utama** — keamanan blockchain, integritas & auditabilitas hasil, verifikasi pemilih, efisiensi biaya/waktu, dashboard hasil real-time.
6. **Keamanan & kepercayaan** — penjelasan plain soal apa yang dicatat di blockchain vs yang terpusat, anti klaim berlebihan.
7. **Untuk siapa / use case** — kampus, organisasi, komunitas, perusahaan.
8. **Prestasi & perjalanan** — timeline Nov 2022–Mar 2023 (pengembangan), Juara 2 IdenTIK 2023 kategori Digital Innovation (Kominfo), peluang Startup Studio Indonesia / HUB.ID 2024.
9. **FAQ** — 4–6 pertanyaan (keamanan data, bedanya sama form online biasa, skala pemilih, harga/kontak).
10. **CTA penutup + Footer** — kontak, kredit, link arsip bila perlu.

## 5. Opsi headline (pilih/sunting)
- "Voting modern yang aman, transparan, dan bisa diverifikasi."
- "Pemungutan suara tanpa drama: aman di blockchain, jelas hasilnya."
- "Cara baru memilih — cepat, hemat, dan terjamin keamanannya."
Prinsip copy: Bahasa Indonesia, lugas, hindari jargon blockchain yang tidak perlu, nol klaim yang tidak bisa dibuktikan.

## 6. Desain
- **Font:** Poppins (sama seperti situs asli — kontinuitas brand), weight 400–800.
- **Arah visual (pilih satu):** (A) light clean, navy + aksen biru elektrik; (B) dark premium, navy gelap + aksen cyan/ungu; (C) light dengan gradasi ungu-biru.
- **Aset yang dibutuhkan:** logo (ada/tidak?), mockup UI (bisa dibuat ulang sebagai ilustrasi), ikon fitur, OG image.
- Responsif mobile-first, animasi ringan (scroll reveal), tidak ada framework UI berat.

## 7. Tech plan (usulan)
- **Rekomendasi:** situs statis (1 file HTML + CSS + JS vanilla, atau Astro bila mau komponen rapi) — cepat, murah, gampang dirawat, cocok untuk landing. **Keputusan Fawaz 2026-10-07: tanpa framework dulu (HTML/CSS/JS vanilla, buildless).**
- Alternatif: Next.js (konsisten dengan stack splitz) — hanya bila nanti berkembang jadi app/dashboard.
- **Hosting:** Netlify (situs asli dulu di Netlify) atau Vercel; deploy dari GitHub repo baru — kali ini wajib version control sejak hari pertama.
- **Domain:** repoint DNS votergate.id dari parkir DNSCloud.ID ke hosting baru (perlu akses registrar/DNS zone).
- SEO dasar: title/meta description, OG tags, favicon, sitemap sederhana. Analytics opsional (Plausible/GA).

## 8. Tahapan kerja
1. Konfirmasi planning ini (keputusan di §9). — *sekarang*
2. Kunci copy (headline, section text, FAQ) — draft dari gw, Fawaz review.
3. Kunci visual (palet + layout) — gw buat 1 versi utuh untuk direview, bukan pixel-perfect dulu.
4. Build statis + isi konten, cek mobile/desktop.
5. Deploy + repoint DNS votergate.id, verifikasi live.
6. (Opsional) Form waitlist/kontak, analytics, halaman EN.

## 9. Keputusan yang perlu dari Fawaz
1. Ini proyek VoterGate yang sama dengan yang menang IdenTIK 2023? Boleh pakai klaim prestasinya di landing?
2. CTA utama: waitlist, "hubungi kami", atau sekadar showcase/portofolio?
3. Bahasa: Indonesia saja, atau ID + EN?
4. Masih punya logo/aset brand lama? Kalau tidak, gw bikinkan wordmark sederhana.
5. Arah visual: A (light navy), B (dark premium), atau C (gradasi)?
6. Kontak yang ditampilkan: email apa?

## 10. Catatan jujur
- Kode lama hilang permanen, tapi **desainnya selamat di Figma** — jadi ini rebuild mengikuti desain, bukan restorasi kode. Copy mengikuti frame Figma persis kecuali Fawaz memutuskan lain.

## 11. Responsive & fidelity (instruksi Fawaz 7 Oct 2026)
- Ikuti frame "Landing Page" di Figma **persis**: urutan section, copy, warna, gaya. Token warna/tipe dicatat di `BRAND.md` (sementara dari sampling piksel, dikunci setelah ekspor/inspect Figma).
- Breakpoint: desktop ≥1200px (patokan frame), tablet 768–1199px, mobile <768px. Container ±1200px, grid fluid, font `clamp()`.
- Mobile: hero copy → visual, card stack 1 kolom (tablet 2), FAQ full-width, target sentuh ≥44px.
- QA wajib: screenshot 360/390/768/1024/1440 dibandingkan dengan frame Figma per section sebelum selesai.
- Yang masih dibutuhkan dari Figma: ekspor logo SVG + aset mockup/ilustrasi, daftar page lain (cover menyebut App & Web), dan tujuan tombol "Voting Sekarang!".
