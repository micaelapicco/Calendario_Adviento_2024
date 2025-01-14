/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {

    let row = board.findIndex(line => line.includes("@"))
    let col = board[row].indexOf("@")

    let newRow = row
    let newCol = col
    switch (mov) {
        case "D": newRow++; break;
        case "U": newRow--; break;
        case "L": newCol--; break;
        case "R": newCol++; break;
        default: return "none";
    }

    if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length) {
        return "crash"
    }
    const destination = board[newRow][newCol]
    if (destination === "*") return "eat";
    else if (destination === "o") return "crash";
    else return "none"
}


const board = [
    '·····',
    '··@··',
    '··*··',
    '·····',
    '·····'
]
console.log(moveTrain(board, 'D'))