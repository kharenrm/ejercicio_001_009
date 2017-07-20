/*Esta funciòn recibe un string y debe devolverlo con todas las letras a mayusculas */
function ponerTodasLasLetrasMayusculas(texto){
	return texto.toUpperCase();
}
console.log(ponerTodasLasLetrasMayusculas("aaaaaaaaaa"))

function stringInverso(texto){
	return texto.split('').reverse().join('');
}
console.log(stringInverso("Hola Mundo!"));

function eliminarEspacios(texto){
	return texto.replace(/\s/g,'')

}
console.log(eliminarEspacios("hhhhh kkklsll klll"));

function esPalindromo(texto){
	var palabra = ponerTodasLasLetrasMayusculas(texto);
	var palabra2 = stringInverso(palabra);
	console.log(palabra2)
	
}
console.log(esPalindromo("anita lava la tina"));