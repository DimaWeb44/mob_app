import {getData, setData} from '../api/api'
import {AppActionsType, AppDispatchType, AppThunkType, RootStateType} from "./store";
import {setFirstData} from "./firstScreenReducer";

const initialState: InitialStateType = {
    data: null,
    loading: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-DATA':
            return {...state, data: action.data}
        case 'APP/SET-ITEM':
            return {...state, data: state.data ? [action.item, ...state.data] : [action.item]}
        case 'APP/TOGGLE-LOADING':
            return {...state, loading: !state.loading}
        default:
            return {...state}
    }
}

// actions
export const setAppData = (data: any) => ({type: 'APP/SET-DATA', data} as const)
export const setItem = (item: any) => ({type: 'APP/SET-ITEM', item} as const)
export const toggleLoading = () => ({type: 'APP/TOGGLE-LOADING'} as const)

// thunks
export const initializeAppTC = (): AppThunkType => (dispatch: AppDispatchType) => {
    dispatch(toggleLoading())
    getData('firstData')
        .then(res => {
            if (res !== null) {
                dispatch(setFirstData(res))
                dispatch(toggleLoading())
                getData('data').then((res => {
                    if (res !== null) {
                        dispatch(setAppData(res))
                    }
                }))
            }
        })
        .catch((e) => {
        })
}

export const setItemTC = (item: any): AppThunkType => (dispatch: AppDispatchType, getStore: GetStore) => {
    const {data} = getStore().app
    data
        ? setData([item, ...data], 'data')
        .then(res => {
            dispatch(setItem(item))
        })
        .catch((e) => {
        })
        :setData([item], 'data')
            .then(res => {
                dispatch(setItem(item))
            })
            .catch((e) => {
            })
}

// types
export type GetStore = () => RootStateType
export type InitialStateType = { data: any, loading: boolean }
export type SetAppDataActionType = ReturnType<typeof setAppData>
export type SetItemActionType = ReturnType<typeof setItem>
export type ToggleLoadingActionType = ReturnType<typeof toggleLoading>
export type ActionsTypeApp = | SetAppDataActionType | SetItemActionType | ToggleLoadingActionType


