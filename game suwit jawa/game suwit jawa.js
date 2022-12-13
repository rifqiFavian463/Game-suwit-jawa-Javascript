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
  imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["kelingking", "telunjuk", "jempol"];
  let i = 0;
  waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}
gambarPlayer = document.querySelectorAll("ul li img");
gambarPlayer.forEach((gambar) => {
  gambar.addEventListener("click", function () {
    pilihanPlayer = gambar.className;
    pilihanCom = pilihanComputer();
    hasil = getHasil(pilihanPlayer, pilihanCom);
    console.log(pilihanCom);
    putar();
    setTimeout(function () {
      imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanCom + ".png");

      infoHasil = document.querySelector(".info");
      infoHasil.innerHTML = hasil;
    }, 1000);
  });
});
