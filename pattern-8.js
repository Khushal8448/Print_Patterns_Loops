/* 
Problem statement
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Triangle.

Example:
Input: ‘N’ = 6

Output: 

***********
 *********
  *******
   ***** 
    ***    
     *
*/

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += " ";
    }

    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      line += "*";
    }

    for (let j = 0; j < i; j++) {
      line += " ";
    }
    console.log(line);
  }
}

printPattern(5);
