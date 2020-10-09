const { Movie, Sequelize} = require('../models');

const Op = Sequelize.Op;

const MovieController = {
    getAll(req, res) {
        Movie.findAll()
            .then(Movies => res.send(Movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get movies'
                })
            })
    },

    getById(req, res) {
        Movie.findByPk(req.params.id)
            .then(Movie => res.send(Movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movie'
                })
            })
    },

    getByTitle(req, res) {
        Movie.findAll({
                where: {
                    title: {
                        [Op.like]: `%${req.params.title}%`
                    }
                }
            })
            .then(Movie => res.send(Movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movie'
                })
            })
    },

    create(req, res) {
        Movie.create(req.body)
            .then(Movie => res.send(Movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to create the movie'
                })
            })
    }

}




module.exports = MovieController