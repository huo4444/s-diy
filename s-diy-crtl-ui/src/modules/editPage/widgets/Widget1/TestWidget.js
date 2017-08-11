/**
 * Created by Administrator on 2017/8/9 0009.
 */
import React from 'react'
import HOCTest from '../HOCTest.edit'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import TestWidget1e1 from './TestWidget1e1'
import {increment,decrement} from '../HOCTestActions'
import {connect} from 'react-redux'

class TestWidget extends React.Component{
    constructor(props){
        super(props);
        // this.props={
        //     href:"",
        //     linkText:"链接地址"
        // }

    }

    doConfig(){
        //展示配置界面

        //调用 action
    }

    render(){
        // console.log(this.props)

        return  <Row   >
            <Col span={12}>
            <a  >dddddd----{this.props.counter.counter}</a>
                <a onClick={()=>this.props.increment(this.props.instanceId,1)}>increment</a>--<a onClick={()=>this.props.decrement(this.props.instanceId,1)}>decrement</a>
                {/*<TestWidget2></TestWidget2>*/}
            <TestWidget1e1 ></TestWidget1e1>
            </Col>
            <Col span={12}>21212</Col>
        </Row>

    }
}


const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = {increment,decrement}
const  TestWidgetWithStore=connect(mapStateToProps,mapDispatchToProps)(TestWidget)

export default  HOCTest("widget1")(TestWidgetWithStore)


