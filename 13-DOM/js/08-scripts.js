//Los 'nodos' = 'href' / enlaces.
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco, son considerados 'elementos'. Consecuentemente, si miras la consola se ven 'a' entre los nodos.
console.log(navegacion.children); //Te muestra elementos reales.

console.log(navegacion.children[1].nodeName); //Te muestra el nombre de manera real de la clase o etiqueta selecionada en la variable.
console.log(navegacion.children[1].nodeType); //Te muestra el tipo de manera real de la clase o etiqueta selecionada en la variable.

const card = document.querySelector('.card');
console.log(card.children);