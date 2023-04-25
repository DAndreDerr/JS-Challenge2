// Create a function that filters out negative numbers
// this function will take an array as input and return an array
// This function will remove the negativ numbers

let exarray = [1, 5, 10, -20, -29, 12];
let result = exarray.filter(numFilter);
// the .filter() method creates a nuew array filled with elements that pass a test provided by a function
function numFilter(x) {
    return x >= 0;
}

console.log(result);