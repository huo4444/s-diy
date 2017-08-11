/**
 * Created by Administrator on 2017/8/10 0010.
 */
import React from 'react'
import Popover from 'antd/lib/popover'
import Button from 'antd/lib/button'
import Dialog from '../../../commons/dialog/Dialog'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
const HOC=(widgetId,editAbleElementId)=>function HOCfunction(WrappedComponent) {
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
        onEdit=()=>{
            Dialog.load(<Row><Col>ssss</Col></Row>,{})
        }
        render() {
            const elementsTree = super.render()
            let newProps = {};
            // if (elementsTree && elementsTree.type === 'input') {
            //     newProps = {value: 'may the force be with you'}
            // }
            if(this.state.currentMouseOverBlock){
                newProps.style={border:"2px dashed red"};
            }else {
                // newProps.style.border=undefined;
            }
            if(elementsTree.props.onMouseEnter){
                newProps.onMouseEnter=(event)=>{  elementsTree.prop.onMouseEnter(event);  this.onMouseEnter(event);}
            }else{
                newProps.onMouseEnter=(event)=>{    this.onMouseEnter(event);}
            }
            if(elementsTree.props.onMouseLeave){
                newProps.onMouseLeave=(event)=>{  elementsTree.prop.onMouseLeave(event);  this.onMouseOut(event);}
            }else{
                newProps.onMouseLeave=(event)=>{    this.onMouseOut(event);}
            }
            const props = Object.assign({}, elementsTree.props, newProps)
            const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)


            let content=<Button.Group >
                <Button type="primary" ghost onClick={this.onEdit}>编辑</Button>
            </Button.Group>;

               return  <Popover content={content} placement="topLeft"  trigger="hover">
                {newElementsTree}

                </Popover>

        }
    }
}

export default HOC
