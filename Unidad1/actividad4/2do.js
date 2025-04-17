let frase = "estamos en la universidad de sucre";
let palabras = frase.split(" ");
let palabraMasLarga = "";

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > palabraMasLarga.length) {
    palabraMasLarga = palabras[i];
  }
}


console.log("palabra mas larga es:", palabraMasLarga);