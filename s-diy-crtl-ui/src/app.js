/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react'
import { render } from 'react-dom';
import Root from './root'
import { Provider } from 'react-redux'
import finalCreateStore from './modules/aboutPage/reduxComponent/store'
import reducers from './modules/aboutPage/reduxComponent/reducers'
const store = finalCreateStore(reducers)

render(<Provider store={store} key="provider"><Root></Root></Provider>, document.getElementById('react-content'));
