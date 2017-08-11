/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
import Card from 'antd/lib/card'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Spin from 'antd/lib/spin'
// import {Card,Row,Col,Spin } from 'antd'
import Counter from './reduxComponent'
import { Provider } from 'react-redux'
import finalCreateStore from './reduxComponent/store'
import reducers from './reduxComponent/reducers'
const store1 = finalCreateStore(reducers)
const store2 = finalCreateStore(reducers)
import DevTools from './reduxComponent/DevTools'

export default class AboutPage extends React.Component{


    render(){
        return <Row>
            <Col push={8} span={8}>
                <Card style={{ width: "100%",height:300 }} bodyStyle={{ paddingTop: 140,textAlign:"center",fontSize:"18px"}}>
                    努力工作中！<Spin/>
                    {/*<Provider store={store1} key="provider1" ></Provider>*/}
                    {/*<Provider store={store2} key="provider2"></Provider>*/}
                    <Counter instanceId="0"></Counter>
                    <Provider store={store1} key="provider1" ><div><Counter instanceId="1"></Counter></div></Provider>
                    <Provider store={store2} key="provider2"><div><Counter instanceId="2"></Counter><DevTools></DevTools></div></Provider>

                </Card>

            </Col>
            </Row>
        // console.log(store1)
        // return <Provider store={store1} key="provider1" ><Counter instanceId="1"></Counter></Provider>;


    }
}