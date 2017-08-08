/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'

export  default  class AsyncComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Component:undefined
        }
    }

    componentWillMount() {
        this._isMounted = true;
        let { isBundle, isChunk } = this.props || {};
        if (isBundle) {
            // this.syncLoadBundle(this.props);
        } else if (isChunk) {
            this.syncLoadChunk(this.props);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        let {Component}=this.state;
        if(Component){
            return <Component {...this.props}/>
        }else{
            return null;
        }
    }

    // /**
    //  * @method
    //  * @param {Array}
    //  * @description 加载Bundle（业务线main.js入口）
    //  */
    // syncLoadBundle = () => {
    //     let self = this;
    //     let { Component } = this.state || {};
    //     let { name, source } = this.props;
    //     try {
    //         if (window['@bundle-' + name]) {
    //             //从缓存里获取
    //             self.setState({ Component: window['@bundle-' + name] || null });
    //             return
    //         }
    //         if (!this._isMounted) return null;
    //         Object.keys(source).forEach(k => {
    //             let v = source[k];
    //             if (v.includes('.css')) {
    //                 appendLink({ name: name + '-' + k, href: v })
    //             } else if (v.includes('.js')) {
    //                 let comp = appendBundles({
    //                     name: name + '-' + k, src: v,
    //                     onload: () => {
    //                         self.setState({ Component: window['@bundle-' + name] || null });
    //                     },
    //                     onerror: () => {
    //                         console.error(`syncLoadBundle:--->${name}|${v}加载失败！`)
    //                     }
    //                 });
    //             }
    //         })
    //     } catch (e) {
    //         console.error(e || 'bundle加载错误!');
    //         if (__DEV__) {
    //             throw (e);
    //         }
    //     }
    // }

    /**
     * @method
     * @param {Array}
     * @description 加载Chunk（页面分片chunkFile.js入口）
     */
    syncLoadChunk = async ({ name }) => {
        // console.log("------------------")
        let self = this;
        let { Component } = this.state || {};
        let { render, source } = this.props;
        try {
            if (!this._isMounted) return null;
            let comp = await render();
            // console.log("--------com render------------")
            this.setState({ Component: comp.default || null });
        } catch (e) {
            console.error(e || 'chunk加载错误!');
        }
    }
}