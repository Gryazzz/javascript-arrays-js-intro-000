var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  var array = [1];
  return ['0' ...array];
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars = ['mars', ...chocolateBars];
  return chocolateBars;
}
