const a = 'letter a'
const b = 'letter b'
const c = {d: [true, false]}
const newObjWithLessCode = {a,b,c}
const sameWayWithMoreCode = {
    a: a,
    b: b,
    c: c
}

console.log(sameWayWithMoreCode)
console.log(newObjWithLessCode)