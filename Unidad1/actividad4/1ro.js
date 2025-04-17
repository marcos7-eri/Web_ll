function contarParesImpares(array) {
    let resul = { pares: 0, impares: 0 };
    
    array.forEach(num => {
      num % 2 === 0 ? resul.pares++ : resul.impares++;
    });
    
    return resul;
  }
  
  console.log(contarParesImpares([1, 2, 3, 4, 5, 6, 7, 10, 12]));