const getFacultyDept = (name = "Dr. L.Sriram", dept = "Mathematics") => `${name} belongs to the ${dept} department.`;

console.log(getFacultyDept()); // Dr. L.Sriram belongs to the Mathematics department.
console.log(getFacultyDept("Dr.L.Sriram ", "Computer Science")); // Dr.L. Sriram belongs to the Computer Science department.
