var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  return ['mars', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars = ['mars', ...chocolateBars];
  return chocolateBars;
}
