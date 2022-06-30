/* let imprimeArray=['uno',2,null,0]
function printArray(imprimeArray)
imprimeArray.forEach(function(element){
    console.log(element)
}
    )

printArray(imprimeArray) */

/* 
let contar=(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano",  "peruano", "venezolano"])
 */
/* console.log(contar) */
/* 
function counter (contar) {
let contM = 0;
let contA = 0;
let contV = 0;
let contP = 0;

/* console.log(contM)
console.log(contA)
console.log(contV)
console.log(contP) */
/* 
for (i=0; i < contar.length; i++){
    switch(contar[i]){
    case ("mexicano"):
    contM = contM + 1;
    break
    case ("argentino"):
    contA = contA + 1;
    break
    case ("venezolano"):
    contV = contV + 1;
    break
    case ("peruano"):
    contP = contP + 1;
    break
    }
}
console.log("Cantidad mexicanos: ", contM,  "Cantidad argentinos: ", contA, "Cantidad venezolano: ", contV, "Cantidad peruanos: ", contP)

}
counter(contar) */ 



let array = ["mexicano", "argentino", "argentino", "venezolano", "chileno","peruano", "mexicano",  "peruano", "venezolano"]

console.log(array)

function counter (array){
let contar= array.sort();

let unicosElementos = [];
let almacenadorDeVecesRepetidas = [];
let contador = 1;

for(let i=0; i < contar.length; i++){
    if(contar[i+1] === contar[i]){
            contador++;
        
    }
    else{
        unicosElementos.push(contar[i]);
        almacenadorDeVecesRepetidas.push(contador);
        contador =1;
    }
  
}

for(let j=0; j < unicosElementos.length; j++){
console.log ("Cantidad de " + unicosElementos[j] + " se repite " + almacenadorDeVecesRepetidas[j])

}
}

counter(array)