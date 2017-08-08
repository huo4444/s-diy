/**
 * Created by Administrator on 2017/8/7 0007.
 */
import {combineReducers} from 'redux'
import counter from './reducer1'

const counterComponentReducers = combineReducers({
    counter,
})

export default counterComponentReducers