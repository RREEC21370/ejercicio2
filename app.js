function busquedalineal(arr,elemento){
    for(let i=0;i<arr.lenght;i++){
        if(arr[i]===elemento){
            return i;
        }
    }
    return 
}
const arreglo=[10,8,7,6,5,9];
const elementobuscado=6;
const indice=busquedalineal(arreglo,elementobuscado);
console.log(`El elemento buscado ${elementobuscado} se encuentra en el indice ${indice}`);