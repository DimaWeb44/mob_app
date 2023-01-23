import {StyleSheet, Text, View} from 'react-native';
import {ChartLine} from "../../components/ChartLine";
import React from "react";
import {useAppSelector} from "../../bll/hooks";
import {ChartBar} from "../../components/BarChart";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ChartsScreen = ({}) => {
    const data = useAppSelector(state => state.app.data)
    const dataSort = data && data.sort(function (a: any, b: any) {
        if (+a.age > +b.age) {
            return 1;
        }
        if (+a.age < +b.age) {
            return -1;
        }
        return 0;
    });
    const heightArr = dataSort.length ? dataSort.map((item: any) => item.height) : [1]
    const ageArr = dataSort.length ? dataSort.map((item: any) => `${item.age} мес`) : [1]
    const bmiArr = dataSort.length ? dataSort.map((item: any) => Math.round(+item.weight / (+item.height / 100))) : [1]
    return (
        <View style={styles.container}>
            <View style={styles.chartBox}>
                <Text style={styles.title}>ИМТ</Text>
                <ChartLine ageArr={ageArr} bmiArr={bmiArr}/>
            </View>
            <View style={styles.chartBox}>
                <Text style={styles.title}>Рост</Text>
                <ChartBar ageArr={ageArr} heightArr={heightArr}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         backgroundColor: '#FFFFFF',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     },
                                     chartBox: {
                                         width: wp('95%'),
                                         marginVertical: hp('3%'),
                                         flexDirection: "column",
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     },
                                     title: {
                                         fontWeight: '400',
                                         fontSize: 12,
                                         lineHeight: 16,
                                         color: '#000000',
                                         textAlign: "left"
                                     },
                                 });


/*
"@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/stack": "^6.3.10",
    "expo-navigation-bar": "^2.0.1",
    "expo-permissions": "~14.0.0",
    "expo-status-bar": "~1.4.2",
    "formic": "^0.0.10",
    "react-native-camera": "git+https://git@github.com/react-native-community/react-native-camera.git",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-image-picker": "^4.10.3",
    "react-native-paper": "^5.1.0",
    "react-native-reanimated": "~2.12.0",
    "react-navigation-material-bottom-tabs": "^2.3.5",
    "redux-persist": "^6.0.0",*/
