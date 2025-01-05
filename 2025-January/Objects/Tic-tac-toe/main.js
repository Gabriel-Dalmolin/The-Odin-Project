turn = "x"

const grid = {
    board: [[],[],[]],

    playTurn: function (button){
        if (button.textContent != ""){
            return;
        }
    
        button.textContent = turn;
        board[button.id] = turn;
        if (turn == "x"){
            turn = "o";
        } else {
            turn = "x";
        }
    }
}

