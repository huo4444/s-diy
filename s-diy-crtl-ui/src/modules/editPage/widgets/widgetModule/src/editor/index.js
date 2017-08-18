/**
 * Created by Administrator on 2017/8/11 0011.
 */
import HOCTestEditor from '../../../HOCTestEditor.edit'
import React from 'react'
@HOCTestEditor("widget12")
export default class Widget1Editor extends React.Component{
    render(){
        <div>loaded widget editor</div>
    }
}

window["widget12editor"]=Widget1Editor
