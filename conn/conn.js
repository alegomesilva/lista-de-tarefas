<<<<<<< HEAD

const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {

  	mongoose.connect(`${url}/${data}`, {
      
      user: user,
      pass: pass,  
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(() => {
      console.log('MongoDB Conectado')
    }).catch(err => console.log('erro de conexao com o banco', err));
}


=======

const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {

  	mongoose.connect(`${url}/${data}`, {
      
      user: user,
      pass: pass,  
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(() => {
      console.log('MongoDB Conectado')
    }).catch(err => console.log('erro de conexao com o banco', err));
}


>>>>>>> 6885d66c56ea0187e081247acfb4db1a86b4d399
module.exports = Conn;