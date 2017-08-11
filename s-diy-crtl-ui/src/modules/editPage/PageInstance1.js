//考虑到css样式问题 无法实现版本机制，所以组件没有版本
let pageInstance1 = {
    widgetInstances: [{
        instanceId: 'widget1-instance1',//widget实例标志
        widget: {id: "widget1", catagory: 'catagoryId',configMethod:"doConfig"},//使用的widget信息
        dataGrid: {lg: {i: 'widget1-instance1', x: 0, y: 0, w: 1, h: 2, static: false}},//widget在整体布局中的信息
        isAsynLoad:true,//是否异步加载
        widgetInstanceConfig:{}//widget实例的配置信息
    },
        {
            instanceId: 'widget1-instance2',
            widget: {id: "widget1", catagory: 'catagoryId',configMethod:"doConfig"},
            dataGrid: {lg: {i: 'widget1-instance2', x: 0, y: 0, w: 1, h: 2, static: false}},
            isAsynLoad:true,//是否异步加载
            widgetInstanceConfig:{}
        },
        {
            instanceId: 'widget1-instance3',
            widget: {id: "widget1", catagory: 'catagoryId',configMethod:"doConfig"},
            dataGrid: {lg: {i: 'widget1-instance3', x: 0, y: 0, w: 1, h: 2, static: false}},
            isAsynLoad:true,//是否异步加载
            widgetInstanceConfig:{}
        }]
}