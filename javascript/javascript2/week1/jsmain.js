// Find the shortest word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let founddanishWords = danishWords.find(function(element) {
   return element === 'ø';
 });
 console.log(founddanishWords);

//  Difference between median and average
var housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
let sum = housePrices.reduce((previous, current) => current += previous);
let avg = sum / housePrices.length;
console.log(avg);
housePrices.sort((a, b) => a - b);
let lowMiddle = Math.floor((housePrices.length - 1) / 2);
let highMiddle = Math.ceil((housePrices.length - 1) / 2);
let median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
console.log(median);



// Book site

let bookNames = ['java_script','hack_future', 'freedom', 'dreemers', 'funny', 'world', 'the_tide', 'darkness', 'history', 'love'];
let bookNamesOject ={
   java_script: {
    bookID: 'java_script',
    language: 'english',
    author: 'benjamin',
    title:'Hack',

},

 hack_future: {
    bookID: 'hack_future',
    language: 'Dansih',
    author: 'christofer',
    title:'Hack', 
 },
 freedom: {
    bookID: 'freedom',
    language: 'somali',
    author: 'mohamed',
    title: 'freedom_all',
 },

 dreemers:{
    bookID: 'dreemers',
    language: 'italien',
    author: 'mario',
    title:'dreemers_guid', 
 },
 funny: {
    bookID: 'funny',
    language: 'arabic',
    author: 'kalid',
    title:'funny_people',   
 },

 world: {
    bookID: 'world',
    language: 'english',
    author: 'marry',
    title:'world', 
 },

 the_tide: {
    bookID: 'the_tide',
    language: 'Dansih',
    author: 'petter',
    title:'the_tide_of_live', 

 },
 darkness: {
    bookID: 'darkness',
    language: 'france',
    author: 'ole',
    title:'darkness', 

 },
history: {
    bookID: 'history',
    language: 'arabic',
    author: 'nor',
    title:'world_history', 

 },

 love: {
    bookID: 'love',
    language: 'Dansih',
    author: 'idja',
    title:'love', 
 
 }};
 let bookImageObject ={
   java_script: 'javascript.jpg',
   hack_future: 'hack.png',
   freedom: 'mandela.jpg',
   dreemers: 'dreem.jpg',
   funny: 'stuwe.jpg',
   world: 'world.jpg',
   the_tide: 'love.jpg',
   darkness: 'dreem.jpg',
   history: 'mandela.jpg',
   love: 'love.jpg', 
};
console.log(bookNames);
function bookId(){
    let ul = document.createElement('ul');
    console.log(ul);

    for (let i=0; i < bookNames.length; i++) {
        let li = document.createElement('li')
        let title = document.createElement('header');
        let language = document.createElement('details');
        let author = document.createElement('p');
        let image = document.createElement('img');
        image.src= bookImageObject[bookNames[i]];
        title.innerHTML = bookNamesOject[bookNames[i]].bookID;
        language.innerHTML = bookNamesOject[bookNames[i]].language;
        author.innerHTML = bookNamesOject[bookNames[i]].author;
        li.appendChild(title);
        image.width = 80;
        li.appendChild(author);
        li.appendChild(language);
        li.appendChild(image);
        ul.appendChild(li);
        console.log(bookNames [i])
        document.body.appendChild(ul);
        

    };

      
// for loop 10 times
  // for (let = i)
}
bookId();

// Spirit animal name generator   
let button = document.getElementById("onclick");
button.addEventListener("click", function(){
let textFeild = document.getElementById("nameInput").value;
//alert (animal);
   
//A Random Items
let randomItem = Math.floor(Math.random() * 10);
//console.log(randomItem);
   
let spiritAnimalArea = document.getElementById("spiritAnimal");
spiritAnimalArea.innerHTML = textFeild + " - " + spritiAnimalArray[randomItem];
       
});
    
//spirit animal array
let spritiAnimalArray = [
    "full of lightness as Hummingbird",
    "Truth like Hawk",
    "Eagles light",
    "Spider of feminine",
    "The Butterfly",
    "Falcon",
    "White Wolf",
    "Elephant",
    "Komodo Dragon",
    "Bernese Mountain Dog"
   ]; 