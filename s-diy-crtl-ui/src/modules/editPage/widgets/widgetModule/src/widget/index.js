/**
 * Created by Administrator on 2017/8/11 0011.
 */
import HOCTest from '../../../HOCTest.edit'
import React from 'react'
@HOCTest("widget12")
export default class Widget1 extends React.Component{
    render(){
        <div>loaded widget</div>
    }
}

window["widget12"]=Widget1