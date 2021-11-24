
const TarefasService = require('./../services/tarefas.service');

const tarefasService = new TarefasService;

class tarefasController {
  getTarefas = async (req, res) => {

    const tarefas = await tarefasService.findAll();

    res.send(tarefas)
  }

  getTarefasById = async (req, res) => {

    const tarefa = await tarefasService.findById(req.params.id);

    res.send(tarefa);
  }

  createTarefa = async (req, res) => {

    const tarefa = req.body;

    if(!req.body) {
      return;
    }

    await tarefasService.create(tarefa)
    .then(() => {
      res.send({message: `Tarefa ${tarefa.titulo} cadastrada`})
    })

    .catch((err) => {
      res.status(500).send({error: `Erro ${err}`})
    })
  }

  editTarefa = async (req, res) => {

    const idParam = req.params.id;
    
    const tarefaEdit = req.body;
    await tarefasService.edit(idParam, tarefaEdit)

    .then(() => {
      res.send({ message: `Tarefa Editada`})
    })

    .catch(err => {
      res.status(500).send({ message: `Erro: ${err}`})
    })
  }

  deleteTarefa = async (req, res) => {

    const idParam = req.params.id;

    await tarefasService.delete(idParam)

    .then(() => {
      res.send({ message: `Tarefa ${tarefa.titulo} excluida`})
    })

    .catch(err => {
      res.status(500).send({ message: `Erro: ${err}`})
    })
  }
}


const TarefasService = require('./../services/tarefas.service');

const tarefasService = new TarefasService;

class tarefasController {
  getTarefas = async (req, res) => {

    const tarefas = await tarefasService.findAll();

    res.send(tarefas)
  }

  getTarefasById = async (req, res) => {

    const tarefa = await tarefasService.findById(req.params.id);

    res.send(tarefa);
  }

  createTarefa = async (req, res) => {

    const tarefa = req.body;

    if(!req.body) {
      return;
    }

    await tarefasService.create(tarefa)
    .then(() => {
      res.send({message: `Tarefa ${tarefa.titulo} cadastrada`})
    })

    .catch((err) => {
      res.status(500).send({error: `Erro ${err}`})
    })
  }

  editTarefa = async (req, res) => {

    const idParam = req.params.id;
    
    const tarefaEdit = req.body;
    await tarefasService.edit(idParam, tarefaEdit)

    .then(() => {
      res.send({ message: `Tarefa Editada`})
    })

    .catch(err => {
      res.status(500).send({ message: `Erro: ${err}`})
    })
  }

  deleteTarefa = async (req, res) => {

    const idParam = req.params.id;

    await tarefasService.delete(idParam)

    .then(() => {
      res.send({ message: `Tarefa ${tarefa.titulo} excluida`})
    })

    .catch(err => {
      res.status(500).send({ message: `Erro: ${err}`})
    })
  }
}


module.exports = tarefasController;