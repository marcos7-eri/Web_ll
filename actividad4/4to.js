function esPrimo(num) {
    if (num <= 1) 
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) {
        return false; 
      }
    }
    return true;
  }
  function obtenerPrimos(array) {
    return array.filter(num => esPrimo(num)); 
  }
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 20, 23, 21, 29];
  let primos = obtenerPrimos(numeros);
  
  console.log("Números primos:", primos);