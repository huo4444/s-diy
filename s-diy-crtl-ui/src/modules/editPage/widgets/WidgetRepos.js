/**
 * Created by Administrator on 2017/8/14 0014.
 */
import $script from 'scriptjs'
const  widget_repos=[];
export function loadWidget(widgetId,callback) {
    let localWidget=widget_repos[widgetId];
    if(!localWidget){
        $script('widget/bundle-widget12.js', 'widget')
        $script('widget/bundle-widget12editor.js', 'widgetEditor')
        $script.ready(['widget','widgetEditor'], function (deps, ready, req) {
            let widget=window["widget12"]
            let widgetEditor=window["widget12editor"]
            console.log(widgetEditor);
            localWidget=widget;
            widget_repos[widgetId]=localWidget;
            widget_repos[widgetId].editor=widgetEditor;
            callback(localWidget);
        })
    }else{
        callback(localWidget)
    }
}

