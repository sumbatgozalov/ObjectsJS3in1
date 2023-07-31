// // Task1
// const obj = {
//   defaultmark: 0,

//   set marks(mark) {
//     if (mark > 0) {
//       this.defaultmark = mark;
//     } else {
//       console.log("It is negative!!!, Enter only positives");
//     }
//   },
//   get marks() {
//     return this.defaultmark;
//   },
// };
// obj.marks = 20;
// console.log(obj.marks);
// obj.marks = -20;
// console.log(obj.marks);

// Task2;
// const obj = {
//   defaultuserid: undefined,

//   get userid() {
//     return this.defaultuserid;
//   },
//   set userid(id) {
//     if (this.defaultuserid === undefined) {
//       this.defaultuserid = id;
//     } else {
//       console.log("It only could be setted once");
//     }
//   },
// };
// obj.userid = "asdasd";
// console.log(obj.userid);
// obj.userid = "asdasd";

// Task3;
// const obj = {
//   id: 1,
//   username: "John",
//   password: "secret",
//   email: "john@email.com",
// };

// function excluder(hidden, others) {
//   // if(hidden==="password"){return undefined}
//   // else{return others}
//   return hidden === "password" ? undefined : others;
// }
// const stringifying = JSON.stringify(obj, excluder);
// console.log(stringifying);


// Task4

// let countEverytime = {
//     counter : 0,
//     get count(){
//      return ++this.counter
//     }

//  }
// console.log(countEverytime.count);
// console.log(countEverytime.count);
// console.log(countEverytime.count);
// console.log(countEverytime.count);
// console.log(countEverytime.count);
// console.log(countEverytime.count);

// Task5

// class Employee{
//     constructor(id,name){
//       this.id = id,
//       this.name = name,
//       this.salary = 0 
//     }
//   }
  
//   const emp1 = new Employee (1,"FIlankes")
//   const emp2 = new Employee (2,"FIlankes2")
//   emp2.salary=120000
//   console.log(emp2);

//   Task6

//   const nestedObj = {
//     id: 1,
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       country: "USA"
//     },
//     hobbies: ["Reading", "Gardening"],
//     details: {
//       role: "Manager",
//       department: "Sales"
//     }
//   };
  
//   function displayNestedobj(obj) {
//     for(const key in obj){
//       if(typeof obj[key]==="object" && obj[key]!==null)
//       {console.log(
//         `Key: ${key} and Value: (Nested obj)`
//       );displayNestedobj(obj[key])
  
//       }else{
//        console.log( `Key: ${key} and Value: ${obj[key]}`);
//       }
//     }
    
//   }
//   displayNestedobj(nestedObj);
