// Create an object
let student = {
  name: "Rahul",     // student's name
  age: 22,            // student's age
  course: "bca",      // course name

  // method inside object
  introduce: function () {
    console.log("My name is " + this.name);
  }
};

// Access object values
console.log(student.name);    // Rahul 
console.log(student.age);     // 22

// Update value
student.age = 23;

// Add new property
student.city = "Mumbai";


// Final object
console.log(student);
