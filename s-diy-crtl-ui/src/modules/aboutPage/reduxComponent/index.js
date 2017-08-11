/**
 * Created by Administrator on 2017/8/7 0007.
 */
import React from 'react'

import CounterUI from './ui/CounterUI'



export  default class Counter extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <CounterUI {...this.props} ></CounterUI>
    }
}




