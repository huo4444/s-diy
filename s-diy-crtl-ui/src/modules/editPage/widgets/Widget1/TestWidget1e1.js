/**
 * Created by Administrator on 2017/8/9 0009.
 */
import React from 'react'
import HOCTest2 from '../HOCTest2.edit'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

@HOCTest2("widget1","editableElement1")
export default class TestWidget1e1 extends React.Component{
    constructor(props){
        super(props);
        // this.props={
        //     href:"",
        //     linkText:"链接地址"
        // }

    }

    render(){
        // console.log(this.props)

        return  <Row>
            <Col><a>dddddd</a></Col>

        </Row>

    }
}