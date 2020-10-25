import {Movies} from "./movies";
import {Posters} from "./posters";
import {Searches} from "./searches";

Posters.belongsTo(Movies, {foreignKey: 'movieId'});
Movies.hasMany(Posters, {foreignKey: 'movieId'});
export {Movies, Posters, Searches}
