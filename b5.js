let Month = prompt("Nhập vào số tháng trong năm):");
let inMonth = parseInt(Month);
if (inMonth >= 1 && inMonth <= 12) {
    switch (inMonth) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            console.log("Số ngày " + inMonth + " là 31 ngày.");
            break;
        case 4: case 6: case 9: case 11:
            console.log("Số ngày " + inMonth + " là 30 ngày.");
            break;
        case 2:
            console.log("Số ngày tháng 2 là 28 hoặc 29 ngày.");
            break;
        }
    } else {
        console.log("Sai.");
    }