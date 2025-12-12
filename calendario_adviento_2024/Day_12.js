/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    
    const adornos = {
        "*": 1,
        "o": 5,
        "^": 10,
        "#": 50,
        "@":100
    }
    let result = 0
    
    for (let i = 0; i < ornaments.length; i++) {
      
        const valorActual = adornos[ornaments[i]];
        const valorSiguiente = adornos[ornaments[i + 1]] || 0;
        if (!valorActual)
          return undefined
        if (valorActual < valorSiguiente) 
            result -= valorActual    
        else
            result += valorActual
        
    }
    return result      
  }
  const adornos = "***z"
  const prueba = calculatePrice(adornos)

  console.log(prueba)

