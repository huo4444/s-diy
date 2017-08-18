/**
 * Created by Administrator on 2017/8/10 0010.
 */
import React from 'react'
 const HOC =(widgetId,editorEleId)=>function HOCfunction(WrappedComponent) {

        class EditorPP extends React.Component{
            constructor(props){
                super(props)
            }
            render() {
                return <WrappedComponent {...this.props}></WrappedComponent>
            }
        }
        return EditorPP;
}
export  default HOC
