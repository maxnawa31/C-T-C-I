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

//stairs combination

function davis(n, memo = { 1: 1, 2: 2, 3: 4 }) {
  if (n in memo) {
    return memo[n];
  }
  memo[n] = davis(n - 1, memo) + davis(n - 2, memo) + davis(n - 3, memo);
  return memo[n];
}
