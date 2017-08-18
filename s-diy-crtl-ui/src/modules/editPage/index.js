/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import Popover from 'antd/lib/popover'
const ButtonGroup = Button.Group;
import './index.less'
import {Responsive ,WidthProvider}  from '../../commons/GridLayout'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
// import TestWidget1 from './widgets/TestWidget1'
// import TestWidgetContainer from './widgets/TestWidgetContainer'
import TestWidget from "./widgets/Widget1/TestWidget";
import TestWidgetEditor from "./widgets/Widget1/TestWidgetEditor"
import WidgetPlaceholder from './widgets/WidgetPlaceholder'
export default class EditPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentMouseOverBlock:undefined
        }
    }
    onMouseEnter=(event)=>{
        // console.log(event.currentTarget)
        // console.log(event.currentTarget.getAttribute('data-id'))
        if(this.state.currentMouseOverBlock!==event.currentTarget.getAttribute('data-id')){
            this.setState({currentMouseOverBlock:event.currentTarget.getAttribute('data-id')});
        }

    }
    onResize=()=>{
        this.setState({resizeFlag:Math.random()});
    }

    componentDidMount(){

    }

    render(){
        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 0, y: 0, w: 1, h: 2, static: false},
            // {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        var layout1 = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
            {i: 'b', x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 0, y: 0, w: 1, h: 2, static: false},
            // {i: 'c', x: 4, y: 0, w: 1, h: 2},
            // {i: 'f', x: 4, y: 0, w: 1, h: 2},
            // {i: 'g', x: 4, y: 0, w: 1, h: 2}
        ];
        let eventHandlers={onMouseEnter:this.onMouseEnter, onMouseOut:this.onMouseOut}


                // let c=[];
                // for(let i=0;i<100;i++){
                //     c.push( <TestWidget key={"t"+i} style={{backgroundColor:"#fee"}}>
                //         <TestWidgetEditor  />
                //     </TestWidget>)
                // }
        return <div>
            {/*<Affix offsetTop={120} onChange={affixed => console.log(affixed)}>*/}
                {/*<Button>120px to affix top</Button>*/}
            {/*</Affix>*/}
            <Row>
                <Col push={0} span={24}>
                    <ResponsiveReactGridLayout className="layout" layouts={{lg:layout,md:layout,sm:layout,xs:layout1}}
                                               onLayoutChange={(layout)=>{console.log(JSON.stringify(layout));}}
                                               breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                               cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                                               rowHeight={30}
                                               onResize={this.onResize}
                                               onResizeStop={this.onResize}
                                               //width={1200}//当没使用HOC Provider时别需设置
                    >

                        <TestWidget key="a" style={{backgroundColor:"#fee"}}>
                            <TestWidgetEditor />
                        </TestWidget>
                        {/*<TestWidget key="b" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="c" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="d" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="e" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="f" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="g" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="h" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="i" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="1" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="2" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="3" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="4" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}
                        {/*<TestWidget key="5" style={{backgroundColor:"#fee"}}>*/}
                            {/*<TestWidgetEditor  />*/}
                        {/*</TestWidget>*/}

                        <WidgetPlaceholder key="6"></WidgetPlaceholder>

                        {/*{c}*/}
                    </ResponsiveReactGridLayout>
                </Col>

            </Row>
        </div>
    }
}