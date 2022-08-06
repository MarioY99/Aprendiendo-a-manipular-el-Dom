const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSuma = document.querySelector('#btnSuma');
const btnResta = document.querySelector('#btnResta');
const btnMultiplicacion = document.querySelector('#btnMultiplicacion');
const btnDivision = document.querySelector('#btnDivision');
const pResult = document.querySelector('#resultado')



h1.innerHTML = 'Holiviris';

btnSuma.addEventListener('click', suma);
btnResta.addEventListener('click', resta);
btnMultiplicacion.addEventListener('click', multiplicacion);
btnDivision.addEventListener('click', division);

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

const form = document.querySelector('#form');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btnForm = document.querySelector('#btnForm');
const pForm = document.querySelector('.resultForm');

form.addEventListener('submit', sumaForm);

function sumaForm (event) {
    event.preventDefault();
    const sumaInputsForm = parseInt(input3.value) + parseInt(input4.value);
    pForm.innerText = 'El resultado al sumar es: ' + sumaInputsForm;
}

//                                                  NOTAS                               //
//El addEventListener es una propiedad de javascript que nos permite escuchar cuando un usuario que esté interactuando con nuestra página web realice una acción en ella, también nos permite el no escribir directamente javascript en nuestro HTML para que se mantenga de una forma más limpia, y que todo nuestro javascript, esté simplemente dentro de nuestro archivo javascript.

//Un ejemplo de addEventListener es el siguiente btnSuma.addEventListener('evento_a_escuchar', 'acción_a_realizar'); y se puede leer como que,
//1) En mi variable btnSuma
//2) agrega un escuchador de evento.
//3) Con el evento que te mande.
//4) y cuando ese evento ocurra, ejecuta esta función.

//Hay que tener especial cuidado con la función que le mandamos en la acción a realizar, para esta propiedad, no es necesario mandarsela con los parentesis finales de la función, es decir "multiplicacion()" simplemente el nombre de la función y ya, sin ponerle los paréntesis, ya que la misma propiedad de addEventListener nos lee la acción a realizar como si fuera una función y le agrega los paréntesis ella sola.


//Cuando trabajamos con formularios, ocurre algo interesante, los formularios por defecto toman el último botón que tenga en su cuerpo y lo selecciona como un botón de tipo submit, y qué hace esto, le dice al formulario que envíe esa información a otra url diferente para acceder a un lugar distinto, es decir, hacemos una solicitud a otra url enviando los valores de nuestros inputs por la url, y esto hace que se recargue la página y que no se quede en la página en la que está. Si queremos que esto no ocurra, que no cambiemos de página, podemos hacer uso de ciertos métodos en JavaScript

//El primer método, y es el más "divertido" ya que usamos JavaScript es el preventDefault. Consiste en que cuando uno realiza el addEventListener en un formulario, el evento que vamos a escuchar es el submit, y la función que es la acción a realizar recibe como argumento el evento que realiza poniendolo en sus parentesis como (event). Sabiendo esto, podemos hacer uso de ese argumento, como si fuera un parámetro para la función que le mandamos al addEventListener y con ese mismo evento, agregarlo como un método más a nuestra función en JavaScript a realizar. se agrega como event.preventDefault(); son importantes los paréntesis ya que es una función de javascript que nos permite el navegador. Y de esa forma, esta función, como su nombre lo indica, nos ayuda a prevenir la acción por defecto que realiza nuestro formulario de mandarle la solicitud a otra url, cambiando la url actual y hace que se quede en esa misma página realizando la función que le mandamos con JavaScript.

//Y ya no escucharía el evento de click del botón, sino el evento de submit del formulario

//El segundo método es mucho más sencillo, es solamente en el boton en el html, le agregamos type ="button" y ya no va a ser de tipo submit, sino que será de tipo button, y podrá funcionar como lo trabajamos anteriormente, agregandole evento de click y todo lo demás con el selector de su variable.