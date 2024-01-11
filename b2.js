let inputNumber = prompt('Nhap so di');
let userNumber = parseInt (inputNumber);
if (!isNaN(userNumber)){
    alert('Nhap sai roi may oi');
}else if (userNumber % 2 === 1){
    alert('So le may oi');
}else if (userNumber % 2 === 0){
    alert('So chan may oi');
}


