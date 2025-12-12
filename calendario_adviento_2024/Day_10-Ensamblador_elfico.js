/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    const registers = {}
    const parseInstruction = (instruction) => {
        const parts = instruction.split(" ")
        return {
            command: parts[0],
            x: parts[1] || 0,
            y: parts[2] || 0,
        }
    }

    const executeMov = (x, y) => {
        const value = x;
        registers[y] = x
    }
    const executeInc = (x) => {
        registers[x] += 1
    }
    const executeDec = (x) => {
        registers[x] -= 1
    }
    const executeJmp = (x, y) => {

    }


    instructions.forEach(instruction => {
        const { command, x, y } = parseInstruction(instruction)
        console.log("instruction: ", command, "x: ", x, "y:", y)
        switch (command) {
            case "MOV": executeMov(x, y); break;
            case "INC": executeInc(x); break;
            case "DEC": executeDec(x); break;
            case "JMP": executeJmp(x, y); break;
            default:
                break;
        }
        console.log(registers)
    })

}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]
console.log(compile(instructions))