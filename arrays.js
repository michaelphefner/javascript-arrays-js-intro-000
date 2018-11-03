var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromEndOfArray(array){
  array = array.slice(array.length - 1);
  return array;
}
function removeElementFromEndOfArray(array){
  let newArray = array;
  newArray = newArray.unshift(array.length -1);
  return newArray;
}
