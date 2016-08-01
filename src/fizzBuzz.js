function fizz(num) {
  if (num % 3 === 0) {
    return 'Fizz'
  };
};

function buzz(num) {
  if (num % 5 === 0) {
    return 'Buzz'
  };
};

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'Fizzbuzz';
  }
  else if (num % 5 == 0) {
    return buzz(num)
  }
  else if (num % 3 == 0) {
    return fizz(num)
  }
  else {
    return num;
  }
};
