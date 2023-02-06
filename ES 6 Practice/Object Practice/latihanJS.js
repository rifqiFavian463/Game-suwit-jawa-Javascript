// Object Literal

let mahasiswa = {
  nama: "Rifqi Favian Hibatullah",
  energi: 10,
  makan: function (makanan) {
    mahasiswa.energi += makanan;
  },
};
// Function declaration

function mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (makanan) {
    this.energi += makanan;
  };
  return mahasiswa;
}

// Constructor
Mahasiswa.prototype.makan = function (makanan) {
  this.energi += makanan;
};
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
let Rifqi = new Mahasiswa("Rifqi", 10);
Rifqi.makan(10);
console.log(Rifqi);
