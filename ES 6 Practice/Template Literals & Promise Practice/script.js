// spread operator practice(...)
const nama = document.querySelector(".nama");
const spread = nama.innerHTML
  .split("")
  .map((v) => `<span>${v}</span>`)
  .join("");
nama.innerHTML = spread;
// Bisa
const spans = document.querySelectorAll("span");
for (i = 0; i < spans.length; i++) {
  if (spans[i].innerHTML == " ") {
    spans[i].innerHTML = "&nbsp";
  }
}

// Tagged Template Literals practice(``)
const biodata = {
  nama: "Rifqi Favian Hibatullah",
  umur: "19",
};

let tampilkan = (strings, ...values) => {
  return strings.map((str, i) => {
    const hasil = `<p>${str}<span class="light">${values[i] || ""}</span></p>`;
    document.body.innerHTML += hasil;
  });
};

const kalimat = tampilkan`Halo nama saya ${biodata.nama}, umur saya ${biodata.umur}`;

// rest parameter practice

function jumlahkan(inisiator, ...values) {
  // Ribet
  // let isi = [];
  // for (i = 0; i <= values.length - 1; i++) {
  //   if (typeof values[i] === inisiator) {
  //     isi.push(values[i]);
  //   }
  // }
  // return isi;

  // Gampang
  return values.filter((v) => typeof v === inisiator);
}
console.log(jumlahkan("string", "beach", "lol", 1, 3, 4, 5));
