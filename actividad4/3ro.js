function invertirNumero(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

console.log(invertirNumero(12345)); 
