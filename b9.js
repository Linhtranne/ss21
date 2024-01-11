let a = parseFloat(prompt("Nhap a:"));
let b = parseFloat(prompt("Nhap b:"));
let c = parseFloat(prompt("Nhap c:"));
let arr = [a, b, c];
arr.sort(function (x, y) {
    return x - y;
});
console.log("Tang dan: " + arr[0] + ", " + arr[1] + ", " + arr[2]);