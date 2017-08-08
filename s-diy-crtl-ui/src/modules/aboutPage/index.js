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
export default class AboutPage extends React.Component{


    render(){
        return <Row>
            <Col push={8} span={8}>
                <Card style={{ width: "100%",height:300 }} bodyStyle={{ paddingTop: 140,textAlign:"center",fontSize:"18px"}}>
                    努力工作中！<Spin/>
                    <Counter></Counter>
                </Card>

            </Col>
            </Row>

    }
}