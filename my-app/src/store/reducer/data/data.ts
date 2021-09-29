const initialState = {
    listDog : [],
    // listDogValue: [],
    listSubDog: [],
    isLoading: false
}

const reducer = (state = initialState, {type, payload}:{type:string, payload: any}) => {
    switch (type) {
        case 'SET_LIST_DOG':
            return {...state, listDog: payload};
        case 'SET_LIST_SUB_DOG':
            return {...state, listSubDog: payload};
        // case 'SET_LIST_DOG_VALUE':
        //     return {...state, listDogValue: payload}
        case 'SET_LOADING':
            return {...state, isLoading: payload}
        default :
            return state
    }
}

export default reducer