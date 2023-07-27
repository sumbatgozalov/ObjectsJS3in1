
// Task Map
  Array.prototype.mycustomMap = function(newfunction) {
    const result = [];
    for (let i = 1; i <= this.length; i++) {
      result.push(newfunction.call(this[i], i, this));
    }
    return result;
  };

  const num = [1, 2, 3, 4, 5];


const pow = num.mycustomMap((element) => element ** 2);
console.log(pow); 

