/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Affix from 'antd/lib/affix'
import Button from 'antd/lib/button'
import './index.less'
import {Responsive ,WidthProvider}  from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default class EditPage extends React.Component{
    constructor(){
        super();
        this.state={
            currentMouseOverBlock:undefined
        }
    }
    onMouseEnter=(event)=>{
        console.log(event.currentTarget)
        console.log(event.currentTarget.getAttribute('data-id'))
        this.setState({currentMouseOverBlock:event.currentTarget.getAttribute('data-id')});
    }

    render(){
        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        var layout1 = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
            {i: 'b', x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2},
            {i: 'f', x: 4, y: 0, w: 1, h: 2},
            {i: 'g', x: 4, y: 0, w: 1, h: 2}
        ];
        let eventHandlers={onMouseEnter:this.onMouseEnter, onMouseOut:this.onMouseOut}
        return <div>
            <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                <Button>120px to affix top</Button>
            </Affix>
            <Row>
                <Col push={0} span={24}>
                    <ResponsiveReactGridLayout className="layout" layouts={{lg:layout,md:layout,sm:layout,xs:layout1}}
                                               onLayoutChange={(layout)=>{console.log(JSON.stringify(layout))}}
                                               breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                               cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                                               rowHeight={30}
                                               //width={1200}//当没使用HOC Provider时别需设置
                    >

                        <div key={'a'} data-id="a"  style={this.state.currentMouseOverBlock==="a"?{backgroundColor:"gray",border:"2px dashed red"}:{backgroundColor:"gray"}} {...eventHandlers} >
                            {this.state.currentMouseOverBlock==="a"?<Affix target={() => this.container}>
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
                        </div>
                        <div key={'b'} data-id="b"  style={this.state.currentMouseOverBlock==="b"?{backgroundColor:"gray",border:"2px dashed red"}:{backgroundColor:"gray"}} {...eventHandlers} >
                            {this.state.currentMouseOverBlock==="b"?<Affix target={() => this.container}>
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
                        </div>
                        <div key={'c'} data-id="c" style={this.state.currentMouseOverBlock==="c"?{backgroundColor:"gray",border:"2px dashed red"}:{backgroundColor:"gray"}} {...eventHandlers} >
                            {this.state.currentMouseOverBlock==="c"?<Affix target={() => this.container}>
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
                        </div>
                        <div key={'d'} data-id="d" style={this.state.currentMouseOverBlock==="d"?{backgroundColor:"gray",border:"2px dashed red"}:{backgroundColor:"gray"}}  {...eventHandlers} >
                            {this.state.currentMouseOverBlock==="d"?<Affix target={() => this.container}>
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
                        </div>
                        <div key={'e'} data-id="e" style={this.state.currentMouseOverBlock==="e"?{backgroundColor:"gray",border:"2px dashed red"}:{backgroundColor:"gray"}} {...eventHandlers} >
                            {this.state.currentMouseOverBlock==="e"?<Affix target={() => this.container}>
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
                        </div>
                    </ResponsiveReactGridLayout>
                </Col>

            </Row>
        </div>
    }
}