import {getData} from '../api/api'
import {AppActionsType, AppDispatchType, AppThunkType} from "./store";

const initialState: InitialStateType = {
    data: null,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-DATA':
            return {...state, data: action.data}
        default:
            return {...state}
    }
}

// actions
export const setAppData = (data: any) => ({type: 'APP/SET-DATA', data} as const)
// thunks
export const initializeAppTC = (): AppThunkType => (dispatch: AppDispatchType) => {
    getData('firstData')
        .then(res => {
            if (res !== null) {
                dispatch(setAppData(res))
            }
        })
        .catch((e) => {
        })
}

// types
export type InitialStateType = { data: any }
export type SetAppDataActionType = ReturnType<typeof setAppData>
export type ActionsTypeApp = | SetAppDataActionType


