import {Button, Row, Col, message} from 'antd';
import {api} from "../utils/api";
import {useState} from "react";


export const Controls = (props) => {
    const {movies, setMovies, searchKeys, setNotTriggered} = props;
    const [loading, setLoading] = useState(false);
    const comBineMovies = (newMovies) => {
        return [...movies, ...newMovies]
    }
    const checkDisabled = (key) => {
        let disable = false;
        const found = searchKeys.find(({searchKey}) => searchKey === key);
        if (found && !found.apiStatus) {
            disable = true;
        }
        return disable;

    }
    const onTrigger = (search) => {

        const found = searchKeys.find(({searchKey}) => searchKey === search);
        console.log('found data', found);

        if (!found || found.apiStatus) {
            setLoading(true);
            api.updateMovies(search).then(data => {
                console.log(data);
                message.success('Movie list updated');
                if (Array.isArray(data)) {
                    const newMovies = data.filter(value => Object.keys(value).length !== 0);
                    //setMovies(comBineMovies(newMovies));
                }
            }).catch(e => console.error('some error', e)).finally(() => {
                setLoading(false);
                setNotTriggered(false);
            });

        }
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
                    disabled={checkDisabled('Matrix Revolutions')} k
                    loading={loading} danger>
                Matrix Revolutions
            </Button>
        </Col>

    </Row>);
}
