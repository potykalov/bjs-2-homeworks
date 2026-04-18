function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum = sum + arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
};

/* 
Решение первой задачи методами `Math` и `Reduce`

function getArrayParams(...arr) {
  let min =  Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, value) => acc + value);
  
  const avg = Number((sum / arr.length).toFixed(2));

  return { min, 
          max, 
          avg };
};
*/

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr.length > 0) {
    sum = arr.reduce((acc, value) => acc + value);
  }

  return sum;
};


function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (arr.length === 0) {
    return 0;
  }

  if (arr.length > 0) {
    diffMaxMin = max - min;
  }

  return diffMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0;
  }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      }
      else {
        sumOddElement += arr[i]
      }
    };
  
  let diffEvenOdd = sumEvenElement - sumOddElement;

  return diffEvenOdd;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if (arr.length === 0) {
    return 0;
  };
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
};

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let resultFunc = func(...arrOfArr[i]);

    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  };

  return maxWorkerResult;
};
