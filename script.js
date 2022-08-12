var moves = 9;
var chance = ["x", "y", "x", "y", "x", "y", "x", "y", "x"];
var pos = "";
var matritx = [[], [], []];
var matrix = [[0, 0, 1], [0, 0, 1], [0, 0,]];
/* 2D
for (let i = 0; i < matrix.length; i++)
{
    for (let j = 0; j < matrix.length; j++){
        matrix[i][j] = 1;
    }
}
console.log(matrix); */
function win(current) {
    current = (current == "x" ? 1 : 0);
    //R1
    if ((matrix[0][0] == current) && (matrix[0][1] == current) && (matrix[0][2] == current)) {
        console.log("Current Player Wins");
    }
    //R2
    else if ((matrix[1][0] == current) && (matrix[1][1] == current) && (matrix[1][2] == current)) {
        console.log("Current Player Wins");
    }
    //R3
    else if ((matrix[2][0] == current) && (matrix[2][1] == current) && (matrix[2][2] == current)) {
        console.log("Current Player Wins");
    }
    //C1
    else if ((matrix[0][0] == current) && (matrix[1][0] == current) && (matrix[2][0] == current)) {
        console.log("Current Player Wins");
    }
    //C2
    else if ((matrix[0][1] == current) && (matrix[1][1] == current) && (matrix[2][1] == current)) {
        console.log("Current Player Wins");
    }
    //C3
    else if ((matrix[0][2] == current) && (matrix[1][2] == current) && (matrix[2][2] == current)) {
        console.log("Current Player Wins1");
    }
    //D1
    else if ((matrix[0][0] == current) && (matrix[1][1] == current) && (matrix[2][2] == current)) {
        console.log("Current Player Wins");
    }
    //D2
    else if ((matrix[0][2] == current) && (matrix[1][1] == current) && (matrix[2][0] == current)) {
        console.log("Current Player Wins");
    }
    else {
        console.log("Draw");
    }
}
function check(current, pos) {
    //console.log(pos[0]+" "+pos[1]);
    if (matrix[pos[0]][pos[1]] == null) {
        if (current == "x") {
            matrix[pos[0]][pos[1]] = 1;
        }
        else if (current == "y") {
            matrix[pos[0]][pos[1]] = 0;
        }
        win(current);
    }
}
function play() {
    while (moves > 0) {
        var current = chance.pop(); //x
        pos = "22"; //position
        moves -= 1;
        check(current, pos);
    }
}
play();
//console.log(matrix[1][2]);
