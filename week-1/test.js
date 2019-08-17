var b = {};
console.log(b.__proto__)

var a = function() {
  this.b = "b";
  this.c = "c";
}
console.log(a);

var d = new a();
console.log(d);
console.log(d.__proto__);
