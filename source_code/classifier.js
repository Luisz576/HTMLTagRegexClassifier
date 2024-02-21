const classes = require('./classes')

class Classifier{
    classify(value) {
        for(let c in classes){
            if(classes[c].compare(value)){
                return classes[c]
            }
        }
        return -1
    }
}

module.exports = Classifier