# Cozy Tiny World — Tripo asset planı

Referans: Gürsel Günacar'ın Three.js ile yaptığı küçük küresel çayır demosu. Bizim sürümümüzde yonca arama veya toplama mekaniği yok. Oyuncu, karakteri üçüncü şahıs kamerayla kontrol ederek küçük dünyada serbestçe dolaşacak.

## Altı parçalık set

| Dosya | Tripo'da üretim | Hedef kullanım | Önerilen yoğunluk |
|---|---|---|---|
| `01-explorer-character.png` | Image to 3D → Smart Mesh P2.0 → Human Rig | Oynanabilir karakter | 25–35K yüz |
| `02-round-canopy-tree.png` | Image to 3D → HD Model | Döndürülüp ölçeklenerek çoğaltılan ağaç | 12–20K yüz |
| `03-meadow-flower-patch.png` | Image to 3D → HD Model | Papatya, mavi çan çiçeği, pembe kır çiçeği ve ot kümesi | 10–18K yüz |
| `04-stone-well.png` | Image to 3D → HD Model | Dünyanın ana odak noktası | 18–28K yüz |
| `05-cozy-cottage.png` | Image to 3D → HD Model | Dünyanın ikinci ana odak noktası | 28–45K yüz |
| `06-fence-gate-module.png` | Image to 3D → HD Model | Sınır, patika ve ev çevresi | 10–18K yüz |

## Tripo ayarları

- Her görseli **ayrı ayrı** yükle.
- Karakterde **Smart Mesh P2.0 / İnsan** kullan; diğerlerinde **HD Model** kullan.
- Dokuda önce 4K yeterli. 8K bu küçük ve stilize dünyada dosyayı büyütür fakat ekranda belirgin fark yaratmaz.
- Karakteri rigledikten sonra en az `Idle`, `Walk` ve `Run` animasyonlarını ekle.
- Çıktıyı `GLB` olarak, doku ve iskelet dahil indir.
- Karakterin oyun yüksekliği `1.65 m` kabul edilecek. Diğer ölçekler: ev `4.8 m`, ağaç `4.2–5.5 m`, kuyu `1.7 m`, çit `1.15 m`, çiçek kümesi `0.25–0.65 m`.
- Çiçek kümesini oyunda 0.7–1.25 arası ölçekleyip Y ekseninde döndürerek tekrar kullan. Böylece tek asset birkaç farklı küme gibi görünür.
- Evin kapısı ve kuyunun içi bu ilk prototipte etkileşimli olmayacak; bunları statik çevre modeli olarak tut.

## Oyun hedefi

- Küçük, küresel veya kuvvetli biçimde bombeli bir çayır dünyası.
- TPV kamera karakterin arkasında ve biraz yukarısında; fareyle yörüngede dönebilir.
- `WASD` hareket, `Shift` koşma, `Space` hafif zıplama.
- Karakter yürüdüğü yöne yumuşak biçimde döner.
- Kamera duvar, ev veya ağaca girdiğinde öne çekilir.
- Yonca, skor, görev, toplama, sayaç ve oyun sonu yok.
- Düşük poligonlu sıcak görsel dil, yumuşak güneş, açık mavi gökyüzü ve hafif rüzgâr animasyonu.
- Ağaç, çit ve çiçekler `InstancedMesh` ile çoğaltılır; ev ve kuyu tekil yerleştirilir.

