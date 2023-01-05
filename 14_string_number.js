let s = "welcome";
//let s=new String();


//chatAt();  -- stand for indicate latter 0 1 2 3 4 5 6 .....
console.log(s.charAt(2));//l

//concat() Use for--> join two word or letter
console.log(s.concat(" to javascript programing"));//welcome to javascript programing
console.log(s.concat(" to javascript ").concat("programing"));//welcome to javascript programing

//Replace()---> to change something
s = "welcome to javascript";
console.log(s.replace("javascript", "java"));//welcome to java

//substring ---> to show some portion of letter / word
s = "welcome";
console.log(s.substring(0, 3));//wel
console.log(s.substring(3, 7));//come

//toLowerCase() & toUpperCase
s = "Welcome";
console.log(s.toLowerCase());//welcome --Converts all the alphabetic characters in a string to lowercase.
console.log(s.toUpperCase());//WELCOME  > Converts all the alphabetic characters in a string to uppercase.

//split()
//Split a string into substrings using the specified separator and return them as an array
s = "welcome to javascript";
let arr = s.split(' ');
console.log(arr[0]);//welcome
console.log(arr[1]);//to
console.log(arr[2]);//javascript

//trim()
s = "     welcome      ";
console.log(s);//    welcome
console.log(s.trim(0));//welcome

//number
let x = 100;//integer number
let y = 23.45;//decimal number
let z = 10e2;//exponencil number
console.log(x, y, z);//100 23.45 1000

//isInteger-->Returns true if the value passed is an integer, false otherwise
x = 10;
y = 1.8;
z = "x";
console.log(Number.isInteger(x));//true
console.log(Number.isInteger(y));//false
console.log(Number.isInteger(z));//false

//console.log(number.isInteger(x));

//perseInt() - converts a string into number

s = "12345";
console.log(typeof (s));//string
console.log(typeof (Number.parseInt(s)));//number

//parseFloat  ----->string converted in Number
s = "123.45";
console.log(typeof (s));//string
console.log(typeof (Number.parseFloat(s)));//number

//toString --->Number converted in string
let n = 1234;
console.log(typeof (n));//number
console.log(typeof (Number.toString()));//string




