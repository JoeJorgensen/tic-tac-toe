# Tic tac toe plan

1. The first problem to tackle is how to convert raw data into a 3x3 interactive grid and vice versa.

2. The most obvious way to go about this is to use an array.
['',X,O,X,X,'',O,'',O]
and representing it like so
 [
    [0,1,2]
    [3,4,5]
    [6,7,8]
] thus giving us a 3x3 structure.


3. The next problem is to assign these grid spaces values through to UI.
- Like cliking a square to assign a value and not being able to click a square if it has already been assigned.
-  Being able to check if a player has won by seeing if there are three identical symbols in a row.
- The symbol changes from 'X' to 'O' after every move. etc.

4. Check for win.
- Checking can be done through indecies.
- if win show winner and stop game.
- if win reset board and switch player turn.
(are all the values in these arrays the same but not an empty string)
winning indicies: 
[0,1,2]
[3,4,5]
[6,7,8]

[0,3,6]
[1,4,7]
[2,5,8]

[0,4,8]
[2,4,6]






