import {useEffect, useState} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import {AppLayout} from "../layouts";
import {api} from "../utils/api";

import {Posters, Controls, Movies} from "../components";

export const LandingPage = (props) => {
    const [movies, setMovies] = useState([]);
    const [searchKeys, setSearchKeys] = useState([]);
    const [notTriggered, setNotTriggered] = useState(true);
    useEffect(() => {

            if (notTriggered) {
                console.log('triggering effect');
                api.getSearches()
                    .then(searches => setSearchKeys(searches))
                    .then(() => api.getMovies()
                        .then(movies => setMovies(movies))
                        .catch(e => console.error('godam', e)))
                    .catch(e => console.error(e))
                    .finally(() => setNotTriggered(false));
            }

        },
        []
    );

    return (
        <AppLayout>
            <Controls setMovies={setMovies} movies={movies} searchKeys={searchKeys}/>
            <Movies movies={movies}/>
        </AppLayout>)
}
