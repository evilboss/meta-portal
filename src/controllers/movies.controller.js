import forEP from 'foreach-promise';
import {Movies, Posters, Searches} from '../models/';
import {api} from "../utils/api";
import Sequelize from "sequelize";

const create = (req, res) => {
    const {search} = req.body;
    console.log('going to create');
    Searches.findAll().then((searches) => {
        api.getMovies(search)
            .then(results => {
                const {Search} = results;
                if (Search) {
                    createMany(Search).then((newMovies) => {
                        const data = {newMovies, searches}
                        res.json(data);

                    }).catch((e) => {
                        console.error('happening here', e);
                    });
                }

            })
            .catch(err => {
                const errorPayload = ({...err, searches});
                res.json(errorPayload);
            });


    });

}
const createMany = (movies) => {
    console.log('going to create many');
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
                            movie.Posters = [{photo: (movie.Poster !== 'N/A' && movie.Poster) ? movie.Poster : null}]
                            movieLists.push(movie);

                        }
                    }
                }
            ).catch(e => {
                // console.error('fpe-Errorr', e);
                movieLists.push({});
            });
        }).then(() => {
            resolve(movieLists)
        }).catch(error => {
            console.error('movielist check', error, movieLists);

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
