function changeCompletely(element,index,array) {
  array[index] = 'meh he';
}

function doToElementsInArray(array,callback) {
  array.forEach(callback)
}
