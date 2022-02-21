let oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let manyDigit = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];




const underHundred = (number) => {
    if (number < 10) {
        return oneDigit[number];
    } else if (number < 20) {
        return twoDigit[number - 10];
    } else if (number < 100) {
        return `${manyDigit[Math.floor((number / 10) - 2)]}${(number%10 == 0) ? '' : ' ' + oneDigit[number%10]}`;
    }
}

module.exports = function toReadable (number) {
   if (number < 100) {
      return underHundred(number); 
   } else {
       return `${oneDigit[Math.floor(number / 100)]} hundred${(number%100 == 0) ? '' : ' ' + underHundred(number%100)}`
   }
}
