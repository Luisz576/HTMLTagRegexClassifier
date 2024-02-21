class Classifier{
    constructor(classes){
        this.classes = classes
    }

    classify(value){
        for(let c in classes){
            if(value.toLowerCase().startsWith(c.value)){
                return c
            }
        }
        return -1
    }
}

module.exports = Classifier