import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useAppSelector} from "../../bll/hooks";
import moment from "moment";


export const HomeScreen = ({navigation}: any) => {
    const firstData = useAppSelector(state => state.app.data)
    let duration = firstData.date && moment.duration(moment().diff(firstData.date));

    return (
        <SafeAreaView style={styles.container}>
            <Text>{duration.years()}  {duration.months()}  {duration.days()}</Text>
            <Text>{firstData.height}</Text>
            <Text>{firstData.weight}</Text>
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
                                 });