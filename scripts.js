
/* N 1 */
function alwaysHungry(arr) {
    var comida = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("delicioso");
            comida = true;
        }
    }
    if (comida != true) {
        console.log("Tengo hambre")
    }
}


/*  alwaysHungry([3.14, "comida", "pastel", true, "comida"]);  */
// esto debería mostrar "delicioso, "delicioso"
/* alwaysHungry([4, 1, 5, 7, 2]); */
// esto debería mostrar "Tengo hambre"


/* N 2 */

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            filteredArr.push(arr[i]);
        }

    }
    return filteredArr;
}
/* var result = highPass([6, 8, 3, 10, -2, 5, 9], 5); */
/* console.log(result); */ // esperamos de vuelta [6, 8, 10, 9]



/* N 3 */

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i]>(sum / arr.length)) {
            count += 1;
        }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
/* console.log(result);  */// esperamos 4 de vuelta


/* N 4 */

function reverse(arr) {
    var arreglo = [];
    for (let i = 0; i < arr.length; i++) {
        arreglo.push(arr[arr.length-i -1])
    }
    arr = arreglo;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
/* console.log(result); */ // esperamos de vuelta ["e", "d", "c", "b", "a"]


/* N 5 */

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1]+fibArr[i-2])
        
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
/* console.log(result); */ // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
