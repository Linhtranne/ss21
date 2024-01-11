let a = +prompt('so 1')
let b = +prompt('so 2')
if ( !isNaN(a) && !isNaN(b)) {
    var phep = prompt('Nhap phep toan:')
    switch(phep){
        case  '+' :
            console.log(a+b);
            break;
        case  '-':
            console.log(a+b);
            break;
        case  '*':
            console.log(a+b);
            break;
        case '/':
            console.log(a+b);
            break;
            default: 
            console.log('nhap phep tinh + - * /');
        }
}else{
    console.log('Sai roi.')
}