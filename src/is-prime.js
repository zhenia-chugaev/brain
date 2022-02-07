const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default isPrime;
