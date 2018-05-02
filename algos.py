def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


#stairs combination
def davis(n, memo={1: 1, 2: 2, 3: 4}):
    if n in memo:
        return memo[n]
    memo[n] = davis(n - 1, memo) + davis(n - 2, memo) + davis(n - 3, memo)
    return memo[n]