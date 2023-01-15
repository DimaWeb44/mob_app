import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {ActionsTypeApp, appReducer} from "./appReducer";
import {FirstDataActionsType, firstScreenReducer} from "./firstScreenReducer";

export const rootReducer = combineReducers({
                                               app: appReducer,
                                               firstData: firstScreenReducer,

                                           })

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppActionsType =
    | ActionsTypeApp
    | FirstDataActionsType

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<RootStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store