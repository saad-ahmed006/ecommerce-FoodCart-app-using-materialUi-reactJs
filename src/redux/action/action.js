export const Add = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}
export const DLT = (id) => {
    return {
        type: 'REMOVE_CART',
        payload: id
    }
}
export const REMOVE = (id) => {
    return {
        type: 'RMV_ONE',
        payload: id
    }
}