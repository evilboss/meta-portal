import forEP from 'foreach-promise';
import {Movies, Posters, Searches} from '../models/';
import {api} from "../utils/api";
import Sequelize from "sequelize";

const create = (req, res) => {
    const {search} = req.body;
    api.getMovies(search)
        .then(results => {
            const {Search} = results;
            if (Search) {
                createMany(Search).then((newMovies) => {
                    res.json(newMovies);
                });
            }

        })
        .catch(err => res.json(err));

}
const createMany = (movies) => {
    const movieLists = [];

    return new Promise((resolve, reject) => {
        forEP(movies, (movie, index, array) => {
            return Movies.create(movie).then(
                (result, err) => {
                    if (movie.Poster !== 'N/A' && movie.Poster) {
                        const poster = {photo: movie.Poster, movieId: result.id, imdbID: movie.imdbID};
                        Posters.findOrCreate({where: poster}).catch((posterError) => console.error(posterError));
                    }

                    if (result) {
                        if (result._options.isNewRecord) {
                            movieLists.push(result);

                        }
                    }
                }
            ).catch(e => {
                console.error('fpe-Errorr', e);
            })
        }).then(() => {
            console.log('resolving', movieLists);
            resolve(movieLists)
        }).catch(error => {
            console.error('here', error);
        });
    });

}
const list = (req, res, next) => {
    Movies.findAll(
        {
            include: {
                model: Posters
            }
        }).then(movies => res.json(movies)).catch(e => console.error(e));

}
const find = (req, res) => {
    return res.json(req.movie);
}
const load = (req, res, next, id) => {
    req.movie = {id};
    return next();
}
export const MoviesController = {
    list,
    find,
    create,
    load,
    createMany
}
