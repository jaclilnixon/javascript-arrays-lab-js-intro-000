 var kittens = [ 'Milo', 'Otis', 'Garfield' ]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
   kittens.push(name)
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
  return newArray
}

function destructivelyPrependKitten(name) {
  var newArray = [ 'Milo', 'Otis', 'Garfield' ]
  newArray.unshift(name)
  return newArray
}

function prependKitten(name) {
  var newArray = kittens.concat(name, kittens);
  return newArray
}
