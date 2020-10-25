import {Button, Row, Col} from 'antd';
import {api} from "../utils/api";
import {useState} from "react";


export const Controls = (props) => {
    const {movies, setMovies, searchKeys} = props;
    const [loading, setLoading] = useState(false);
    const comBineMovies = (newMovies) => {
        return [...movies, ...newMovies]
    }
    const checkDisabled = (key) => {
        let disable = false;
        console.log('check disabled', key, searchKeys);
        const found = searchKeys.find(({searchKey}) => searchKey === key);
        if (found && !found.apiStatus) {
            console.log('found', found.apiStatus);
            disable = true;
        }
        return disable;

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
    return (<Row>
        <Col span={24}>
            <h3>Add Movies</h3>
        </Col>
        <Col span={24}>
            <Button type="primary"
                    onClick={() => onTrigger('Matrix')}
                    loading={loading}
                    disabled={checkDisabled('Matrix')}>
                Matrix
            </Button>
            <Button type="primary"
                    onClick={() => onTrigger('Matrix Reloaded')}
                    disabled={checkDisabled('Matrix Reloaded')}
                    loading={loading} ghost>
                Matrix Reloaded
            </Button>
            <Button type="primary" onClick={() => onTrigger('Matrix Revolutions')}
                    disabled={checkDisabled('Matrix Revolutions')}k
                    loading={loading} danger>
                Matrix Revolutions
            </Button>
        </Col>

    </Row>);
}
