const Finder = require('./finder')
const Classifier = require('./classifier')
const fs = require('fs')
const readline = require('readline')
const r = readline.createInterface(process.stdin, process.stdout)

// fonte de dados
r.question("Informe o arquivo que será lido (com a extensão): ", run)

// dados -> Regex -> filtrar e classificar as informações
function run(filename){
    const readStream = fs.createReadStream(filename)
    var data = ""
    readStream.on('data', (chunk) => {
        data += chunk.toString('utf8')
    });
    readStream.on('error', (error) => {
        console.error(error)
        r.close()
    });
    readStream.on('end', () => {
        const finder = new Finder()
        const classifier = new Classifier()
        const values = finder.find(data)
        if(values != null && values.length > 0){
            var some = false
            for(let i in values){
                const v = values[i]
                const c = classifier.classify(v)
                if(c == -1){
                    continue
                }
                some = true
                console.log("'" + v + "' => '" + c.name + "'")
            }
            if(!some){
                console.log("Nenhuma Tag foi classificada!")
            }
        }else{
            console.log("Nenhuma Tag foi encontrada!")
        }
        r.question('Enter para sair.', (_)=>{})
        r.close()
    })
}