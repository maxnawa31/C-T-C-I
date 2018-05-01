///Fibonacci
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Fibonacci memoization

function fibonacci(n, memo = []) {
  if (n < 2) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
    return memo[n];
  }
}
