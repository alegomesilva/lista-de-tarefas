
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
module.exports = TarefaModel;