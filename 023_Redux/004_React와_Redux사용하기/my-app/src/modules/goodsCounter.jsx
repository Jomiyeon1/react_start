// 액션 생성함수 : 실수를 줄이고, 코드의 양을 줄이기 위해 사용
export const addNumber = () => {
    return {type : 'ADD'}
}

export const substractNumber = () => {
    return {type : 'SUBSTRACT'}
}

// 초기값
const initialState = {
    stock : 5, // 재고
    goods : 0    // user의 파우치 구매 개수
}

const goodsReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    console.log(state)
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                stock : state.stock == 0 ? state.stock : state.stock - 1,
                goods : state.stock == 0 ? state.goods : state.goods + 1,
            }
        case 'SUBSTRACT':
            return {
                ...state,
                stock : state.goods == 0 ? state.stock : state.stock + 1,
                goods : state.goods == 0  ? state.goods : state.goods - 1,
            }
        default:
            return state
    }
}

export default goodsReducer