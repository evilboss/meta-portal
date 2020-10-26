import {Button, Row, Col, message} from 'antd';
import {api} from "../utils/api";
import {useState} from "react";

const buttonStyles = {margin: 5};
export const Controls = (props) => {
    const {movies, setMovies, searchKeys, setNotTriggered, setSearchKeys} = props;
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
        if (!found || found.apiStatus) {
            setLoading(true);
            api.updateMovies(search)
                .then(data => {
                    let {newMovies, searches, error} = data;
                    if (newMovies) {
                        newMovies = newMovies.filter(value => Object.keys(value).length !== 0);
                        setMovies(comBineMovies(newMovies));
                    }

                    setSearchKeys(searches);
                    return data;
                })
                .then((data) => {
                    const {error} = data;
                    setLoading(false);
                    if (error) {
                        message.warn(error);
                    } else {
                        message.success('Movie list updated');

                    }
                })
                .catch(e => {
                    setLoading(false);
                    message.error(e.toString());
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
                    style={buttonStyles}
                    loading={loading}
                    disabled={checkDisabled('Matrix')}>
                Matrix
            </Button>
            <Button type="primary"
                    onClick={() => onTrigger('Matrix Reloaded')}
                    style={buttonStyles}

                    disabled={checkDisabled('Matrix Reloaded')}
                    loading={loading} ghost>
                Matrix Reloaded
            </Button>
            <Button type="primary" onClick={() => onTrigger('Matrix Revolutions')}
                    style={buttonStyles}
                    disabled={checkDisabled('Matrix Revolutions')} k
                    loading={loading} danger>
                Matrix Revolutions
            </Button>
        </Col>

    </Row>);
}
