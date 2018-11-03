var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  // array = array.unshift(element);
  return array.unshift(element);
}
function addElementToEndOfArray(array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  // array = array.push(element);
  return array.push(element);
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromEndOfArray(array){
  // array = array.slice(array.length - 1);
  return array.pop();
}
function removeElementFromEndOfArray(array){
  let newArray = array;
  newArray = newArray.slice(0,array.length -1);
  return newArray;
}
