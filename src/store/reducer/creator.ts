import { fetchListDog, fetchListSubDog, setLoading } from './action'

export const setFetchDog = () => {
    return function (dispatch: any) {
        dispatch(setLoading(true))
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(data => {
                dispatch(fetchListDog(Object.keys(data.message)))
            })
            .catch(err => {
                window.console = err
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const setFetchSubDog = (payload: string) => {
    return function (dispatch: any) {
        dispatch(setLoading(true))
        fetch(`https://dog.ceo/api/breed/${payload}/list`)
            .then(res => res.json())
            .then(data => {
                // dispatch(fetchListDog(Object.keys(data.message)))
                dispatch(fetchListSubDog(Object.values(data.message)))
            })
            .catch(err => {
                window.console = err
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}
