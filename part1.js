// Task1 

// const user ={
//     fname: "Sumbat",
//     lname:"Gozalov",
//     age:25
// }
// let keys = Object.keys(user).toString()
// console.log(keys);

// Task2 
// var library = [
//     {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
//     },
//     {
//     title: 'Walter Isaacson',
//     author: 'Steve Jobs',
//     libraryID: 4264
//     },
//     {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//     }];
    
//  let sorted = library.sort((a,b)=>b.libraryID-a.libraryID)
// console.log(sorted);
// Task3
// function forcheck(prop) {
//     const user = {
//       fname: "Sumbat",
//       lname: "Gozalov",
//       age: 25,
//     };
  
//     let checked = user.hasOwnProperty(prop);
//     return checked;
//   }
  
//   console.log(forcheck("fname"));
//   console.log(forcheck("name"));
//   console.log(forcheck("lname"));

//   Task4
//   let substr = (str)=>{
//     const result= [];
//     for(let i =0;i< str.length;i++){
//         for(let j=i+1;j<=str.length;j++){
//             result.push(str.slice(i,j))
//         }
//     }
//     return result
// }
// console.log(substr("asda"))

// Task5

// const obj = {};
// let copy = (obj) => {
//   return Object.fromEntries(Object.entries(obj).map(([a, b]) => [b, a]));
// };

// console.log(copy({ fname: "Sumbat", lname: "Gozalov", age: 25 }));