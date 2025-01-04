// Defining a class
class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  
    // Method inside class
    introduce() {
      return `Hi, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`;
    }
  }
  
  // Creating an instance of the class
  const person1 = new Person("Alok", 20, "chennai");
  
  // Accessing properties and calling method
  console.log(person1.name); // Output: Alok
  console.log(person1.age); // Output: 20
  console.log(person1.city); // Output: chennai
  console.log(person1.introduce()); // Output:Hi, my name is alok, I am 20 years old, and I live in chennai.
  