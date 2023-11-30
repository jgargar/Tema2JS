"use strict"
{
    let array = new Array()

    array[0] = [1,2,3,4,5]
    array[1] = [1,2,3,4,5]
    array[2] = [1,2,3,4,5]



    let numF = 2
    let numC = 4

    let array2 = new Array()

    for(let i = 0; i < numF; i++){
        for(let j = 0; j < numC; j++){
            array2[i][j] = 0
        }
    }

    let array3 = Array.from(Array(2), () => new Array(4))
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 4; j++){
            array2[i][j] = 0
        }
    }
}