// game variables
let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;

// message show karna
function showMessage(msg) {
    const message = document.getElementById('message'); // message id
    const gameContainer = document.querySelector('.grid'); // game container id

// game ko hide karna
    gameContainer.style.display = 'none'; 

    message.innerHTML = `
        <div style="text-align: center;">
            <h1>${msg}</h1>
        </div>
    `;
    message.style.display = 'block';
    message.style.width = '100%';
    message.style.textAlign = 'center';
}

// winner check karna 
function CheckWinner() {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        showMessage(`Player ${currentPlayer} wins! `);
        return true;
    }
    if (!arr.some(e => e === null)) {
        showMessage("It's a draw! ");
        return true;
    }
    return false;
}

// cell click karna 
function handleclick(cell) {
    if (gameOver) return;
    
    const id = cell.id; // cell id
    if (arr[id] !== null) return; // cell already filled
    
    arr[id] = currentPlayer;
    cell.innerText = currentPlayer;
    // winner check karna
    if (CheckWinner()) {
        gameOver = true;
        return;
    }
    
    currentPlayer = currentPlayer === "X" ? "0" : "X"; // change player
}