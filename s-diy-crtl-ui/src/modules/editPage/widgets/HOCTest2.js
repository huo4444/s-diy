/**
 * Created by Administrator on 2017/8/10 0010.
 */
import React from 'react'
import Popover from 'antd/lib/popover'
import Button from 'antd/lib/button'

 const HOC=(widgetId,editAbleElementId)=> function HOCfunction(WrappedComponent) {
    return class iiEditableComponent extends WrappedComponent{
        constructor(props){
            super(props);
            this.state={currentMouseOverBlock:false}
        }
        componentDidMount(){
            if(super.componentDidMount){
                super.componentDidMount();
            }

            // console.log($)
        }
        onMouseEnter=(event)=>{
            // console.log(event.currentTarget)
            // console.log(event.currentTarget.getAttribute('data-id'))
            this.setState({currentMouseOverBlock:true});

        }
        onMouseOut=(event)=>{
            // console.log(event.currentTarget)
            // console.log(event.currentTarget.getAttribute('data-id'))
            this.setState({currentMouseOverBlock:false});


        }
        render() {
            const elementsTree = super.render()
            return elementsTree;

        }
    }
}

export default HOC
