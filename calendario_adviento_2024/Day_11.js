/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
 
    const firstLetter = [...filename].findIndex(char => /[a-zA-Z]/.test(char));
    const extention = [...filename].indexOf(".")
    let result = ""
    console.log(firstLetter, extention)
    for (let i = firstLetter; i <= extention + 3; i++){
        result += filename[i]
    }
    return result
  }

  const prueba = "1234123411234"
   const ejemplo = decodeFilename(prueba)
   console.log(ejemplo)