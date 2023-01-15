import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useAppSelector} from "../../bll/hooks";
import moment from "moment";

export const HomeScreen = ({navigation}: any) => {
    const firstData = useAppSelector(state => state.firstData.firstData)
    let duration = moment.duration(moment().diff(firstData.date));

    function declination(number: any, item: any) {
        const cases = [2, 0, 1, 1, 1, 2];
        return item[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const year = declination(duration.years(), [' год', ' года', ' лет'])
    const month = declination(duration.months(), [' месяц', ' месяца', ' месяцев'])
    const day = declination(duration.days(), [' день', ' дня', ' дней'])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 20}}>Вашему малышу</Text>
            <Text
                style={styles.title}>
                {duration.years() != 0 && (duration.years() + year)} {duration.months() != 0 && (duration.months() + month)} {duration.days() != 0 && (duration.days() + day)}
            </Text>
            <Image style={styles.photo} source={{uri: `${firstData.photo}`}}/>
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
                                     photo: {
                                         width: 270,
                                         height: 270,
                                         borderRadius: 270,
                                     },
                                     title: {
                                         fontSize: 20,
                                         marginBottom: 15
                                     }
                                 });