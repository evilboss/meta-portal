import forEP from 'foreach-promise';
import {Movies} from '../models/';
import {api} from "../utils/api";

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
                    console.log('looop', result._options.isNewRecord);
                    if (result) {
                        if (result._options.isNewRecord) {
                            console.log('going here');
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
    Movies.findAll().then(movies => res.json(movies)).catch(e => console.error(e));

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
