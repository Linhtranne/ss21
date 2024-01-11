let weight = parseFloat(prompt("Nhap can:"));
let height = parseFloat(prompt("Nhap chieu cao :"));

let bmi = weight / (height ** 2);
console.log("BMI: " + bmi);
if (bmi < 18.5) {
    console.log("Gầy");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Bình thường");
} else if (bmi >= 25) {
    console.log("Thừa cân");
} else if(bmi >= 25 && bmi <= 29.9 ){
    console.log("béo phì");
}else if(bmi >= 30 && bmi <= 34.9 ){
    console.log("béo phì độ I");
}else if(bmi >= 35 && bmi <= 39.9 ){
    console.log("béo phì độ II");
}else{
    console.log("béo phì độ III");
}