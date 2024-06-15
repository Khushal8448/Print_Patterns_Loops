/* 

Problem statement:
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.

For every value of ‘N’, help sam to print the corresponding N-dimensional forest.

Example:
Input: ‘N’ = 3

Output: 
* * * *
* * * *
* * * *
* * * *
*/

function printPattern(line, stars) {
  for (let i = 0; i < line; i++) {
    let line = "";
    for (let j = 0; j < stars; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

printPattern(8, 6);
