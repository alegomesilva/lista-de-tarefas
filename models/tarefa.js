<<<<<<< HEAD
const mongoose = require('mongoose');


const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  estatus: { type: Number, required: true },
  prazo: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now }
})


const TarefaModel = mongoose.model('tarefas', tarefaSchema);

=======
const mongoose = require('mongoose');


const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  estatus: { type: Number, required: true },
  prazo: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now }
})


const TarefaModel = mongoose.model('tarefas', tarefaSchema);

>>>>>>> 6885d66c56ea0187e081247acfb4db1a86b4d399
module.exports = TarefaModel;