# VoterGate — Landing Page

Landing page statis VoterGate, dibangun ulang mengikuti desain Figma ("Votergate (Copy)", node 1256:76) setelah source code lama hilang.

## Menjalankan

Tidak ada build step. Buka `index.html` langsung, atau serve folder ini dengan server statis apa pun:

```bash
python3 -m http.server 8000
```

lalu buka http://localhost:8000.

## Struktur

- `index.html` / `style.css` / `script.js` — halaman (HTML/CSS/JS vanilla, tanpa framework)
- `assets/` — aset gambar (logo, mockup, ornamen dari Figma) termasuk `og-image.png` dan `cta-phones.png`
- `robots.txt`, `sitemap.xml` — SEO untuk domain produksi https://votergate.id/

Kontak yang tampil: halo@votergate.id (tombol "Hubungi Kami" membuka mailto).
