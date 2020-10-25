import {Movies} from "./movies";
import {Posters} from "./posters";
import {Searches} from "./searches";

Movies.hasMany(Posters, {as: "Posters", foreignKey: "imdbID"});
Posters.belongsTo(Movies, {as: "Movie", foreignKey: "imdbID"});
export {Movies, Posters, Searches}
