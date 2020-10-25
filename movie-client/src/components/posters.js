import {Tabs, Radio, Row, Col, Divider} from 'antd';

export const Posters = (props) => {
    const {posters} = props;
    return (<Row>
        {posters ? posters.map(poster =>
                <img
                    style={{maxWidth: '400'}}
                    src={(poster.photo) ?
                        poster.photo :
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
                    }
                />)
            : ''}
    </Row>)
}
