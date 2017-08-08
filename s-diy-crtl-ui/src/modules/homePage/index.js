/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
// import {Card,Row,Col } from 'antd'
import Card from 'antd/lib/card'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import './index.less'
export default class HomePage extends React.Component{
    render(){
        return <Row>
                <Col push={8} span={8}>
                    {/*<Card style={{ width: "100%",height:300 }} bodyStyle={{ paddingTop: 140,textAlign:"center",fontSize:"24px"}}>*/}
                        {/*<i className="iconfont icon-huo" style={{fontSize:"48px"}}></i>即将为您服务！*/}
                    {/*</Card>*/}
                </Col>

            </Row>
    }
}