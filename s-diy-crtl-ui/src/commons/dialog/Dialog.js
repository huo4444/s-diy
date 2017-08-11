import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import Modal from 'antd/lib/modal';

const noop = ()=> {
};

const Dialog = {

    nodes: {},
    props: {
        title: '',             //标题	React.Element	|| 'string'
        closable: true,	       //是否显示右上角的关闭按钮
        onCancel: noop,	      //点击遮罩层或右上角叉或取消按钮的回调
        width: 500,	           //宽度	String or Number
        style: {},  	       //可用于设置浮层的样式，调整浮层位置等
        maskClosable: true, 	//点击蒙层是否允许关闭
        wrapClassName: 'modal-custom'	 //对话框外层容器的类名	String	-
    },

    load(content, opt){
        let _this = this;
        let index = '';
        //生产主键
        index = opt && (typeof opt === 'object') && 'index' in opt ? opt['index'] : (Math.random() + "").substr(2, 9);

        //merge
        let config = assign(this.props, opt);
        //创建弹窗DOM
        _this.nodes[index] = document.createElement('div');
        document.body.appendChild(_this.nodes[index]);
        var promise = new Promise(function (resolve, reject) {
            let close = (arg)=> _this.close.call(null, arg, index, resolve);
            //render到DOM中
            ReactDOM.render(
                <Modal
                    visible
                    transitionName="zoom"
                    maskTransitionName="fade"
                    footer=""
                    {...config}
                    onCancel={()=>_this.close.call(null, null, index)}>
                    {
                        React.cloneElement(content, {close, fail})
                    }
                </Modal>
                , _this.nodes[index]);

            function fail() {
                //失败回调
                reject();
            }
        });
        return promise;
    },

    /**
     * 外部关闭
     */
    close(arg, index, resolve){
        if (!!index) {
            removeNode(Dialog.nodes[index]);
        }
        if (resolve != undefined) {
            resolve(arg);
        }
        function removeNode(node) {
            const unmountResult = ReactDOM.unmountComponentAtNode(node);
            if (unmountResult) {
                //组件是否注销
                node.parentNode.removeChild(node);
            } else {
                console.error(`组件未注销`);
            }
        }
    },

    /**
     *  侧边弹窗 暂未开通
     */
    side(){
    },

    /**
     *  打开链接 暂未开通
     */
    openUrl(){
    }

};

export default Dialog;