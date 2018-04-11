 # Cifrado Cesar

 ### Descripción
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

#### Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: *cipher* y *decipher*.
El usuario no debe poder ingresar un campo vacío o que contenga números

## Pseudocódigo
### Descripción

1. Pedir al usuario que ingrese una frase.

2. Validar que la frase solo contenga letras.

3. Preguntar si quiere cifrar o descifrar la frase.

4. Respetar las mayúsculas y minúsculas.

5. Regresar la frase cifrada.

![Diagrama de flujo de cifrado cesar](assets/image/diagrama-cifradocesar.png)
