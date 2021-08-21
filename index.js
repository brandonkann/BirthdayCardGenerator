// Javascript is the most popular programming language 
// Variables: Store information, they store data types:
// 3 main data types:
// 1. String Ex: Storing names.
//  "  "
var studentName = "James";  
// 2. Integer Ex: Age, Numbers
//  5  
var studentAge = 9;
// 3. Boolean Ex: False/True True/False.
// False 

// Example 1: Store the number students in class:
// Data type: Integer
var numberOfStudent = 10; 

// Example 2: Storing a students name? 
// Data type: String 

// Example 3: Storing whether a bus has a arrive or not arrive yet?
// Data type: Boolean. 
var busArrive = false; 
// If bus arrives then true, else if bus not arrived yet then false.

// Syntax: The rules the of the lanugage 

// How to declare a variable:
// var _NameOfVariable_ = datatype 

//Exercise 1: Create a string variable and a integer variable:
// var _NameOfVariable_ = datatype
var nameOfSister = "Abbey"; 
var nameOfGame   = "Roblox"
var NumberOfGrandma = 2;

// JS can change HTML content 
// One of them many Many Javascript functions is "getElementById"
//The example below "finds" an HTML element (with id="month"), and changes the element content (innerHTML) to "April"
// document.getElementById("month").innerHTML = nameOfGame;

// A function is a block of code designed to perform a particular task 
// When a function is execute its running. "Calling a function" means telling a function a execute 
// Syntax:
// function _NameOfTheFunction_() { block of code is inside here }


function getBirthday() {
    console.log("Get Birthday!!!.....");
    var month = document.getElementById("month").value;
    console.log(month); 

    var day = document.getElementById("day").value;
    console.log(day);

    document.getElementById("birthday").innerHTML = "Confirm the Birthday is on " + month + " " + day;  
}
