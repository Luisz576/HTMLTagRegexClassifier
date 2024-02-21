const Finder = require('./finder')
const Classifier = require('./classifier')
const classesData = require('./classes')
const regex = require('./regex')
const fs = require('fs')
const readline = require('readline')
const r = readline.createInterface(process.stdin, process.stdout)

// fonte de dados
r.question("Informe o arquivo que será lido (com a extensão): ", run)

// dados -> Regex -> filtrar e classificar as informações
function run(filename){
    const readStream = fs.createReadStream(filename)
    var data = ""
    readStream.on('data', function(chunk) {
        data += chunk.toString('utf8')
    });
    readStream.on('end', () => {
        console.log(data)
        const finder = new Finder(regex)
        const classifier = new Classifier(classesData)
        const values = finder.find(data)
        for(let v in values){
            const c = classifier.classify(v)
            if(c == -1){
                continue
            }
            console.log("'" + c + "' => '" + c + "'")
        }
        r.question('Enter para sair.', (_)=>{})
        r.close()
    })
}