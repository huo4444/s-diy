/**
 * Created by Administrator on 2017/8/7 0007.
 */
let nextCounterId = 0
export const increment = step => {
    return {
        type: 'counter_increment',
        id: nextCounterId++,
        step
    }
}

export const decrement = step => {
    return {
        type: 'counter_decrement',
        id: nextCounterId++,
        step
    }
}