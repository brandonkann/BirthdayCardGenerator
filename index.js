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

// Global Variables: 
var message; 
var month;
var firstName;
var lastName;
var day; 



function getBirthday() {
    document.getElementById("prepare").style.display = "none";
    document.getElementById("card").style.display = "block";
    
    console.log("Get Birthday!!!.....");
    message = document.getElementById("message").value;
    month = document.getElementById("month").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    day = document.getElementById("day").value;
    console.log(message)
    
    document.getElementById("birthdaymessage").innerHTML = message
    document.getElementById("cardName").innerHTML = "Happy Birthday" + " " + firstName + " " + lastName
    // July, April, December, May 
    console.log(month); 
    if (month == "July" && day == "11") {
        document.getElementById("birthday").innerHTML = month + "!, you are a really special child"
    }
    else if (month == "January" || month == "Febuary") {
        document.getElementById("birthday").innerHTML = month + "!, you are a winter baby"
    }
    else if (month == "April" || month == "May") {
        document.getElementById("birthday").innerHTML = month + "!, you are a spring child"
    }
    else if (month == "September" || month == "October") {
        document.getElementById("birthday").innerHTML = month + "!, you are a fall child"
    }
   else if (month == "July" || month == "December") {
        document.getElementById("birthday").innerHTML =  month + " is a lucky month!"
   }

    else {
        document.getElementById("birthday").innerHTML = "Your Birthday is on " + month + " " + day;  
    }







    
}

function goback() {
    console.log(day)
    console.log(month)
    document.getElementById("prepare").style.display = "block";
    document.getElementById("card").style.display = "none";

    document.getElementById("message").value = message;
    document.getElementById("month").value = month;
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("day").value = day;


}
