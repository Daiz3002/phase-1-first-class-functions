function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    const fnName = () => console.log("Here is a named function")
    return fnName
}

function returnsAnAnonymousFunction() {
    return () => console.log("Here is an anonymous function")
}