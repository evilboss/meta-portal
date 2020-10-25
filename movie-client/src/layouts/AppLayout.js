import {Layout} from "antd";

const {Header, Content, Footer} = Layout;

export const AppLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
            </Header>
            <Content style={{padding: '0 50px', height: '80vh'}}>
                {props.children}
            </Content>
            <Footer style={{textAlign: 'center'}}><a href="https://www.meta.how/" target="_blank">Meta.how</a> <b>Technical
                exam</b></Footer>
        </Layout>
    )
}
