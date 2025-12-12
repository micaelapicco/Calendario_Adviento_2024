/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    let result = 0

    const sortReindeer = reindeer.sort((a, b) => a - b)
    const sortStables = stables.sort((a, b) => a - b)
    
    for (let i = 0; i < reindeer.length; i++){
        if (sortReindeer[i] <= sortStables[i])
            result += sortStables[i] - sortReindeer[i]
        else
            result += sortReindeer[i] - sortStables[i]
    }
    return result

  }


 const ejemplo = minMovesToStables([2, 6, 9], [3, 8, 5])
 console.log(ejemplo)