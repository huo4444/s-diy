/**
 * Created by Administrator on 2017/8/10 0010.
 */
import React from 'react'
const HOC=()=> function HOCfunction(WrappedComponent) {
    return class WidgetPP extends React.Component{
        constructor(props){
            super(props)
            this.state={
                currentMouseOverBlock:undefined
            }
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
            //提供redux store TODO
            return <WrappedComponent {...this.props}  />
        }
    }
}
export default HOC
