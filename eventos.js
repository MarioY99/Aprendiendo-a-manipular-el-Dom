const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado')

h1.innerHTML = 'Holiviris';

//Existen varias formas de escuchar eventos desde javascript, para un botón tenemos el atributo onclick="" que nos permite que dentro de las comillas, coloquemos el código javascript que queramos ejecutar, ya sea una función, una variable, o lo que sea, podemos llamarlo por su nombre, en este caso, creo una función para mi botón y el nombre de esa función va a ser el valor del atributo onclick que está en el html

//En este ejercicio estamos tomando el value del input, recordemos que en clase pasada vimos que lo que se agrega a un input es el valor, por lo que para acceder a él se hace uso de input.value (donde input es la variable que creamos para acceder a ese input mediante javascript y el value es lo que le hayan escrito los usuarios).

//Creamos una página para realizar operaciones matemáticas básicas, suma, resta, multiplicación y división.

//Primero creamos nuestra función. El nombre de la función será el valor de mi atributo onclick de html en mi boton

//Segundo: Creamos una variable constante donde va a estar nuestra operación, en este caso, teniamos que pasar los strings que recibía nuestro input a número (ya que los inputs siempre reconocen lo que les llega como un string). Para eso hacemos uso de la función parseInt(variable.value) donde "variable" es la variable que creamos de nuestro input para acceder a él, y .value es el valor que le mandan nuestros usuarios.

//tercero, mandamos a donde queremos llevar ese resultado, en este caso, creamos un párrafo vacío, y con lo aprendido de la clase anterior, cambiamos su texto interno, por la concatenación de un string y el resultado de mi variable generada dentro de mi función de javascript, de esta forma, cada vez que queramos hacer una operación matemática, podremos hacerla sin problema alguno.

function suma () {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'El resultado es: ' + sumaInputs;
};
function resta () {
    const restaInputs = parseInt(input1.value) - parseInt(input2.value);
    pResult.innerText = 'El resultado es: ' + restaInputs;
};
function multiplicacion () {
    const multiplicaInputs = parseInt(input1.value) * parseInt(input2.value);
    pResult.innerText = 'El resultado es: ' + multiplicaInputs;
};
function division () {
    const divideInputs = parseInt(input1.value) / parseInt(input2.value);
    pResult.innerText = 'El resultado es: ' + divideInputs;
};
//Podemos tener la cantidad de líneas de código que queramos dentro de nuestra función, en nuestro archivo de javascript y solamente mandarle el nombre al atributo que escucha el evento en html. en este caso para un boton es onclick="".

//Para los inputs podemos hacer lo mismo, pero el atributo ya no se llama onclick, se llama onchange="" que funciona igual que onclick pero para inputs

function inputchn() {
};