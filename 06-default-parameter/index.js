const sumWithDefaultParameter = (a = 0, b = 0) => {
    return a+b
}

const sumWithoutDefaultParameter = (a,b) => {
    return a+b
}

console.log('expected 2: ', sumWithDefaultParameter(1,1))
console.log('expected 0: ', sumWithDefaultParameter())