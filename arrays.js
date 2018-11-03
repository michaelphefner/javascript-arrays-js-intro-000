var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  let newArray = array.unshift(element);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return array.push(element);
}
function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element);
  return array;
}
