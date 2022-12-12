let sliders = document.querySelectorAll("input[type=range]");

sliders.forEach(function (inputan) {
  inputan.addEventListener("input", function () {
    const r = sliders[0].value;
    const g = sliders[1].value;
    const b = sliders[2].value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
});

document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  console.log(xPos);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
