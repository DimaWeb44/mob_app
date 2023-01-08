import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Chart} from "../../components/Chart";
import React from "react";
import {width} from "../inputs";

export const ChartsScreen = ({}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chartBox}>
                <Text style={styles.title}>ИМТ</Text>
                <Chart/>
            </View>
            <View style={styles.chartBox}>
                <Text style={styles.title}>Рост</Text>
             {/*   <ChartBar/>*/}
            </View>
        </SafeAreaView>
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
                                         flexDirection: "column",
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     },
                                     title: {
                                         fontWeight: '400',
                                         fontSize: 12,
                                         lineHeight: 16,
                                         color: '#000000',
                                     },
                                 });