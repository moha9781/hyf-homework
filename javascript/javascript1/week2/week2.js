//  A function that returns an empty object.
function empty(){
    return {
        time: 12
    };
}
let emptyOpject = empty();
console.log( emptyOpject );

//  An array with 3 empty objects
function colorArray(color1, color2, color3) {
    return [{
        color: color1
    }, {
        color: color2
    }, {
        color: color3
    }];
}

let colorObjects = colorArray('red', 'pink', 'green');

for (let i = 0; i < colorObjects.length; i++) {
    console.log(colorObjects[i]);
}

// Save a note
let notes = [];
function addNote(note, noteId){

}