// Kurt Leadley
// db week 1
function RockBand (singer,guitarist,bassist,drummer,keyboardist) {
    this.singer = singer;
    this.guitarist = guitarist;
    this.bassist = bassist;
    this.drummer = drummer;
    this.keyboardist = keyboardist;
}

RockBand.prototype.guitarSolo = function() {
    return this.guitarist + " has begun a guitar solo";
}
var rush = new RockBand("Geddy Lee", "Alex Lifeson", "Geddy Lee", "Neil Peart", "Geddy Lee");
var dreamTheater = new RockBand("James Labrie","John Petrucci","John Myung","Mike Mangini","Jordan Rudess");

console.log(rush.guitarSolo());
console.log(dreamTheater.guitarSolo());