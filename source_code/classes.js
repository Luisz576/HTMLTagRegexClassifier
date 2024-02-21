const Class = require('./class')

function cClass(value, name){
    return new Class(value, name)
}

const classesData = [
    cClass("<html", "HTML Tag")
]

module.exports = classesData