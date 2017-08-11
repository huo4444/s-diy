1.在编辑阶段，widget动态加载，需要基于公用基础的dll(包含基础库和widget专用HOC依赖，不需要布局的依赖)，将widget打bundle包
   import css from baseDll
   import base from baseDll
    <gridLayout>
        <widget1>(从全局的仓库中获取的懒加载的组件,同时要加载widget的css)
            <widget1Editor/>(从全局的仓库中获取的懒加载的组件,同时要加载widgetEditor的css)
        </widget1>
         <widget1>
             <widget1Editor/>
         </widget1>
        <widget2>
            <widget2Editor/>
        </widget2>
    </gridLayout>

2.在编辑完成生成页面阶段，根据布局的定义，生成包含有对应widget和配置信息的布局代码，然后将布局代码编译打包，
此时widget作为动态库被引用，
import css from baseDll
import base from baseDll
import widget from widgetDll
<gridLayout>
    <widget1></widget1>
    <widget1></widget1>
    <widget2></widget2>
</gridLayout>
     ||
     ||
<html>
  <css>baseDll，widgetDll 碎片的或者合并后的css</css>
  <script>baseDll，widgetDll 碎片的或者合并后的js</script>
  <script> compiled Page js</script>
</html>