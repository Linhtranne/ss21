let inputNum = prompt("Nhap so:");
let Num = parseFloat(inputNum);
let key;
if (inputNum > 0) {
    key = "So duong";
} else if (inputNum < 0) {
    key = "Số am";
} else {
    key = "0";
}
console.log(key);