// Callback sync
function halo(nama) {
  alert(`halo${nama}`);
}

function getNama(Callback) {
  let nama = "rifqi";
  Callback(nama);
}
getNama(halo);

// Promise Practice
const result = true;
const promise = new Promise((resolve, reject) => {
  if (!result) {
    resolve("Lah kocak, bener");
  } else {
    reject(new Error("Lah salah njir"));
  }
});
promise
  .then(
    (r) => console.log(r)
    // (e) => console.log(e)
  )
  .catch((e) => console.log(e));
console.log(promise);
