let p3 = document.getElementsByClassName("p3")[0];

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "green";
});

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  let newP = document.createElement("li");
  newP.innerHTML = "Element Baru";

  const list = document.querySelector("section#b ul");
  list.append(newP);
});
