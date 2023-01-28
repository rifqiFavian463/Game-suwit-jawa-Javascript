function pilihanComputer() {
  let randomA = Math.floor(Math.random() * 3);

  if (randomA == 0) return "kelingking";
  if (randomA == 1) return "jempol";
  if (randomA == 2) return "telunjuk";
}

function getHasil(inputan, comp) {
  if (inputan == comp) return "Seri";
  if (inputan == "kelingking") return comp == "jempol" ? "Menang" : "Kalah";
  if (inputan == "jempol") return comp == "telunjuk" ? "Menang" : "Kalah";
  if (inputan == "telunjuk") return comp == "kelingking" ? "Menang" : "Kalah";
}

function putar() {
  let arrGambar = ["kelingking", "jempol", "telunjuk"];
  let i = 0;
  waktuM = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuM > 1000) {
      clearInterval();
      return;
    }
    document.querySelector(".img-komputer").setAttribute("src", "img/" + arrGambar[i++] + ".png");
    if (i == arrGambar.length) {
      i = 0;
    }
  }, 100);
}
let pGambar = document.querySelectorAll("ul li img");
pGambar.forEach((gambar) => {
  gambar.addEventListener("click", () => {
    let pilihanP = gambar.className;
    let pilihanC = pilihanComputer();
    putar();
    Hasil = getHasil(pilihanP, pilihanC);
    setTimeout(() => {
      document.querySelector(".info").innerHTML = Hasil;
      document.querySelector(".img-komputer").setAttribute("src", "img/" + pilihanC + ".png");
    }, 1000);
  });
});
