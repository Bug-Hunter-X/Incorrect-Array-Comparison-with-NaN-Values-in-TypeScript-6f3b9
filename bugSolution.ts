function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false; 
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Number.isNaN(arr1[i]) && Number.isNaN(arr2[i])) {
        continue; // Treat NaN as equal to NaN
    } else if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true; 
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

console.log(compareArrays(arr1, arr2)); //This will correctly return true

const arr3: number[] = [1, 2, 3];
const arr4: number[] = [1, 2, NaN];

console.log(compareArrays(arr3, arr4)); //This will correctly return false

const arr5: number[] = [1, 2, NaN];
const arr6: number[] = [1, 2, NaN];

console.log(compareArrays(arr5, arr6)); //This will correctly return true