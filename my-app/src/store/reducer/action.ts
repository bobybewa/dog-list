
export const fetchListDog = (payload:any) => {
    return { type: 'SET_LIST_DOG', payload}
}

// export const fetchListDogValue = (payload:any) => {
//     return { type: 'SET_LIST_DOG_VALUE', payload}
// }

export const fetchListSubDog = (payload:any) => {
    return { type: 'SET_LIST_SUB_DOG', payload}
} 

export const setLoading = (payload:boolean) => {
    return {type: 'SET_LOADING', payload}
}