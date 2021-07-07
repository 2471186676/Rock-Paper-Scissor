// 0 = rock
// 1 = paper
// 2 = scissor

// all loss condition
// 0 1 L
// 1 2 L
// 2 0 L
// 
// else win!

function playRound(input){
    //game loop
    let player = input;
    let AI = aiDecision();
    let result = false;

    result = gameResult(player, AI);
    showResult(player, AI, result);

    console.log(player + "-"+ AI);

    //get point
    let playerPoint = document.getElementById("point-player").innerHTML;
    let AIPoint = document.getElementById("point-AI").innerHTML;
    if(playerPoint == 5 || AIPoint == 5){
        console.log("hello");
        endGame(player, AI);
    }
}

function gameResult(player, AI){
    let result = 0;
    if(player == AI)
        result = 0; //draw
    else if(AI == 2 && player == 0)
        result = 1; //win
    else if(AI == 0 && player == 2)
        result = 2; //loss
    else if(player < AI)
        result = 2; //loss
    else   
        result = 1; //win

    return result;
}

function aiDecision(){
    return Math.floor(Math.random() * 3);
}

function showResult(player, AI, result){
    let text;
    
    switch(result){
        case 0:
            text = "Is a draw!";
            break;
        case 1:
            text = "You Win :)";
            document.getElementById("point-player").innerHTML++;
            break;
        case 2:
            text = "you lose :(";
            document.getElementById("point-AI").innerHTML++;
            break;
    }

    document.getElementById("player").innerHTML = returnDecimal(player);
    document.getElementById("AI").innerHTML = returnDecimal(AI);
    document.getElementById("result").innerHTML = text;
}

function returnDecimal(num){
    let result;
    if(num == 0)
        result = "&#9994";
    else if(num == 1)
        result = "&#9995";
    else if(num == 2)
        result = "&#128076";
    else
        result = "unknow";

    return result;
}

function endGame(player, AI){
    document.querySelector(".container").style.visibility = "hidden";
}