/* 
Sam is making a Triangular painting for a maths project.

An N-dimensional Triangle is represented by the lower triangle of the pattern filled with integers starting from 1.

For every value of ‘N’, help sam to print the corresponding N-dimensional Triangle.

Example:
Input: ‘N’ = 3

Output: 
1
1 2 
1 2 3
1 2 3 4
1 2 3 4 5
*/

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line = line + " " + j;
    }
    console.log(line.trim());
  }
}

printPattern(5);
