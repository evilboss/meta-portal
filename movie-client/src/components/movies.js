import {Tabs, Radio, Row, Col, Divider} from 'antd';
import {Posters} from "./index";

const {TabPane} = Tabs;
export const Movies = (props) => {
    const {movies} = props;
    return (


        <Row>
            <Col span={24}>
                <Tabs defaultActiveKey="1" tabPosition={'left'} style={{height: '50vh', overflowY: 'scroll'}}>
                    {movies.map((movie, index) => (
                        <>

                            <TabPane tab={`${movie.Title}`} key={index}>
                                <Col span={12}>
                                    <p>Title: <b>{movie.Title}</b></p>
                                    <p>Year: <b>{movie.Year}</b></p>
                                    <p>ImdbId: <b>{movie.imdbID}</b></p>
                                    <p>Type: <b>{movie.Type}</b></p>
                                    <Posters posters={movie.Posters}/>

                                </Col>
                            </TabPane>
                        </>
                    ))}
                </Tabs>
            </Col>

        </Row>

    );
}
