let course = ["Webdevelopement", "Mernstack", "DigitalMarkerting"];
console.log(course); 

//Accessing Array Elements
let sname = ["Ram", "John", "Sam"];
console.log(sname[0]);  
console.log(sname[1]);  
console.log(sname[2]);  
console.log(sname.length); //Array Length


//Modifying Array Elements
let days = ["Sunday", "Wednesday", "Tuesday"];
days[1] = "Monday";  // Change the second element
console.log(days);  // 

//ARRAY METHODS
let fruits = ["Apple", "Banana", "Cherry"];

//PUSH
fruits.push("Orange");  // Adds "Orange" to the end
console.log(fruits);  

//POP
fruits.pop();  // Removes the last element ("Orange")
console.log(fruits); 

//SHIFT
fruits.shift();  // Removes the first element ("Apple")
console.log(fruits);  

//UNSHIFT
fruits.unshift("Grapes");  // Adds "Grapes" to the beginning
console.log(fruits);  // Output: ["Grapes", "Banana", "Cherry"]

//SLICE
let numbers = [10, 20, 30, 40, 50, 60];

let slicedNumbers = numbers.slice(2, 5);  // Extract elements from index 2 to 5 (but not including 5)
console.log(slicedNumbers); 
console.log(numbers);

//DELETE
let colors = ["Red", "Green", "Blue", "Yellow"];

delete colors[1];  // Removes "Green" at index 1
console.log(colors);  

//SPLICE
let animals = ["Dog", "Cat", "Rabbit", "Horse"];

// Remove 2 elements starting from index 1 ("Cat" and "Rabbit")
animals.splice(1, 2);
console.log(animals);  // Output: ["Dog", "Horse"]

// Add 2 elements starting from index 1 ("Lion" and "Elephant")
animals.splice(1, 0, "Lion", "Elephant");
console.log(animals);  // Output: ["Dog", "Lion", "Elephant", "Horse"]

