let age = 18;

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}


for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

let counter = 1;
while (counter <= 5) {
  console.log("Counter: " + counter);
  counter++;
}

let count = 1;

do {
  console.log("Count is: " + count);
  count++; 
} while (count <= 5);


let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("The day is: " + dayName);


for (let i = 1; i <= 10; i++) {
  console.log("Current number: " + i);

  if (i === 5) {
    console.log("Breaking the loop because i is 5.");
    break; // Exit the loop when i is 5
  }
}
