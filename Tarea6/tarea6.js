
//Tarea 6.1 - Array de longitud 50 con números enteros aleatorios entre 1 y 10
const randomArray = Array.from({length:50}, () => Math.floor(Math.random() * 10));
console.log(randomArray);


// Tarea 6.2 - Lista de compras

var goodsList = [];

for (let i = Number(prompt('Por favor indique el número de elementos a comprar')); i > 0; i--){
   var element = String(prompt(`Por favor ingrese el elemento # ${i}`));
    if (!goodsList.includes(element)){
        goodsList.push(element);
    } else {
        alert('Error: este elemento ya está en la lista de compras');
        element = String(prompt(`Por favor ingrese de nuevo elemento # ${i}`));
        goodsList.push(element);
    }
}
document.write('Los elementos a comprar son:');
document.write('<br>');
document.write(goodsList);
document.write('<br>');


// Tarea 6.3 - Números menores a 4

const myArray = [];
randomArray.forEach(element => {
    if (element < 4){
        myArray.push(element);
    }
});

console.log(myArray);

// Tarea 6.4 - Array inverso
// Tarea 6.4 - Array inverso - Opción 1 -- reverse
const myArray2 = ["hola", "mundo", "como", "estas", "hoy"];
console.log(myArray2);
const reverseMyArray = myArray2.reverse();
console.log(reverseMyArray);

// Tarea 6.4 - Array inverso - Opción 2 -- for
const myArray3 = ["hola", "mundo", "como", "estas", "hoy"];
const reverseMyArray2 = [];

for (var i = myArray3.length; i > 0; i--){
    const element2 = myArray3[i-1];
    reverseMyArray2.push(element2);
    console.log(element2);
}
console.log(reverseMyArray2);
document.write(reverseMyArray2);