const { User } = require('../models');
const bcrypt = require('bcrypt');

const userController = {
    async signup(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            // const user Esta es el una variable que guarda lo que sequelize pilla de BD. Las variables en minuscula siempre
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the user'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }

        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to login'
            })
        }
    },
    getByEmail(req, res) {
        User.findAll({
                where: {
                    email: req.params.email
                }, attributes: {
                    exclude: ['id']
                }
            })
            .then(user => res.send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the user'
                })
            })
    },
    delete(req, res) {
        User.destroy({
                where: {
                    email: req.body.email
                }
            })
            .then((email) => {
                if (!email) {
                    return res.send({
                        message: 'Email not found'
                    })
                }
                res.send({
                    message: 'Account successfully removed'
                })
            })
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to remove the account'
                })
            })
    }
}
module.exports = userController;