import {getData, setData} from '../api/api'
import {AppActionsType, AppDispatchType, AppThunkType, RootStateType} from "./store";
import {setFirstData} from "./firstScreenReducer";

const initialState: InitialStateType = {
    data: null,
    loading: false,
    item: null,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-DATA':
            return {...state, data: action.data}
        case 'APP/SET-ITEM':
            return {...state, data: state.data ? [action.item, ...state.data] : [action.item]}
        case 'APP/TOGGLE-LOADING':
            return {...state, loading: !state.loading}
        case 'APP/CHANGE-ITEM':
            return {...state, item: {...action.item}}
        default:
            return {...state}
    }
}

// actions
export const setAppData = (data: any) => ({type: 'APP/SET-DATA', data} as const)
export const setItem = (item: any) => ({type: 'APP/SET-ITEM', item} as const)
export const toggleLoading = () => ({type: 'APP/TOGGLE-LOADING'} as const)
export const changeItem = (item: any) => ({type: 'APP/CHANGE-ITEM', item} as const)
// thunks
export const initializeAppTC = (): AppThunkType => (dispatch: AppDispatchType) => {
    dispatch(toggleLoading())
    getData('firstData')
        .then(res => {
            if (res !== null) {
                dispatch(setFirstData(res))
                getData('data').then((res => {
                    if (res !== null) {
                        dispatch(setAppData(res))
                    }
                }))
            }
        })
        .catch((e) => {
        })
        .finally(() => dispatch(toggleLoading()))
}

export const setItemTC = (item: any): AppThunkType => (dispatch: AppDispatchType, getStore: GetStore) => {
    const {data} = getStore().app
    setData(data ? [item, ...data] : [item], 'data')
        .then(res => {
            dispatch(setItem(item))
        })
        .catch((e) => {
        })
}

export const deleteItemTC = (id: any): AppThunkType => (dispatch: AppDispatchType, getStore: GetStore) => {
    const {data} = getStore().app
    const newData = data.filter((item: any) => item.id !== id)
    setData([...newData], 'data')
        .then(res => {
            dispatch(setAppData(newData))
        })
        .catch((e) => {
        })
}

export const changeItemTC = (id: any, newItem: any): AppThunkType => (dispatch: AppDispatchType, getStore: GetStore) => {
    const {data} = getStore().app
    const newData = data.map((item: any) => item.id === id ? newItem : item)
    dispatch(changeItem(null))
    setData([...newData], 'data')
        .then(res => {
            dispatch(setAppData(newData))
        })
        .catch((e) => {
        })
}

// types
export type GetStore = () => RootStateType
export type InitialStateType = { data: any, loading: boolean, item: any }
export type SetAppDataActionType = ReturnType<typeof setAppData>
export type SetItemActionType = ReturnType<typeof setItem>
export type ChangeItemActionType = ReturnType<typeof changeItem>
export type ToggleLoadingActionType = ReturnType<typeof toggleLoading>
export type ActionsTypeApp =
    | SetAppDataActionType
    | SetItemActionType
    | ToggleLoadingActionType
    | ChangeItemActionType


