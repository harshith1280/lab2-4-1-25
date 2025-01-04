// Defining an object
const student = {
    name: "Harshith",
    age: 21,
    major: "Information Technology ",
    
    // Method inside object
    introduce() {
      return `Hi, my name is ${this.name} and I am studying ${this.major}.`;
    }
  };
  
  // Accessing object properties
  console.log(student.name); // Output: Harshith
  console.log(student.age); // Output: 21
  
  // Calling object method
  console.log(student.introduce()); // Output: Hi, my name is Harshith and I am studying Information Technology!
  