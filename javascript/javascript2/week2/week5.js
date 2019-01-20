// Step 1
function sayThree(){
    console.log('3');


}
function sayFive(){
    console.log('5');

}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
let array = [];
    for (let i = startIndex; i<stopIndex+1; i++) {
    array.push(i);
    console.log(array);
    }
    for (let i = 0; i <array.length; i++){
        if (array[i] % 3 === 0){
        threeCallback();
        
        }
        if (array[i] % 5 === 0){
            fiveCallback();
        
    
        }
    }
}
threeFive(10, 15, sayThree, sayFive);



// Step 2
const button = document.getElementsByTagName('button');
function week4 (){
    console.log('ok');
}





// // set interval
// function week4 (){
// intervalID = setInterval(() => {
//     console.log(counter);
// }, 10)
// }



// set count down
// function week4(){
//     console.log(counter);
//     counter++
//     if (counter === 10) {
//       console.log("HAPPY NEW YEAR!!");
//       clearInterval(newYearCountdown);
//     }
//   }

// let counter = 1;
// let newYearCountdown = setInterval(week4, 2000)
