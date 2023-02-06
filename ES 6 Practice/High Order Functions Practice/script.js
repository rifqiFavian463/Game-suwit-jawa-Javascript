const list = Array.from(document.querySelectorAll("[data-duration]"));
// Filter Javascript Lanjutan
const jsFilter = list
  .filter((value) => value.innerHTML.includes("JAVASCRIPT LANJUTAN"))
  .map((parts) => parts.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseInt(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((acc, curr) => {
    return (acc += curr);
  });
console.log(jsFilter);
let jumlah = list.filter((value) => value.innerHTML.includes("JAVASCRIPT LANJUTAN")).length;
let pJumlah = document.querySelector(".jumlah-video");
console.log(pJumlah);
