module.exports = class Class{
    constructor(value, name){
        this.value = value.toLowerCase()
        this.name = name
    }
    compare(v){
        return v != null && v.toString().toLowerCase().startsWith(this.value)
    }
}