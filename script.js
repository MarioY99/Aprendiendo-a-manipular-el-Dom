//La manera profesional de trabajar, por así decirlo, es crear variables que representen a los selectores de cada uno de los elementos de nuestro html

const h1 = document.querySelector('h1'); //Este querySelector es una función a la cual tenemos que mandarle mediante un string la etiqueta o el selector o la clase con la que queremos trabajar, es decir, mi h1, mi p de parrafo, o la clase que le haya puesto al crear html.
const p = document.querySelectorAll('p'); //Con esto nos selecciona todas las etiquetas de párrafo y nos lo pone como una lista, en un array
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//Tenemos varias funciones para seleccionar, así como querySelector tenemos getElementById, getElementsByClassName y eso nos pueden ayudar para seleccionar elementos que tengan id, y el ClassName nos ayuda como css a seleccionar todos los elementos que tengan una clase, la ventaja del querySelector es que se asemeja a CSS porque nos permite acceder a todos mediante la misma sintaxis de CSS solamente que hay que pasarlo como Strings.

//Cuando usamos los getElementById no es necesario poner el #, solamente el nombre del id, al igual que con getElementByClassName, solamente necesita el nombre de la clase, no es como el querySelector que sí necesita la estructura completa del valor del atributo para que pueda entenderlo.

//Con la ayuda de javascript podemos escuchar lo que nuestros usuarios hacen en nuestra página mediante la consola, si hacemos un console.log(h1.(el atributo que sea que veamos en el navegador)) vamos a poder ver y trabajar con eso cuando un usuario realice alguna acción con nuestro h1. Un ejemplo más entretenido es con el input

console.log(input.value); //Y veriamos lo que nuestros usuarios hayan escrito en el html. si alguien escribe algo, con ayuda de este console.log podemos ver que fue lo que escribieron, Ahora si queremos ver qué es lo que van escribiendo en la página, tenemos que escucharlo mediante eventos, eso ya lo veremos en proximas clases.

console.log({h1,
    p,
    parrafo,
    pid,
    input
})
//Y la salida de esta consola nos va a mostrar todas las etiquetas y también nos va a mostrar todos los atributos que le podamos poner o que podamos manipular mediante javascript en el navegador. Ya sea align, aria(algo), className, etc.

//Resumen, tenemos funciones o métodos que nos facilita nuestro entorno de ejecución de JavaScript (nuestro navegador) para seleccionar los elementos de nuestro html y poder acceder a ellos mediante JavaScript

//Siguiente clase. Escribiendo html desde javascript.

//Con uso de nuestro javascript, mediante las variables que hicimos arriba, podemos cambiar el contenido de nuestro html, es decir, escribir html directamente usando javascript.

h1.innerHTML = 'Me gusta <br> el pan';
//Pero esto puede ser peligroso, si un usuario quiere correr html malicioso en nuestra página. Tenemos también
h1.innerText = 'Me gusta <br> el pan';
//Y de esta forma solamente podrían cambiar el texto, y no el código.

//También podemos acceder a atributos y darle atributos al código html, por ejemplo, tenemos estas 2 funciones.

//console.log(h1.getAttribute('pantalla')); //De esta manera, al guardar, nos va a mostrar en consola, el VALOR del ATRIBUTO pantalla que está en la etiqueta h1 de nuestro html

//Esta es la Manera en la que podemos acceder al nombre de clases, o qué valor le hayan puesto a una clase de un elemento html, supongamos que tengamos en un proyecto grande, 1500 parrafos, y esos párrafos tengan una clase específica, y quiero saber cuál es, puedo hacer uso de esto mismo y en mi consola me va a decir cual es el valor de la clase de mis párrafos para poder hacer uso de ella.

console.log(h1.getAttribute('class'));

//También podemos modificar los atributos de nuestros elementos html, mediante el setAttribute, de la siguiente manera

h1.setAttribute('class', 'rojo');
//Y de esta manera, aunque en nuestro html diga que la clase es titulo, como estamos corriendo nuestro código javaScript con la función de setAttribute su clase va a cambiar de titulo y el nuevo valor de su clase va a ser simplemente rojo, gracias a javaScript.

//Aunque cuando trabajamos con clases tenemos 2 funciones especificas que nos ayudan a trabajar con clases de elementos las cuales son.
//1.- h1.classList.add('nombre_de_clase_a_agregar')
//2.- h1.classList.remove('nombre_de_la_clase_a_eliminar')

//Podemos hacer que la etiqueta h1 tenga una clase nueva simplemente poniendole h1.classList.add('cabecera'); Y ahora tendrá una clase llamada cabecera.
// h1.classList.add('cabecera');
// h1.classList.remove('titulo');

//Podemos también trabajar con inputs accediendo directamente a su value, pero en lugar de hacerlo desde html agregando un value, podemos hacerlo desde javascript con la misma variable que le creamos al input con html

input.value = 'Hola';

//No es necesario acceder con .getAttribute ni .setAttribute, directamente accedemos a su value y lo cambiamos por defecto. Y así como el value podemos cambiarle el placeholder y lo que queramos

input.placeholder = 'Saluda :D';

//Pero ahora, cómo podríamos crear un elemento desde 0? Para eso tenemos una función especial que es document.createElement
//Primero creamos nuestra variable con ese elemento que queremos crear

const img = document.createElement('img');

//Esta img va a funcionar como cualquier otro selector de html, es decir, podemos aplicarle classList/ setAttribute/ getAttribute. Todas las propiedades que podamos utilizar con un selector html lo podemos usar denuevo con esta imagen.

//De esta manera podemos darle su fuente src y su valor a esa fuente, es decir, pondemos aplicarle la imagen al elemento creado.

img.setAttribute('src','https://i.pinimg.com/originals/e9/9a/98/e99a983893b1256c6fe9cc540682fbcf.jpg');

//Pero hasta ahora no aparece en nuestro html, para que esto aparezca, tenemos que hacer que un elemento ya existente en nuestro html cambie con este elemento para poder agregar la imagen y que aparezca en nuestro navegador, en pocas palabras, tenemos que sustituir un elemento por nuestro elemento creado.
console.log(img);

//Al momento de hacer esto, nos va a agregar nuestra imagen, al navegador, pero la va a escribir debajo del elemento de párrafo, para que esto no ocurra tiene que haber un elemento vacío, es decir, tenemos que hacer que nuestro elemento esté vacío para que nuestro elemento creado por javascript tome su lugar, por eso le agregamos primero que su html interno esté vacío con el pid.innerHTML = "";
pid.innerHTML = "";
pid.append(img)

//Append y appendChild agregan el elemento después del contenido que tenga nuestro html.

//Otra manera de hacerlo es
//const img = document.createElement('img');
//img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
//console.log(img);

//pid.replaceWith(img);