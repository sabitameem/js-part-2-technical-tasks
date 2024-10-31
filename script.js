// Problem 1: String Manipulations
function processNames(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log("Full Name in Uppercase:", fullName.toUpperCase());
    
    const firstThreeLetters = firstName.slice(0, 3);
    console.log("First Three Letters of First Name:", firstThreeLetters);
  
    const containsBinte = fullName.includes("Binte");
    console.log("Contains 'Binte':", containsBinte);
  }
  
  processNames("John", "Doe");
  
//  Problem 2: Object Manipulation
  const person = {
    name: "Bob",
    job: "Engineer"
  };
  
  person.name = "Alice"; // Change name to "Alice"
  person["job"] = "Artist"; // Change job to "Artist"
  person.hobby = "Painting"; // Add new property "hobby"
  
  console.log("Updated Person Object:", person);
  
// Problem 3: Array Manipulations
  const fruits = ["Apple", "Banana", "Orange"];
  fruits[1] = "Mango"; // Replace second fruit with "Mango"
  fruits.push("Blueberry"); // Add "Blueberry" to end of array
  
  const removedFruit = fruits.pop(); // Remove last fruit
  console.log("Removed Fruit:", removedFruit);
  console.log("Updated Fruits Array:", fruits);
  console.log("Array Length:", fruits.length);
  
// Problem 4: Math Operations
  console.log("Square Root of 64:", Math.sqrt(64));
  console.log("5 Raised to the Power of 3:", Math.pow(5, 3));
  console.log("7.65 Rounded to Nearest Integer:", Math.round(7.65));
  console.log("Floor of 4.8:", Math.floor(4.8));
  console.log("Ceil of 3.1:", Math.ceil(3.1));
  
  // Problem 5: Date and Time Information
  function printDateTimeInfo() {
    const currentDate = new Date();
    console.log(currentDate);
    
    console.log("Current Date (toDateString):", currentDate.toDateString());
    console.log("Current Time (toLocaleTimeString):", currentDate.toLocaleTimeString());
    console.log("Year:", currentDate.getFullYear());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-based
    console.log("Day:", currentDate.getDate());
    console.log("Hour:", currentDate.getHours());
    console.log("Minute:", currentDate.getMinutes());
  }
  
  printDateTimeInfo();
  
  // Problem 6: Number Printing Functions
  function printNumbers() {
    for (let i = 1; i <= 5; i++) {
      console.log("Number:", i);
    }
  }
  
  function printOddNumbers() {
    let i = 1;
    while (i < 10) {
      if (i % 2 !== 0) {
        console.log("Odd Number:", i);
      }
      i++;
    }
  }
  
  printNumbers();
  printOddNumbers();
  