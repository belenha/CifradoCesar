// Pedir al usuario que ingrese una frase.
var message = prompt ('Ingresa una frase sin espacios.\nPuedes usar mayúsculas y minúsculas');
// Se le da la opción si la quiere cifrar o descifrar.
var option = prompt ('¿Quieres 1.Cifrar o 2.Descifrar? Elige un número');

if (option == 1){
  cipher (message, 33); // Si eligió opción 1 se llama a la función cipher.
}else{
  decipher (message, 33); // Si eligió la opción 2 se llama a la función decipher.
}

function cipher (phrase, n){
  var str = ''; // Se crea una variable que es un string vacio donde se acomodarán las letras.
  for (var i = 0; i < phrase.length; i++){ // Se itera en la frase.
    var asciiNumber = phrase.charCodeAt(i); // Se crea una nueva variable que nos dará el código de la letra que (i) encuentre.
    var asciiUpper = (asciiNumber - 65 + n) % 26 + 65; // Variable que contiene la fórmula para codificar las letras mayúsculas.
    var asciiLower = (asciiNumber - 97 + n) % 26 + 97; // Variable que contiene la fórmula para codificar las letras minúsculas.
    if(asciiNumber >= 65 && asciiNumber <= 90){  // Si el código ASCII de la letra se encuentra en este rango de las mayúsculas...
      str += String.fromCharCode(asciiUpper);  // ... se ingresa al string vacio aplicando la fórmula y queda en mayúscula.
    } else if(asciiNumber >= 97 && asciiNumber <= 122){ // Y si se encuentra en el rango de las minúsculas...
      str += String.fromCharCode(asciiLower); // ... se aplica la fórmula y queda en minúscula.
    }else {
      alert('La frase sólo debe tener letras, no espacios ni números');
    }
  }
  document.write ('La frase cifrada es ' + str); // Se imprime en pantalla el resultado de la frase cifrada.
}

function decipher (phrase,n){
   var str = ''; // Se crea una variable que es un string vacio donde se acomodarán las letras.
   for(var j = 0; j < phrase.length; j++){  // Se itera en la frase.
     var asciiNumber = phrase.charCodeAt(j);  // Se crea una nueva variable que nos dará el código de la letra que (j) encuentre.
     var asciiUpper = (((asciiNumber + 65 - n) % 26) + 65);  // Variable que contiene la fórmula para decodificar las letras mayúsculas.
     var asciiLower = (((asciiNumber + 85 - n) % 26) + 97);  // Variable que contiene la fórmula para decodificar las letras minúsculas.
     if (asciiNumber >= 65 && asciiNumber <= 90){  // Si el código ASCII de la letra se encuentra en este rango de las mayúsculas...
       str += String.fromCharCode(asciiUpper);  // ... se ingresa al string vacio aplicando la fórmula y queda en mayúscula.
     }else if (asciiNumber >= 97 && asciiNumber <= 122){  // Y si se encuentra en el rango de las minúsculas...
       str += String.fromCharCode(asciiLower);  // ... se aplica la fórmula y queda en minúscula.
     }else{
       alert('La frase sólo debe tener letras, no espacios ni números')
     }
   }
   document.write('La frase descifrada es '+ str); // Se imprime en pantalla el resultado de la frase descifrada.
}
