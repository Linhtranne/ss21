let Toan = parseFloat(prompt("Toán:"));
let Van = parseFloat(prompt("Văn:"));
let Anh = parseFloat(prompt("Anh:"));
let TrungBinh = (Toan + Van + Anh) / 3;
if (TrungBinh >= 8.0 && TrungBinh <= 10) {
    console.log("GIỎI");
} else if (TrungBinh >= 6.5 && TrungBinh <= 7.9) {
    console.log("KHÁ");
} else if (TrungBinh >= 5.0 && TrungBinh <= 6.4) {
    console.log("TRUNG BÌNH");
} else if(TrungBinh < 5.0){
    console.log("YẾU");
}else {
    console.log("Sai.");
}