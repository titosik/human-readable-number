module.exports = function toReadable (number) {
    let str = number.toString();
    let num = {
        n: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ten:['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        tens: ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    };
    
    if (number >= 0 && number <= 9) {
        return num.n[number];
    } else if (number >= 11 && number <= 19) {
        return num.ten[number - 11];
    } else if (number % 10 === 0 && number <= 90) {
      return num.tens[str[0] - 1];
    } else if (number < 100 && number % 10 !== 0 && number > 20) {
      return ${num.tens[str[0] - 1]} ${num.n[str[1]]};
    } else if (number >= 100 && number % 100 === 0) {
      return ${num.n[str[0]]} hundred;
    } else if (number > 100 && str[1] === '0' && number % 100 !== 0) {
      return ${num.n[str[0]]} hundred ${num.n[str[2]]};
    } else if (number > 100 && str[1] === '1' && number % 10 !== 0) {
      return ${num.n[str[0]]} hundred ${num.ten[str[2] - 1]};
    } else if (number > 100 && number % 100 !== 0 && number % 10 === 0) {
      return ${num.n[str[0]]} hundred ${num.tens[str[1] - 1]};
    } else if (number > 100 && number % 10 !== 0 && str[1] >= 2) {
      return ${num.n[str[0]]} hundred ${num.tens[str[1] - 1]} ${num.n[str[2]]};  
    } else {
    return 'Given number is greater than 999';
}
}
