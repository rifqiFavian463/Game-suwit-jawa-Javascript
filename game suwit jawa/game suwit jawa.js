let randomA = Math.floor(Math.random() * 3);

let comp = "";
if ((randomA = 0)) {
  comp = "kelingking";
} else if ((randomA = 1)) {
  comp = "jempol";
} else {
  comp = "telunjuk";
}

konfirmasi = true;
while (konfirmasi === true) {
  let inputan = prompt("masukkan jari yang kamu pilih (telunjuk, jempol, kelingking) :");

  if (inputan == comp) {
    alert("Hasilnya seri!");
  } else if (inputan == "kelingking") {
    comp == "jempol"
      ? alert("Komputer memilih : " + comp + " dan kamu memilih : " + inputan + " maka kamu menang!")
      : alert("Komputer memilih : + " + comp + " dan kamu memilih : " + inputan + " maka kamu kalah!");
  } else if (inputan == "jempol") {
    comp == "telunjuk"
      ? alert("Komputer memilih : " + comp + " dan kamu memilih : " + inputan + " maka kamu menang!")
      : alert("Komputer memilih : " + comp + " dan kamu memilih : " + inputan + " maka kamu kalah!");
  } else if (inputan == "telunjuk") {
    comp == "kelingking"
      ? alert("Komputer memilih : " + comp + " dan kamu memilih : " + inputan + " maka kamu menang!")
      : alert("Komputer memilih : " + comp + " dan kamu memilih : " + inputan + " maka kamu kalah!");
  } else {
    alert("Prompt yang kamu masukkan salah!");
  }

  konfirmasi = confirm("Ingin bermain lagi?");
}
