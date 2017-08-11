/**
 * Created by Administrator on 2017/8/10 0010.
 */
import React from 'react'
import Popover from 'antd/lib/popover'
import Button from 'antd/lib/button'
import Modal from 'antd/lib/modal'
import finalCreateStore from '../../aboutPage/reduxComponent/store'
import { Provider } from 'react-redux'
import HOCTestReducers from './HOCTestReducers'
import {increment,decrement} from './HOCTestActions'
import {connect} from 'react-redux'
const  HOC=(widgetId)=>function HOCfunction(WrappedComponent) {

    let widget= window[widgetId];
    if(widget&&widget.widget){
        return widget.widget;
    }else{
        class WidgetPP extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    currentMouseOverBlock:undefined,
                    visible: false
                }
                console.log("----------create store------")
                this.store=finalCreateStore(HOCTestReducers);
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
            onEdit=()=>{
               this.showModal();

            }

            showModal = () => {
                this.setState({
                    visible: true,
                });
            }
            hideModal = () => {
                this.setState({
                    visible: false,
                });
            }
            render() {
                // const elementsTree = super.render()
                // let newProps = {children:[]};
                // // if (elementsTree && elementsTree.type === 'input') {
                // //     newProps = {value: 'may the force be with you'}
                // // }
                // const props = Object.assign({}, elementsTree.props, newProps)
                // const newElementsTree = React.cloneElement(elementsTree, props, [elementsTree.props.children,this.props.children])
                // return newElementsTree
                // console.log(this.props)
                //react-grid-item react-draggable cssTransforms react-resizable
                let {className,style,children,onMouseDown,onMouseUp,onTouchEnd,onTouchStart,...rest}=this.props;
                let newStyle={...style}
                if(this.state.currentMouseOverBlock){
                    newStyle.border="2px dashed red";
                }else {
                    newStyle.border=undefined;
                }

                let content=<Button.Group >
                    <Button type="primary" ghost >删除</Button>
                    <Button type="primary" ghost onClick={this.onEdit} >编辑</Button>
                </Button.Group>;


                    let editorContent=null;
                    let newChildren=[];
                    React.Children.forEach(this.props.children,function (element) {
                        // console.log(typeof element.type==='function')
                        // console.log(element.type.name )
                        if(typeof element.type==='function'&&element.type.name==='EditorPP'){
                            editorContent=React.cloneElement(element)
                        }else{
                            newChildren.push(element)
                        }
                    })


                let editor= <Modal
                    title="Modal"
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    {editorContent}
                </Modal>
                    console.log(this.props)
                    return <Provider store={this.store}><Popover content={content} placement="topLeft"  trigger="hover">
                        <div {...this.props} style={newStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseOut}  >
                        <WrappedComponent {...rest}  />
                        {newChildren}
                        {editor}
                    </div>
                </Popover></Provider>
            }
        }
        const mapStateToProps = state => {
            return {
                counter: state.counter
            }
        }

        const mapDispatchToProps = {increment,decrement}
        let WidgetPPWithStore= connect(mapStateToProps,mapDispatchToProps)(WidgetPP)
        window[widgetId]={...window[widgetId],widget:WidgetPPWithStore};
        return WidgetPPWithStore;
    }
}

export default HOC
