let items = ["Backpack", "MiBand watch", "Ring"];
console.log(items);
let list = document.getElementById("list");
function veListItems(items) {
    for (let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li>${items[i]} <button onclick="xoa(${i})">Remove</button></li>`);
    }
}
function xoa(i) {
    items.splice(i, 1);
    list.innerHTML = ""; // xét nội dung bên trong thằng list là rỗng để reset
    // sau đó in lại list
    veListItems(items);
}
veListItems(items);

//xóa item test
list.children[0].remove();
list.children[0].remove();
// lấy ra ô input và nút add
let inputText = document.getElementById("inputText");
let btnAdd = document.getElementById("btn");

//bắt sự kiện cho nút add và gán nút remove bên cạnh
btnAdd.addEventListener("click", () => {
    items.push(inputText.value);
    list.innerHTML = ""; // xét nội dung bên trong thằng list là rỗng để reset
    // sau đó in lại list
    veListItems(items);
    inputText.value = "";
})