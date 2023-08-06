const container = document.getElementById("list");
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`beforebegin`, `<li>${i}</li>`);
}
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`afterend`, `<li>${i}</li>`);
}
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML(`beforeend`, `<li>${i}</li>`);
}
const a = document.getElementsByTagName("div");
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
a[1].remove();
console.log(a);

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    console.log(e);
})
let inp = document.getElementById("inp");
inp.addEventListener("keydown", (e) => {
    console.log(e.key);
})