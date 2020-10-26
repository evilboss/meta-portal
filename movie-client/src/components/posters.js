import {Tabs, Radio, Row, Col, Divider} from 'antd';

const noPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';

export const Posters = (props) => {
    let {posters} = props;
    if (!posters || posters.length < 0) {
        posters = [{photo: noPhoto}];
    }
    return (<>
        {posters ? posters.map((poster, key) =>

                <img
                    key={key}
                    style={{maxWidth: '300px'}}
                    src={(poster.photo) ? poster.photo : noPhoto}
                />)
            : ''}
    </>)
}
