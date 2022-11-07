

function twoSmallest(smallArray){

  let firstNum = smallArray[0];           // variable for the smallest number
  let secondNum = smallArray[1];          // variable for second largest number

  if (firstNum < secondNum){              //If current element is smaller than first  
    firstNum = smallArray[1];             //then update both first and second
    secondNum = smallArray[0];

  } for(let i = 2; i < smallArray.length; i++){       //every time when an element has value smaller than current min num
    if(smallArray[i] < firstNum){                     // update the current minimum and continue 
      secondNum = firstNum
      firstNum = smallArray[i]

    } else if(smallArray[i] < secondNum){
      secondNum = smallArray[i];
    }
    return smallArray;
  }
}
console.log(twoSmallest([3, 7]));
console.log(twoSmallest([0, 6, 12, 1]));
console.log(twoSmallest([12, 17, 10, 2, 200, 7]));



/*
function twoSmallest( array1, arraySize)
{
    let i = 0;
    let firstNum1;
    let secondNum1;
 
    if (arraySize < 2)
    {
        console.log(" Invalid Input ");
        return;
    }
 
    firstNum1 = Number.MAX_VALUE ;
    secondNum1 = Number.MAX_VALUE ;
    for (i = 0; i < arraySize ; i ++)
    {
        if (array1[i] < firstNum1)
        {
            secondNum1 = firstNum1;
            firstNum1 = array1[i];
        }
 
        else if (array1[i] < secondNum1 && array1[i] != firstNum1)
            secondNum1 = array1[i];
    }
    if (secondNum1 == Number.MAX_VALUE )
        console.log("Theres no 2nd small num");
    else
        console.log("The smallest num is " + firstNum1 + " and second "+
            "smallest num is " + secondNum1 `);
}
console.log(twoSmallest([3, 7]));
console.log(twoSmallest([0, 6, 12, 1]));
console.log(twoSmallest([12, 17, 10, 2, 200, 7]));
*/



















/* 
 if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }


 module.exports = {
    twoSmallest,
  }
  */
