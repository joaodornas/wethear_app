const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()

dataObject = JSON.parse(data)

dataObject.name = 'Joao'
dataObject.planet = 'Mars'
dataObject.age = 40

dataJSON = JSON.stringify(dataObject)

fs.writeFileSync('1-json.json',dataJSON)