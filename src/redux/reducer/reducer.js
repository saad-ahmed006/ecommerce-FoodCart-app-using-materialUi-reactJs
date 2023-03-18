const InitialState = {
    carts: []
}
export const cartreducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const ItemIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        // return {
        //     ...state,
        //     carts: [...state.carts, action.payload]
        // }
        break;
        case 'REMOVE_CART':
            const data = state.carts.filter((el) => el.id !== action.payload);
            // console.log(data);

            return {
                ...state,
                carts: data
            }

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload.id);

                return {
                    ...state,
                    carts:data
                }
            }
break;
        default: return state

    }
}