const fs = require('fs');

// se der erro de "Error: EPERM: operation not permitted, open"
//desabilite o hidden da pasta que esta salvando o arquivo

function handleFile(statsMachine) {
    // verifica se existe o arquivo
    if (!fs.existsSync(__dirname + "/log.txt")) {
        // se não existir ele cria 
        createFile(statsMachine)
    } else {
        // se existir ele busca 
        fs.readFile(__dirname + "/log.txt", 'utf8',
            (error, data) => {
                // chama a função de resposta
                callbackResponse(error, null, handleData(data, statsMachine))
            });
    }
}

function createFile(dados) {
    fs.writeFile(__dirname + "/log.txt", dados,
        (error) => {
            callbackResponse(error, "The file has been saved!")
        });
}

function deleteFile() {
    fs.unlink(__dirname + "/log.txt",
        (error) => {
            callbackResponse(error, "The file has been delete!")
        })
}

function callbackResponse(error, response, action = null) {
    if (error) {
        console.log("error:", error)
    } else {
        if (!action) {
            console.log("response: ", response);
        } else {
            action()
        }
    }
}

function handleData(data, statsMachine) {
    const newData = `${data.replaceAll('"', "")} \n${statsMachine}`
    deleteFile()
    createFile(newData)
}

module.exports = handleFile
