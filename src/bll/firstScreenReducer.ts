import {setData} from '../api/api'
import {AppActionsType, AppDispatchType, AppThunkType} from "./store";
import {setItemTC} from "./appReducer";
import uuid from "react-native-uuid";

const initialState: InitialStateType = {
    firstData: null,
}

export const firstScreenReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'FIRST/SET-FIRST-DATA':
            return {...state, firstData: action.firstData}
        default:
            return {...state}
    }
}

// actions
export const setFirstData = (firstData: any) => ({type: 'FIRST/SET-FIRST-DATA', firstData} as const)
// thunks
export const setFirstDataTC = (firstData: any): AppThunkType => (dispatch: AppDispatchType) => {
    const {weight, height, photo} = firstData
    setData(firstData, 'firstData')
        .then(res => {
            dispatch(setFirstData(firstData))
            dispatch(setItemTC({weight, height, photo, age: 0, id: uuid.v4()}))
        })
        .catch((e) => {
        })
}

// types
export type InitialStateType = { firstData: any }
export type SetFirstDataActionType = ReturnType<typeof setFirstData>
export type FirstDataActionsType = | SetFirstDataActionType


