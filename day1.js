// Day 1 : VAriables and data types 

// Act 1 : variable declaration 
// task 1 : 
    var a = 10;
    console.log(a);

// task 2 : 
    let b = "first day";
    console.log(b);


//Act 2 : const declaration 
// task 3:
    const boolean = false;
    console.log(boolean);

//Act 3:data types
//task 4:
    let array = [1,2,3,4,5];
    let object = {
        day1OfJavascript :1,
        day2OfJavascript :2,
    }
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(boolean));
    console.log(typeof(array));
    console.log(typeof(object));

// conclusion type of array is object


//Act 4:
    let assign = 10;
    console.log(assign);
    assign = 20;
    console.log(assign);

//Act 5:
    const constassign = 10;
    console.log(constassign);
    // constassign = 20;   commented to prevent errors
    console.log(constassign);

    // conclusion: we cannot reassign to const variable 

// features :

// Declare variables of different data types with unique names including numbers
    const num2 = 42;
    const string2 = "Hello, world!";
    const bool2 = true;
    const obj = { name: "Alice", age: 30 };
    const arr = [1, 2, 3, 4, 5];
    const nulll = null;
    const undefineddd = undefined;
    const sym = Symbol("unique");
    const bigE = 1234567890123456789012345678901234567890n;

// Log the value and type of each variable to the console
    console.log(`num2: ${num2}, type: ${typeof num2}`);
    console.log(`string2: ${string2}, type: ${typeof string2}`);
    console.log(`bool2: ${bool2}, type: ${typeof bool2}`);
    console.log(`obj: ${JSON.stringify(obj)}, type: ${typeof obj}`);
    console.log(`arr: ${arr}, type: ${typeof arr}`);
    console.log(`nulll: ${nulll}, type: ${typeof nulll}`); // typeof null is 'object' due to a historical bug in JavaScript
    console.log(`undefineddd: ${undefineddd}, type: ${typeof undefineddd}`);
    console.log(`sym: ${sym.toString()}, type: ${typeof sym}`);
    console.log(`bigE: ${bigE}, type: ${typeof bigE}`);


// 2)

// Example with let
let myLetVariable = "Initial value";
console.log(`myLetVariable before reassignment: ${myLetVariable}`);
myLetVariable = "New value";
console.log(`myLetVariable after reassignment: ${myLetVariable}`);

// Example with const
const myConstVariable = "Initial value";
console.log(`myConstVariable before reassignment: ${myConstVariable}`);
try {
    myConstVariable = "New value";
} catch (error) {
    console.error(`Error during reassignment of myConstVariable: ${error.message}`);
}

