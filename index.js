var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    kittens.push(name);
    return kittens;
}
destructivelyAppendKitten('Ralph')
