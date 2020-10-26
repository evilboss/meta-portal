import {Layout, Card} from "antd";

const {Header, Content, Footer} = Layout;

export const AppLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <h1 style={{color: 'white'}}>Meta.how</h1>
                <div className="logo"/>
            </Header>
            <Content style={{padding: '0 50px', height: '80vh', margin: '10px'}}>

                <Card title="Meta Movie List" style={{height: '75vh'}}>
                    {props.children}

                </Card>
            </Content>
            <Footer style={{textAlign: 'center'}}><a href="https://www.meta.how/" target="_blank">Meta.how</a> <b>Technical
                exam</b></Footer>
        </Layout>
    )
}
