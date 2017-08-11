/**
 * Created by Administrator on 2017/8/9 0009.
 */
import React from 'react'
import HOCTestEditor from '../HOCTestEditor.edit'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import TestWidget1e1Editor from './TestWidget1e1Editor'
@HOCTestEditor("widget1")
export default class TestWidget extends React.Component{
    constructor(props){
        super(props);
        // this.props={
        //     href:"",
        //     linkText:"链接地址"
        // }

    }



    render(){
        // console.log(this.props)

        return <Row   >
            <Col>editor</Col><Col><TestWidget1e1Editor/></Col>
        </Row>

    }
}