import {setData} from '../api/api'
import {AppActionsType, AppDispatchType, AppThunkType} from "./store";

const initialState: InitialStateType = {
    firstData: null,
}

export const firstScreenReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-FIRST-DATA':
            return {...state, firstData: action.firstData}
        default:
            return {...state}
    }
}

// actions
export const setFirstData = (firstData: any) => ({type: 'APP/SET-FIRST-DATA', firstData} as const)
// thunks
export const setFirstDataTC = (firstData: any): AppThunkType => (dispatch: AppDispatchType) => {
    setData(firstData, 'firstData')
        .then(res => {
            dispatch(setFirstData(firstData))
        })
        .catch((e) => {
        })
}

// types
export type InitialStateType = { firstData: any }
export type SetFirstDataActionType = ReturnType<typeof setFirstData>
export type FirstDataActionsType = | SetFirstDataActionType


