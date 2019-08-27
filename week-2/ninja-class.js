
// TEAM HTML Assassins
function Assassin(first, last, weapon) {
  this.firstName = first;
  this.lastName = last;
  this.weapon = weapon;
}

var kurt = new Assassin('Kurt','Leadley','cat fang infused hockey stick that can parse the universe');
var wendy = new Assassin('Wendy','Portillo','insidious design using Adobe Suite');
var keith = new Assassin('Keith','Kozmo','XBOX Remote that can control humans to unplug and re-plug in the modem when needed');
var karie = new Assassin('Karie','Funk','coffee laced guitar that can console.log the best riff');

Assassin.prototype.attack = function() {
  return console.log(this.firstName + ' attacks you with a ' + this.weapon);
}
var assassins = [];

function goToBattle(assassin) {
  assassin.attack();
  assassins.push(assassin);
}
goToBattle(kurt);
goToBattle(wendy);
goToBattle(keith);
goToBattle(karie);

console.log("Hi, we are the HTML Assassins : ) We attack first and ask questions later");

for (var i = 0; i < assassins.length; i++) {
  console.log(assassins[i].constructor.name+': '+ assassins[i].firstName);
}




