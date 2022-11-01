nRandom = Math.floor(Math.random() * 11);

batas = 3;
for (i = 0; i < batas; i++) {
  let inputan = parseInt(prompt("\nMasukkan angka yang akan kamu tebak: "));

  if (inputan == nRandom) {
    alert("Tebakan anda benar!");
    break;
  } else {
    inputan < nRandom ? alert("Nilai yang kamu masukkan terlalu rendah") : alert("Nilai yang kamu masukkan terlalu tinggi");
  }
}

if (i > batas) {
  alert("Kamu telah melebihi batas sebanyak" + batas);
}
