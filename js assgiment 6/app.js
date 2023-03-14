

// Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + " how are you ");

// Q2
// var phoneModel = prompt("What is your favorite mobile phone model?");
// var inputLength = phoneModel.length;
// console.log("The length of your favorite mobile phone model is: " + inputLength);

// Q3
// var word = "Pakistani";
// var index = word.indexOf("t");
// console.log("The index of the letter 'n' in the word 'Pakistani' is: " + index);

// Q4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex);

// Q5
// var word = "Pakistani";
// var character = word.charAt(3);
// console.log("The character at the 3rd index in the word 'Pakistani' is: " + character);

// Q6
// // Prompt user for their first name
// var firstName = prompt("What is your first name?");

// // Prompt user for their last name
// var lastName = prompt("What is your last name?");

// // Concatenate the user's first and last name
// var fullName = firstName.concat(" ", lastName);

// // Greet the user using their full name
// alert("Hello " + fullName + " have a good day sir");

// Q7
// Define the word to search for the substring "Hyder"
// var word = "Hyderabad";

// // Replace the substring "Hyder" with "Islam"
// var newWord = word.replace("Hyder", "Islam");

// // Display the result in the browser
// document.write("The new word after replacing 'Hyder' with 'Islam' is: " + newWord);

// Q8
// Define the string to search for the substring "and"
// var str = "Land and sand and hand and band";

// // Replace all occurrences of "and" with "&"
// var newStr = str.replace(/and/g, "&");

// // Display the result in the browser
// document.write("The new string after replacing all occurrences of 'and' with '&' is: " + newStr);

// Q9
// Define the string "472"
// var str = "472";

// // Convert the string to a number
// var num = Number(str);

// // Display the values and types in the browser
// document.write("The value of the variable 'str' is " + str + " and its type is " + typeof(str) + "<br>");
// document.write("The value of the variable 'num' is " + num + " and its type is " + typeof(num));

// Q10
// // Ask the user for input and store it in a variable
// var userInput = prompt("Enter some text:");

// // Convert the input to capital letters
// var upperCaseInput = userInput.toUpperCase();

// // Display the result in the browser
// document.write("The input in capital letters is: " + upperCaseInput);

// Q11
// Ask the user for input and store it in a variable
// var userInput = prompt("Enter some text:");

// // Convert the input to title case
// var words = userInput.split(" ");
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
// }
// var titleCaseInput = words.join(" ");

// // Display the result in the browser
// document.write("The input in title case is: " + titleCaseInput);

// Q12
// Define a number variable
var num = 35.36;

// Convert the number to a string and remove the decimal point
// var str = num.toString().replace(".", "");

// // Display the result in the browser
// document.write("The number without decimal point is: " + str);

// Q13
// Prompt the user to enter a username
// var username = prompt("Enter your username:");

// // Define an array of special symbols
// var specialSymbols = ["@", ".", ",", "!"];

// // Loop through each character in the username
// for (var i = 0; i < username.length; i++) {
//   // Check if the current character is a special symbol
//   if (specialSymbols.indexOf(username[i]) !== -1) {
//     // Prompt the user to enter a valid username
//     username = prompt("Please enter a valid username. Username cannot contain the following special symbols: @ . , !");
//     // Reset the loop to start from the beginning
//     i = -1;
//   }
// }

// // Display the final username in the console
// console.log("Your username is: " + username);

// Q14
// Define the array of items
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user to enter a search query
// var query = prompt("Welcome to our bakery. What do you want to order?");

// // Initialize a variable to keep track of whether the item is found or not
// var isFound = false;

// // Loop through each item in the array
// for (var i = 0; i < items.length; i++) {
//   // Convert both the query and the current item to lowercase to perform a case-insensitive search
//   if (query.toLowerCase() === items[i].toLowerCase()) {
//     // Set the isFound variable to true if the item is found
//     isFound = true;
//     // Display a message to inform the user that the item is available
//     alert(query + " is available at index " + i + " in our bakery.");
//     // Exit the loop since the item has been found
//     break;
//   }
// }

// // If the item is not found, display a message to inform the user
// if (!isFound) {
//   alert("We are sorry. " + query + " is not available in our bakery.");
// }

// Q15
// var password = prompt("Enter a password that contains at least 6 characters and contains both alphabets and numbers and does not start with a number");

// while (true) {
//   if (password.length < 6) {
//     password = prompt("Password is too short. Enter a valid password:");
//   } else if (!/[a-zA-Z]/.test(password)) {
//     password = prompt("Password should contain at least one alphabet. Enter a valid password:");
//   } else if (!/\d/.test(password)) {
//     password = prompt("Password should contain at least one number. Enter a valid password:");
//   } else if (/^\d/.test(password)) {
//     password = prompt("Password should not start with a number. Enter a valid password:");
//   } else {
//     alert("Password accepted!");
//     break;
//   }
// }

// Q16
// var university = "University of Karachi";
// var arr = university.split(" ");

// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// Q17
// var inputString = prompt("Enter a string:");
// var lastChar = inputString.charAt(inputString.length - 1);
// alert("The last character of the string is " + lastChar);
// Q18
// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var words = str.split(" ");

// for (var i = 0; i < words.length; i++) {
//   if (words[i].toLowerCase() === "the") {
//     count++;
//   }
// }

// alert("The word 'the' appears " + count + " times in the string.");

// Q18
