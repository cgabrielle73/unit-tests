// Sum all numbers in an array: sumArray(numbers)
const sumArray = (numbers) => {
  let oldValue = 0;
  numbers.forEach(number => {
    oldValue += number
  })
  return oldValue
}

// Find the maximum value in an array: findMax(numbers)
const maxValue = (numbers) => {
  let oldValue = 0;
  numbers.map(number => {
    if(number > oldValue) {
      oldValue = number
    }
  })
  return oldValue
}


// Check if an array contains a specific element: containsElement(arr, element)
const containsElement = (arr, element) => {
  const findValue = arr.find(el => el === element)
  return findValue
}


// Sort an array in ascending order: sortArray(arr)

const sortArray = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b)
  return sortedArray
}

module.exports = {
  sumArray,
  maxValue,
  containsElement,
  sortArray
}