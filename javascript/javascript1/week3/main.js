// Remove number 9 in the array
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removed = numbersArray.splice(8,1);
console.log(numbersArray);

// const randomNumber = parseInt(Math.random() * 11);
// console.log(randomNumber);

// Series duration of my life
const seriesDurations = [
    {
      title: 'Family Guy',
      days: 4,
      hours: 23,
      minutes: 0,  
    },
    {
      title: 'crazy ex girlfriend',
      days: 6,
      hours: 18,
      minutes: 0,
    },
    {
      title: 'Dark Tourist',
      days: 6,
      hours: 24,
      minutes: 0,
    }
  ]
  
// Family Guy

var wholePercent = Math.floor(119/700800*100);


function getWholePercent(percentFor, percentOf){
    return Math.floor(percentFor/percentOf*100);
    
}
console.log(wholePercent);

// crazy ex girlfriend

var wholePercent = Math.floor(162/700800*100);


function getWholePercent(percentFor, percentOf){
    return Math.floor(percentFor/percentOf*100);
    
}
console.log(wholePercent);

// Dark Tourist

var wholePercent = Math.floor(168/700800*100);


function getWholePercent(percentFor, percentOf){
    return Math.floor(percentFor/percentOf*100);
    
}
console.log(wholePercent);

// My favorite songs
// function addSongToDatabase(song) {
  
const songDatabase = [{
    songId: 1,
    title: 'Hello',
    artist: 'Adel',
  },
  {
    songId: 2,
    title: 'Daimond',
    artist: 'Rihanna',
  },
  {
    songId: 3,
    title: 'Qumman',
    artist: 'Farhiya Fiska',
  },
  {
    songId: 4,
    title: 'Nabad iyo Nolol',
    artist: 'Horseed',
  },
];
// console.log(songDatabase);
// }
// addSongToDatabase();
songDatabase.forEach(function(songDatabase) {
console.log(songDatabase.artist);

});

//Note taking app
let notes = [];

function addNote(note, noteId){
    notes.push({noteId: noteId, note: note});
}

addNote("JS operators", 1);
addNote("HTML", 2);
addNote("if statement", 3);
addNote("CSS", 4);
addNote("looping", 5);
console.log(notes);

//console.log(notes[2].note);
//console.log(notes.length);

// Get a note
function getNoteFromId(id){
for (let i=0; i<notes.length; i++){
    if (id===notes[i].noteId) {
        let temp1 = notes[i];
        let check = true;
        if (check){ 
            console.log(temp1);
            return temp1;
        }
    }
    }
    return console.log("There is no such ID in the notes");
}
getNoteFromId(5);

// Read all Notes
function showAllNotes(){
    for (let i=0; i<notes.length; i++){
        return console.log("The note with id: " + notes[i].noteId + ", has the following note text:" + notes[i].note);
}
showAllNotes();

//Smart phone usage app
let activities = [];
// function to input activities 
function addActivity (date, activity, durationInMinutes){
     activities.push({date: date, 
                      activity: activity, 
                      duration: durationInMinutes});
}

addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Videos', 60);
addActivity('23/7-18', 'phone calls', 15);
addActivity('23/7-18', 'games', 12);

console.log(activities);

//Show my status
const useLimit=100
function showStatus (activities){
    totalTime=0;
    if (activities.length==0){ 
        console.log();
    return console.log("There are no activities recorded, please add some activities before calling showStatus")
    }
    else {
        for (let i=0; i<activities.length; i++){
            totalTime= totalTime + activities[i].duration;
        }
        console.log();
         console.log("You have added " + activities.length + " activities. The amount to " + totalTime + " min. of usage.");
 
// Phone Usage Limit        
         if (totalTime>=useLimit){
             console.log(); 
             console.log("You have reached your limit, no more for you!");
         }
    }
}
showStatus (activities);
  








  


