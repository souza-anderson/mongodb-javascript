const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbName = 'intro-mongo'

// aboragem com algumas mudanças em relação à aula
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  const pessoas = client.db(dbName).collection('pessoas')
  pessoas.insertOne({
    nome: 'Anderson Souza',
    nascimento: '1991-07-31'
  }, (err, res) => {
    console.log(err, res.ops)
    client.close()
  })

  // const cursorPessoas = pessoas.find({})
  // cursorPessoas.forEach(doc => {
  //   console.log(doc)
  // }, () => console.log('fim'))

  // pessoas.updateOne(
  //   {
  //     _id: mongodb.ObjectId('60884805e9c1782f5ca0a116')
  //   },
  //   {
  //     $set: {
  //       nome: 'Anderson Felipe Barros de Souza 222'
  //     }
  //   },
  //   (err, res) => console.log(err)
  // )

  // pessoas.deleteOne(
  //   {
  //     _id: mongodb.ObjectId('60884805e9c1782f5ca0a116')
  //   },
  //   (err, res) => console.log(err)
  // )  

})