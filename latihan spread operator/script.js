const nama = document.querySelector(".nama");
const spread = [...nama.innerHTML].map((v) => `<span>${v}</span>`).join("");
nama.innerHTML = spread;

document.getElementsByTagName("span")[5].remove();

// console.log(filterSpan);
