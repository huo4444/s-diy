/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
// import {Router } from 'react-router'
import {HashRouter ,Route,Link} from 'react-router-dom'
// import { Layout, Menu, Breadcrumb } from 'antd';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb'
const { Header, Content, Footer } = Layout;
// import createHistory from 'history/createHashHistory'
// const history = createHistory()
import routes from './routes'
import AsyncComponent from './AsyncComponent'
import './route.less'
import DevTools from './modules/aboutPage/reduxComponent/DevTools'

const Root = () => <HashRouter >
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="edit"><Link to="/">编辑</Link></Menu.Item>
                <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                <Menu.Item key="about"><Link to="/about">关于我</Link></Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                {/*<Breadcrumb.Item>首页</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight:640,minWidth:480 }}>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} exact={route.exact} render={(props)=>{
                        return <AsyncComponent {...route}  {...props} />
                    }} />
                ))}
            </div>
            {/*<DevTools></DevTools>*/}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            webSite ©2017 Created by <i className="iconfont icon-huo" style={{fontSize:"12px"}} ></i>
        </Footer>

    </Layout>

</HashRouter>;

export default Root;