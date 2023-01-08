import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from "react";
import {width} from "../inputs";
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {MaterialIcons} from "@expo/vector-icons";

export const FirstScreen = ({}) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event: any, selectedDate: any) => {
        setDate(selectedDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
                                       value: date,
                                       onChange,
                                       mode: currentMode,
                                       is24Hour: true,
                                   });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const monthNames = [
        "Января", "Февраля", "Мара", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBox}>
            </View>
            <View style={styles.bottomBox}>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Укажите дату рождения ребенка</Text>
                <TouchableOpacity onPress={showDatepicker}
                                  style={styles.inputBtn}
                >
                    <View style={styles.dateBox}>
                        <View style={styles.date}>
                            <Text style={styles.titleDate}>{date.getDay()}</Text>
                        </View>
                        <View style={{...styles.date, ...styles.dateMos}}>
                            <Text style={styles.titleDate}>{monthNames[date.getMonth()]}</Text>
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.titleDate}>{date.getFullYear()}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.itemBox}>
                    <Text style={{...styles.title, marginTop: 0,}}>Укажите рост ребенка</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={() => {
                        }}
                        placeholder="см"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.itemBox}>
                    <Text style={{...styles.title, marginTop: 0,}}>Укажите вес ребенка</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={() => {
                        }}
                        placeholder="кг"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.itemBox}>
                    <Text style={{...styles.title, marginTop: 0,}}>Добавьте фото ребенка</Text>
                    <View style={styles.photoBox}>
                        <MaterialIcons name="child-care" size={85} color="#C0C0C0"/>
                        {/*  <Image
                            style={styles.photo}
                            source={{
                                uri: 'https://i.pinimg.com/originals/e7/39/24/e73924d665c828a3abff536e37bb5742.jpg',
                            }}
                        />*/}
                        <TouchableOpacity style={styles.photoBtn}>
                            <MaterialIcons name="photo-camera" size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.titleBti}>СОХРАНИТЬ</Text>
                    </TouchableOpacity>
                </View>
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
                                         position: "relative",
                                     },
                                     topBox: {
                                         width: width,
                                         flex: 1,
                                         backgroundColor: '#FCE0E5',
                                     },
                                     bottomBox: {
                                         width: width,
                                         flex: 2,
                                         backgroundColor: '#ffffff',
                                     },
                                     content: {
                                         top: 120,
                                         width: width - 20,
                                         borderRadius: 30,
                                         position: "absolute",
                                         zIndex: 1,
                                         backgroundColor: '#ffffff',
                                     },
                                     title: {
                                         fontWeight: '400',
                                         textAlign: "center",
                                         fontSize: 12,
                                         lineHeight: 16,
                                         color: '#000000',
                                         marginTop: 36,
                                     },
                                     inputBtn: {
                                         alignItems: "center",
                                         marginTop: 20
                                     },
                                     dateBox: {
                                         width: width - 40,
                                         justifyContent: "space-between",
                                         flexDirection: "row",
                                     },
                                     date: {
                                         height: 60,
                                         width: 80,
                                         marginHorizontal: 12,
                                         borderWidth: 1,
                                         borderRadius: 10,
                                         borderColor: "#BBBBBB",
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     dateMos: {
                                         width: 110
                                     },
                                     titleDate: {
                                         fontSize: 14,
                                         color: '#9E9E9E'
                                     },
                                     itemBox: {
                                         marginTop: 25,
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     input: {
                                         height: 60,
                                         width: 110,
                                         marginTop: 20,
                                         borderWidth: 1,
                                         fontSize: 14,
                                         borderRadius: 10,
                                         borderColor: "#BBBBBB",
                                         textAlign: "center",
                                         color: '#9E9E9E'
                                     },
                                     photoBox: {
                                         marginVertical: 20,
                                         width: 170,
                                         height: 170,
                                         borderRadius: 170,
                                         backgroundColor: '#F5F5F5',
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     photo: {
                                         width: 170,
                                         height: 170,
                                         borderRadius: 170,
                                     },
                                     photoBtn: {
                                         position: "absolute",
                                         width: 44,
                                         height: 44,
                                         borderRadius: 44,
                                         backgroundColor: '#585CCF',
                                         alignItems: "center",
                                         justifyContent: "center",
                                         bottom: 5,
                                         right: 5
                                     },
                                     buttonBox: {
                                         alignItems: "center"
                                     },
                                     button: {
                                         width: 240,
                                         alignItems: "center",
                                         backgroundColor: "#585CCF",
                                         padding: 15,
                                         borderRadius: 10,
                                         marginHorizontal: 10
                                     },
                                     titleBti: {
                                         color: '#ffffff',
                                         fontSize: 14,
                                         fontWeight: '600',
                                     }
                                 });