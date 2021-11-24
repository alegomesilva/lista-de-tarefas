<<<<<<< HEAD
const UserService = require('./../services/users.service');

const userService = new UserService;

class UserController {
  createUser = async (req, res) => {
    const user = req.body;
    const userSave = await userService.createUser(user)
    .then(() => {
      res.send({ message: 'Tarefa cadastrada' })
    })
    .catch(err => console.log(err))
  }
}

=======
const UserService = require('./../services/users.service');

const userService = new UserService;

class UserController {
  createUser = async (req, res) => {
    const user = req.body;
    const userSave = await userService.createUser(user)
    .then(() => {
      res.send({ message: 'Tarefa cadastrada' })
    })
    .catch(err => console.log(err))
  }
}

>>>>>>> 6885d66c56ea0187e081247acfb4db1a86b4d399
module.exports = UserController;