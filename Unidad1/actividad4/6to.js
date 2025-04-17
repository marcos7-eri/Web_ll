function encontrarMasRepetido(array) {
    let contador = {};
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      if (contador[num]) {
        contador[num] += 1; 
      } else {
        contador[num] = 1; 
      }
    }
     
    let maxRepeticiones = 0;
    let numMasRep = null;
  
    for (let num in contador) {
      if (contador[num] > maxRepeticiones) {
        maxRepeticiones = contador[num];
        numMasRep = num;
      }
    }
  
    return numMasRep;
  }

  let numeros = [7, 2, 4, 2, 6, 8, 5, 9, 8, 1, 2];
  let numMasRep = encontrarMasRepetido(numeros);
  
  console.log("número mas repetido es:", numMasRep);