import {useAppDispatch, useAppSelector} from "../bll/hooks";
import React, {useEffect} from "react";
import {initializeAppTC} from "../bll/appReducer";
import {TabNavigator} from "../navigation/TabNavigator";
import {FirstScreen} from "../scenes/first-screen";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const InitApp = () => {
    const dispatch = useAppDispatch()
    const firstData = useAppSelector(state => state.firstData.firstData)
    const loading = useAppSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(initializeAppTC())
   /*     let keys = ['data', 'firstData'];
                 AsyncStorage.multiRemove(keys, err => {
                     // keys k1 & k2 removed, if they existedr
                     // do most stuff after removal (if you want)
                 });*/
    }, [])

    return (
        loading
            ? <View style={styles.container}>
                <ActivityIndicator size="large"
                                   color="#FF5CBE"/>
            </View>
            : firstData !== null ? <TabNavigator/> : <FirstScreen/>
    )
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         backgroundColor: '#FFFFFF',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     },
                                 })