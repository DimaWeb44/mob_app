import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ChartLine} from "../../components/ChartLine";
import React from "react";
import {width} from "../inputs";
import {useAppSelector} from "../../bll/hooks";
import {ChartBar} from "../../components/BarChart";

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
    const heightArr = dataSort ? dataSort.map((item: any) => item.height) : [1]
    const ageArr = dataSort ? dataSort.map((item: any) => `${item.age} мес`) : [1]
    const bmiArr = dataSort ? dataSort.map((item: any) => Math.round(+item.weight / (+item.height / 100))) : [1]
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
                                         width: width - 40,
                                         flex: 1,
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