//First JavaScript code after 1000 years jkjk
console.log('Hello World!');
//------------------------------------------------

//Put meaningful name for the variables
//Cannot be a reserved words like let, if, else, etc
//Cannot start with a number (1name)
//Use cammelNotation
let firstName = 'Syahmi'; //Dont forget the semi colon on each js code!!!
let lastName = 'Sade';

console.log(firstName, lastName); 
//--------------------------------------------------------------------------

const interestRate = 0.3;
//Remember to not change the value of constant variables!!!
//interestRate = 0.1 
console.log(interestRate)
//----------------------------------------------------------

let name =  'Syahmi'; // String literal
let age = 22; // Number literal
let isApproved = true; //Boolean literal
let fakeName = undefined;
let colorFav = null;
//----------------------------------------

//typeof is a reserved key word
/* There are actually 2 categories of types which are
    Primitives/Value types and Reference types **/ 
let person  = {
    // properties of objects
    nama: 'Syahmi Sade',
    umur: 22
};

// Dot Notation (This method is better!)
person.nama = 'Najmi Sade';

// Bracket Notation (2nd method)
//person['nama'] = 'Munirah Naja';
let kakak = 'nama';
person[kakak] = 'Munirah Naja';

console.log(person.nama);
console.log(person);
//----------------------------------------------

//Arrays
let selectedColors = ['red', 'blue']; //Array Literal

//Possible to add value in an array
selectedColors[2] = 'green';

/*Array in python is quiet dynamic so it is possible 
for an array to contained value of string combined with numbers**/
selectedColors[3] = 17;

// Specify the value in the array
//console.log(selectedColors[0]); //outcome red
//console.log(selectedColors[1]); //outcome blue
console.log(selectedColors.length);
//------------------------------------------------

//function for performing a task
function greet(ismu, namaBapak /*only applicable inside the function called Parameter**/){
    //body of the function
    console.log('Hello ' + ismu + ' ' + namaBapak +'!');
}

greet('Khairul Aliff', 'Rosman' /*the actual value called Argument**/); // a sentence to run the function
greet('Luqman Al Hakim', 'Mahathar');
//----------------------------------------------------------------------------------------------------------

//Function that only calculationg a value, not diplay the value into the console
function squre(number){
    return number*number;
}

let number = squre(2); // we can use the variables name numbers because it will not interups the value of the parameter
console.log(number);
