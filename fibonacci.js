
// 23.Write a function that computes the list of the first 100 Fibonacci numbers. The
// first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be
// computed by adding the n-th and the n-1-th Fibonacci number. The first few are
// therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.




var i;
var fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 15; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

// ****Next fibonacci number = previous + one before previous
