// @flow
/**
 * Created by Administrator on 2017/8/22 0022.
 */
/**
 * widget实例类型
 */
export type WidgetInstance = { widgetInstanceId: string, widgetId: string, layout: LayoutItem };
export type LayoutItem = { i: string, x: number, y: number, w: number, h: number, static: boolean, minW: number, maxW: number };
export type Page = { pageId: string, widgetInstances: Array<WidgetInstance> };
/**
 * widget信息类型
 */
export type Widget={widgetId:string,desc:string,preview:string};
/**
 * 可用widget 数据
 * @type {[*]}
 */
let widgets:Array<Widget>=[{widgetId:"widget1",desc:"widget1描述",preview:"https://www.baidu.com/img/bd_logo1.png"},
    {widgetId:"widget2",desc:"widget2描述",preview:"https://www.baidu.com/img/bd_logo1.png"}]
let widgetIdSeq: number = 0;
let currentPage: Page = {
    pageId: "page1",
    widgetInstances: [{
        widgetInstanceId: "widgetInstance1",
        widgetId: "widget1",
        layout: {i: 'widgetInstance1', x: 0, y: 0, w: 1, h: 2, static: false}
    }],
};

/**
 * 创建页面
 * @param page
 * @returns {Page}
 */
export function createPage(page:Page):Page {
    currentPage=page;
    currentPage.pageId="page1";
    return currentPage;
}

/**
 * 获取已有页面信息（ 包含页面标志，页面包含widget实例集合，及每个实例的布局信息）
 */
export function archivePageInfo(pageId: string):Page {
    return currentPage;
}
/**
 * 添加widget实例
 * @param param
 */
export function addWidgetInstatnce(param):WidgetInstance {
    let widgetInstance:WidgetInstance = {widgetInstanceId: "widgetInstance" + (widgetIdSeq++), widgetId: param.widgetId,layout:{}};
    let widgetInitLayout:LayoutItem = {i:widgetInstance.widgetInstanceId,x:0,y:0,w:1,h:2,static:false};
    widgetInstance.layout=widgetInitLayout;
    currentPage.widgetInstances.push(widgetInstance);
    return widgetInstance;
}

/**
 * 获取可用widget列表
 * @param param
 * @returns {Array.<Widget>}
 */
export function queryWidgets(param):Array<Widget> {
    return widgets;
}


