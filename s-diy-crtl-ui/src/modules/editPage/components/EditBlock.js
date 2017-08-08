/**
 * Created by Administrator on 2017/8/8 0008.
 */
import React from 'react'
import Affix  from 'antd/lib/affix'
import Button from 'antd/lib/button'
export default class EditBlock extends React.Component{
    constructor(){
        super();
        this.state={
            onMouseOver:false
        }
    }
    onMouseEnter=()=>{
        this.setState({onMouseOver:true});
    }
    onMouseOut=()=>{
        this.setState({onMouseOver:false});
    }
    onClick=()=>{

    }

    render(){
        if(this.props['data-edit']){
            return <div {...this.props} ref={(node) => { this.container = node; }} onClick={this.onClick} onMouseEnter={this.onMouseEnter}  onMouseLeave={this.onMouseOut} style={this.state.onMouseOver?{...this.props.style,backgroundColor:"gray",border:"2px dashed red"}:{...this.props.style,backgroundColor:"gray"}}>
                {this.state.onMouseOver?<Affix target={() => this.container}>
                    <Button type="primary">
                        添加
                    </Button>
                    <Button type="primary">
                        替换
                    </Button>
                    <Button type="primary">
                        移除
                    </Button>
                </Affix>:null}
                {this.props['data-id']}

                </div>
        }else{
            return <div {...this.props}  >{this.props['data-id']}</div>
        }

    }
}