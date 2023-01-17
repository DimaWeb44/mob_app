import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from "../../bll/hooks";
import moment from "moment";
import {monthNames} from "../first-screen";
import {MaterialIcons} from "@expo/vector-icons";

export const HomeScreen = () => {
    const firstData = useAppSelector(state => state.firstData.firstData)
    const data = useAppSelector(state => state.app.data)

    let duration = moment.duration(moment().diff(firstData.date));

    function declination(number: any, item: any) {
        const cases = [2, 0, 1, 1, 1, 2];
        return item[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const date = new Date(firstData.date)
    const time = new Date(firstData.time)
    const year = declination(duration.years(), [' год', ' года', ' лет'])
    const month = declination(duration.months(), [' месяц', ' месяца', ' месяцев'])
    const day = declination(duration.days(), [' день', ' дня', ' дней'])
    /* const week = [['понедельник', 0], ['вторник', 1], ['среду', 2], ['четверг', 3], ['пятницу', 4], ['суббота', 5], ['воскресенье', 6]];
     const monday = week[moment(firstData.date).day()-1][0]*/

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 20}}>Ваш малыш родился</Text>
            <Text
                style={{fontSize: 20}}>в {time.getHours()}:{time.getMinutes()} {date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}</Text>
            <Text style={{fontSize: 20}}>Cейчас ему</Text>
            <Text
                style={styles.title}>
                {duration.years() != 0 && (duration.years() + year)} {duration.months() != 0 && (duration.months() + month)} {duration.days() != 0 && (duration.days() + day)}
            </Text>
            <View style={styles.photoBox}>
                {firstData.photo
                    ? <Image style={styles.photo}
                             source={{uri: `${data && data.length > 1 && data[0].photo ? data[0].photo : firstData.photo}`}}/>
                    : <MaterialIcons name="child-care" size={90} color="#C0C0C0"/>}
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
                                     photoBox: {
                                         width: 270,
                                         height: 270,
                                         borderRadius: 270,
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