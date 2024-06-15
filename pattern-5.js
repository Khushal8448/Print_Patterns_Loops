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
  for (let i = n; i > 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }

    console.log(line.trim());
  }
}

printPattern(5);
