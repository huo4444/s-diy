/**
 * Created by Administrator on 2017/8/7 0007.
 */
let nextCounterId = 0
export const increment = (instanceId,step) => {
    return {
        type: 'counter_increment',
        id: nextCounterId++,
        step,
        instanceId
    }
}

export const decrement = (instanceId,step) => {
    return {
        type: 'counter_decrement',
        id: nextCounterId++,
        step,
        instanceId
    }
}