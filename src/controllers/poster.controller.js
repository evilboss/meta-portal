import fetch from 'node-fetch';
import {Posters} from '../models/';

const create = (poster) => {
    Posters.create(poster);
}
const list = (req, res, next) => {
    Posters.findAll().then(Posters => res.json(Posters)).catch(e => console.error(e));

}
const find = (req, res) => {
    return res.json(req.movie);
}
const load = (req, res, next, id) => {
    req.movie = {id};
    return next();
}
export const PostersController = {
    list,
    find,
    create,
    load
}
