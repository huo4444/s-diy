/**
 * Created by Administrator on 2017/8/14 0014.
 */
//
/**
 * widget站位组件
 * 1.
 */
import React from 'react'
import {loadWidget} from './WidgetRepos'
import HOCTest from './HOCTest.edit'
import TestWidget from './Widget1/TestWidget'


export  class WidgetPlaceholder extends React.Component{
    static defaultProps = {
        widgetId:"widget1",//用于获取widget组件
        widgetInstanceId:"",//用户初始widget组件实例

    }
    constructor(props){
        super(props);
        this.state={
            widgetComponent:TestWidget
        }
        loadWidget(this.props.widgetId,this.updateWidgetComponent);

    }
    updateWidgetComponent=(widgetComponent)=>{
        // this.setState({widgetComponent:widgetComponent});
    }
    render(){
        let {widgetComponent}=this.state;
        if(widgetComponent){
            return <widgetComponent {...this.props}></widgetComponent>
        }else{
            return <div {...this.props}>loading</div>
        }
    }
}

export default  HOCTest("WidgetPlaceholder")(WidgetPlaceholder)