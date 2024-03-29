var myGradesCalculate = (function () {

  // Keep this variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    average: function() {
      var total = myGrades.reduce(function(accumulator, item) {
        return accumulator + item;
        }, 0);

      return'Your average grade is ' + total / myGrades.length + '.';
    },

    failing: function() {
      var failingGrades = myGrades.filter(function(item) {
          return item < 70;
        });

      return 'You failed ' + failingGrades.length + ' times.';
    }
  }
})();
// public myGrades
var myGrades = [0,5,10,11];
console.log(myGradesCalculate.failing()); // 'You failed 2 times.'
console.log(myGradesCalculate.average()); // 'Your average grade is 70.33333333333333.'
console.log(myGrades); // public
console.log(myGradesCalculate.myGrades);
