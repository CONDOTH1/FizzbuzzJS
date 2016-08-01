describe('#fizzbuzz', function() {
  it('should return fizz when 3', function() {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });

  it('should return fizz when 6', function() {
    expect(fizzbuzz(6)).toEqual('Fizz');
  });
});

describe('#buzz', function() {
  it('should return buzz when 5', function() {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });

  it('should return buzz when 10', function() {
    expect(fizzbuzz(10)).toEqual('Buzz');
  });
});

describe('#Fizzbuzz', function() {
  it('should return Fizzbuzz when 15', function() {
    expect(fizzbuzz(15)).toEqual('Fizzbuzz');
  });

  it('should return Fizzbuzz when 30', function() {
    expect(fizzbuzz(30)).toEqual('Fizzbuzz');
  });
});
