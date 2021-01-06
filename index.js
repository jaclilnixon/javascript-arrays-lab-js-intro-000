 var kittens = [ 'Milo', 'Otis', 'Garfield' ]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
   var newArray = [ 'Milo', 'Otis', 'Garfield' ]
   newArray.push(name)
   return newArray
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
  return newArray
}
