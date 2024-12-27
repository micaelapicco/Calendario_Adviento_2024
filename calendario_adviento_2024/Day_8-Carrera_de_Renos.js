/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let result = ""
    indices.forEach((value, index) => {

        let track = "~".repeat(length)
        const position = value > 0 ? value : length + value

        if (position >= 0 && position < length) {
            track = track.slice(0, position) + "r" + track.slice(position + 1)
        }
        const spaces = indices.length - index - 1

        let line = " ".repeat(spaces) + track + ` /${index + 1}`
        if (index + 1 != indices.length) {
            line += `\n`
        }
        result += line
    })
    return result
}
const result = drawRace([9, 5, -3], 10)
console.log(result)