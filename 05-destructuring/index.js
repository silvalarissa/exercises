const myObj = {
    height: 20,
    base: 30
}

const withoutDestructuring = (object) => {
    return object.height * object.base
}

const withDestructuring = (object) => {
    const {height, base: renameProp} = object

    return height * renameProp
}

console.log(withoutDestructuring(myObj))
console.log(withDestructuring(myObj))