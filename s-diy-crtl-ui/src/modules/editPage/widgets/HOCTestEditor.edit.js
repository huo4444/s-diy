/**
 * Created by Administrator on 2017/8/10 0010.
 */
import React from 'react'
 const HOC =(widgetId)=>function HOCfunction(WrappedComponent) {
    let widget= window[widgetId];
    if(widget&&widget.editor){
        return widget.editor;
    }else{
        class EditorPP extends React.Component{
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

                return <WrappedComponent {...this.props}></WrappedComponent>
            }
        }
        window[widgetId]={...window[widgetId],editor:EditorPP};
        return EditorPP;
    }

}

export  default HOC
