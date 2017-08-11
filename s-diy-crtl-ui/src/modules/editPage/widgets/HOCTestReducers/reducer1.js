/**
 * Created by Administrator on 2017/8/7 0007.
 */
const counter = (state = {counter:0}, action) => {
    switch (action.type) {
        case 'counter_increment':
            return {
                ...state,
            counter:state.counter + action.step
            }
        case 'counter_decrement':
            return {
                ...state,
                counter:state.counter - action.step
            }
        default:
            return state
    }
}

export default counter