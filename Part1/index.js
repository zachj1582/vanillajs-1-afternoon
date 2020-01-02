const gameProgress = [];

function play (clickedId){
    const playerSpan = document.getElementById("player");
    
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        gameProgress[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        gameProgress[clickedId] = 'O';
    }
    console.log(gameProgress);
    
    const box1 = gameProgress[0]; //row 1 left to right
    const box2 = gameProgress[1];
    const box3 = gameProgress[2];
    const box4 = gameProgress[3]; //row 2 LTR
    const box5 = gameProgress[4];
    const box6 = gameProgress[5];
    const box7 = gameProgress[6]; //row 3 LTR
    const box8 = gameProgress[7];
    const box9 = gameProgress[8];

    
    if (box1 !== undefined && box1 === box2 && box1 === box3){
        alert(`${box1} is the winner!!`)
        return;
    }

    if (box4 !== undefined && box4 === box5 && box4 === box6){
        alert(`${box4} is the winner!!`)
        return;
    }

    if (box7 !== undefined && box7 === box8 && box7 === box9){
        alert(`${box7} is the winner!!`)
        return;
    }

    if (box1 !== undefined && box1 === box4 && box1 === box7){
        alert(`${box1} is the winner!!`)
        return;
    }

    if (box2 !== undefined && box2 === box5 && box2 === box8){
        alert(`${box2} is the winner!!`)
        return;
    }

    if (box3 !== undefined && box3 === box6 && box3 === box9){
        alert(`${box3} is the winner!!`)
        return;
    }

    if (box1 !== undefined && box1 === box5 && box1 === box9){
        alert(`${box1} is the winner!!`)
        return;
    }

    if (box3 !== undefined && box3 === box5 && box3 === box7){
        alert(`${box3} is the winner!!`)
        return;
    }

    let boardFull = true;
    for(let i = 0; i <= 8; i++){
        if(gameProgress[i] === undefined){
            boardFull=false;
        }
    }
    if(boardFull === true){
        alert("cat's game, you lose sucka!")
    }
}