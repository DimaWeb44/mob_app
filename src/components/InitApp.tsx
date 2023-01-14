import {useAppDispatch, useAppSelector} from "../bll/hooks";
import React, {useEffect} from "react";
import {initializeAppTC} from "../bll/appReducer";
import {TabNavigator} from "../navigation/TabNavigator";
import {FirstScreen} from "../scenes/first-screen";

export const InitApp = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.data)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    return (
        isInitialized !== null ? <TabNavigator/> : <FirstScreen/>
    )
}