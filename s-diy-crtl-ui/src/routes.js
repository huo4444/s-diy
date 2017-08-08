/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
    throw new Error(`Dynamic page loading failed: ${error}`);
}

 async  function   loadComponent (props,getComponnet) {

}

const routes = [
    {
        isChunk:true,
        exact:true,
        path: '/',
        render:()=>System.import(/* webpackChunkName: "edit" */ './modules/editPage'),
    },
    {
        isChunk:true,
        path: '/home',
        render:()=> System.import(/* webpackChunkName: "home" */ './modules/homePage'),
    },
    {
        isChunk:true,
        path: '/about',
        render:()=> System.import(/* webpackChunkName: "about" */ './modules/aboutPage'),
    }
];

export default routes;

