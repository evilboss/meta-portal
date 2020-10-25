import {Button} from 'antd';
import {api} from "../utils/api";
import {useState} from "react";


export const Controls = (props) => {
    const {movies, setMovies} = props;
    const [loading, setLoading] = useState(false);
    const comBineMovies = (newMovies) => {
        return [...movies, ...newMovies]
    }
    const onTrigger = (search) => {
        setLoading(true);
        api.updateMovies(search).then(data => {
            if (Array.isArray(data)) {
                const newMovies = data.filter(value => Object.keys(value).length !== 0);
                setMovies(comBineMovies(newMovies));
            }
        }).catch(e => console.error('some error', e)).finally(() => setLoading(false));
    }
    return (<>
        <h3>Add Movies</h3>
        <Button type="primary" onClick={() => onTrigger('Matrix')} loading={loading}>
            Matrix
        </Button>
        <Button type="primary" onClick={() => onTrigger('Matrix Reloaded')} loading={loading}>
            Matrix Reloaded
        </Button>
        <Button type="primary" onClick={() => onTrigger('Matrix Revolutions')} loading={loading}>
            Matrix Revolutions
        </Button>
    </>);
}
