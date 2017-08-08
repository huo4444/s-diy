/**
 * Created by Administrator on 2017/8/7 0007.
 */
import React from 'react'
import {connect} from 'react-redux'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import {increment,decrement} from '../actions'
class CounterUI extends  React.Component{
    constructor(){
        super();

    }
    render(){
        let {counter,increment,decrement}=this.props;
        return <div>
            <span>{counter.counter}</span>
            <a onClick={()=>increment(1)}>increment</a>--<a onClick={()=>decrement(1)}>decrement</a>
            <Row>
                <Col span="8" >a</Col><Col span="8" >b</Col><Col span="8" >c</Col>
            </Row>
        </div>
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = {increment,decrement}

export  default  connect(mapStateToProps,mapDispatchToProps)(CounterUI)
