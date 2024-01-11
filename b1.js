
var userInput = prompt("May sinh nam bao nhieu?");
var birthYear = parseInt(userInput);
if (!isNaN(birthYear)) {
    var currentYears = new Date().getFullYear();
    var ages = currentYear - birthYear;
    alert("Tuoi may la: " + age + " tuổi");
} else {
    alert("Giá trị không hợp lệ. Vui lòng nhập một số năm sinh.");
}
