import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const getData = async (key: any) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        Alert.alert('error reading value')
    }
}

export const setData = async (value: any, key: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        Alert.alert('error')
    }
}