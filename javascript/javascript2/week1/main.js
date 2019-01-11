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
   java_script: 'js_and_jquery.jpg',

   hack_future: 'js_and_jquery.jpg',

   freedom: 'js_and_jquery.jpg',

 dreemers: '',
 funny: '',

 world: '',

 the_tide: '',
 darkness: '',
history: '',

 love: '', 
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

//Generate

function generate() { 
   let input = document.getElementById('name');
   console.log(input.value);

}
generate();
