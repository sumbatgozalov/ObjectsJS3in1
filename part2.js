// Task1 
// const user = {
//     fname: "Sumbat",
//     lname: "Gozalov",
//     age: 25,
//   };
//   for (let keys in user) {
//    
//       delete user[keys];
//    
//   }
  
//   const newuser = {};
  
//   console.log(user);
//   let checked = Object.setPrototypeOf(newuser, user);

// Task2 
// Number.prototype.add = function(num){
//     return this + num
//  }
//  Number.prototype.substract = function(num){
//      return this- num
//   }
//   Number.prototype.divide = function(num){
//      return this / num
//   }
//   Number.prototype.multiply = function(num){
//      return this * num
//   }
//  console.log((6).add(3).substract(1).divide(2).multiply(10));

const fakeobject = {};

Object.defineProperty(fakeobject, 'mylength', {
  writable: true,
  value: 0,
});
fakeobject.push = function(smth) {

    this[this.mylength] = smth;

    this.mylength++;
  };


  fakeobject.pop = function() {
    if (this.mylength === 0) {
      
      return undefined;
    } else {
     
      this.mylength--;
      const last = this[this.mylength];
      delete this[this.mylength];
    
      return last;
    }
  };
fakeobject.push("first")
fakeobject.push("second");
fakeobject.pop();


console.log(fakeobject);








// const user = {
//   //     fname: "Sumbat",
//   //    lname: "Gozalov",
//   //    age: 25,
  
//   //   }