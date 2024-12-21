    // 1. Function Declaration (Traditional Function)
    function greet() {
        console.log("Hello, welcome to JavaScript!");
    }
    greet(); // Calling the function

    // 2. Function Expression (Anonymous Function Assigned to a Variable)
    const sayGoodbye = function() {
        console.log("Goodbye, have a nice day!");
    };
    sayGoodbye();  // Calling the function


     // 3. Arrow Function (Shorter Syntax)
    const sum = (a, b) => {
        return a + b;
    };
    console.log(sum(3, 4));  // Output: 7

     // 4. Function with Parameters
    function greetPerson(name) {
        console.log("Hello, " + name + "!");
    }
    greetPerson("Alice");  // Output: Hello, Alice!
    greetPerson("Bob");    // Output: Hello, Bob!

      // 5. Function with Return Value
    function addNumbers(a, b) {
        return a + b;
    }
    let result = addNumbers(10, 5);
    console.log(result);  // Output: 15