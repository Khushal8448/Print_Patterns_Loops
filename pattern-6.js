/* 
Aryan and his friends are very fond of the pattern. For a given integer ‘N’, they want to make the Reverse N-Number Triangle.

Example:
Input: ‘N’ = 3

Output: 

1 2 3 4
1 2 3
1 2
1
*/

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < n - i + 1; j++) {
      line += " " + (j + 1);
    }
    console.log(line.trim());
  }
}

printPattern(5);
