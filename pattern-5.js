/* 
Sam is planting trees on the upper half region (separated by the left diagonal) of the square shared field.

For every value of ‘N’, print the field if the trees are represented by ‘*’.

Example:
Input: ‘N’ = 3

Output: 
* * * *
* * *
* *
*
*/

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i + 1; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

printPattern(5);
