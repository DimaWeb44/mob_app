import {Alert, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from "react";
import {width} from "../inputs";
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {MaterialIcons} from "@expo/vector-icons";
import {Formik} from 'formik';
import {useAppDispatch} from "../../bll/hooks";
import {setFirstDataTC} from "../../bll/firstScreenReducer";
import * as ImagePicker from "expo-image-picker";
import {setItemTC} from "../../bll/appReducer";
import uuid from "react-native-uuid";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const monthNames = [
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
]

export const FirstScreen = () => {
    const dispatch = useAppDispatch()
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const showDatepicker = () => {
        DateTimePickerAndroid.open({
                                       value: date,
                                       onChange: (event: any, selectedDate: any) => setDate(selectedDate),
                                       mode: 'date',
                                       is24Hour: true,
                                   })
    };

    const showDatepickerTime = () => {
        DateTimePickerAndroid.open({
                                       value: time,
                                       onChange: (event: any, selectedTime: any) => setTime(selectedTime),
                                       mode: 'time',
                                       is24Hour: true,
                                   })
    };

    const pickImage = async (setFieldValue: any) => {
        let result = await ImagePicker.launchImageLibraryAsync({
                                                                   mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                                                   allowsEditing: true,
                                                                   aspect: [4, 4],
                                                                   quality: 1,
                                                               });
        if (!result.canceled) {
            setFieldValue('photo', result.assets[0].uri as any);
        }
    };

    return (
        <Formik
            initialValues={
                {
                    weight: '',
                    height: '',
                    photo: '',
                }
            }
            onSubmit={values => {
                dispatch(setFirstDataTC({
                                            weight: values.weight,
                                            height: values.height,
                                            photo: values.photo,
                                            date,
                                            time
                                        }))
                dispatch(setItemTC({
                                       weight: values.weight,
                                       height: values.height,
                                       photo: values.photo,
                                       age: 0,
                                       id: uuid.v4()
                                   }))
            }}
        >
            {({handleChange, setFieldValue, handleSubmit, values}) => (
                <View style={styles.container}>
                    <StatusBar barStyle={"dark-content"} backgroundColor={'#FCE0E5'}/>
                    <View style={styles.topBox}/>
                    <View style={styles.bottomBox}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>Укажите дату рождения ребенка</Text>
                        <TouchableOpacity onPress={showDatepicker}
                                          style={styles.inputBtn}>
                            <View style={styles.dateBox}>
                                <View style={styles.date}>
                                    <Text style={styles.titleDate}>{date.getDate()}</Text>
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
                            <Text style={{...styles.title, marginTop: 0,}}>Укажите время рождения</Text>
                            <TouchableOpacity onPress={showDatepickerTime}
                                              style={styles.inputBtn}>
                                <View style={{...styles.date, ...styles.dateMos}}>
                                    <Text style={styles.titleDate}>{time.getHours()}:{time.getMinutes()}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemBox}>
                            <Text style={{...styles.title, marginTop: 0,}}>Укажите рост и вес при рождении</Text>
                            <View style={styles.heightWeight}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('height')}
                                    value={values.height}
                                    placeholder="см"
                                    keyboardType="numeric"/>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('weight')}
                                    value={values.weight}
                                    placeholder="кг"
                                    keyboardType="numeric"/>
                            </View>
                        </View>
                        <View style={styles.itemBox}>
                            <Text style={{...styles.title, marginTop: 0,}}>Добавьте фото ребенка</Text>
                            <View style={styles.photoBox}>
                                {values.photo
                                    ? <Image style={styles.photo} source={{uri: `${values.photo}`}}/>
                                    : <MaterialIcons name="child-care" size={85} color="#C0C0C0"/>}
                                <TouchableOpacity style={styles.photoBtn}
                                                  onPress={() => pickImage(setFieldValue)}>
                                    <MaterialIcons name="photo-camera" size={24} color="white"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <TouchableOpacity
                                onPress={() => {
                                    values.height && values.weight
                                        ? handleSubmit()
                                        : Alert.alert('Заполните все поля')
                                }}
                                style={styles.button}>
                                <Text style={styles.titleBti}>СОХРАНИТЬ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         height: '100%',
                                         width: '100%',
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
                                         top: hp('15%'),
                                         width: wp('95%'),
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
                                         marginTop: hp('4%'),
                                     },
                                     inputBtn: {
                                         alignItems: "center",
                                         marginTop: hp('2%')
                                     },
                                     dateBox: {
                                         width: wp('80%'),
                                         justifyContent: "space-between",
                                         flexDirection: "row",
                                     },
                                     date: {
                                         height: hp('7.5%'),
                                         width: wp('20%'),
                                         borderWidth: 1,
                                         borderRadius: 10,
                                         borderColor: "#BBBBBB",
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     dateMos: {
                                         width: wp('26%')
                                     },
                                     titleDate: {
                                         fontSize: 14,
                                         color: '#9E9E9E'
                                     },
                                     itemBox: {
                                         marginTop: hp('3%'),
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     input: {
                                         height: hp('7.5%'),
                                         width: wp('26%'),
                                         marginTop: hp('2%'),
                                         borderWidth: 1,
                                         fontSize: 14,
                                         borderRadius: 10,
                                         borderColor: "#BBBBBB",
                                         textAlign: "center",
                                         color: '#9E9E9E',
                                         marginHorizontal: 12,
                                     },
                                     photoBox: {
                                         marginVertical: hp('2%'),
                                         width: wp('42%'),
                                         height: wp('42%'),
                                         borderRadius: wp('42%'),
                                         backgroundColor: '#F5F5F5',
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     photo: {
                                         width: wp('42%'),
                                         height: wp('42%'),
                                         borderRadius: wp('42%'),
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
                                         width: wp('58%'),
                                         alignItems: "center",
                                         backgroundColor: "#585CCF",
                                         padding: 15,
                                         borderRadius: 10,
                                         marginVertical: hp('1%')
                                     },
                                     titleBti: {
                                         color: '#ffffff',
                                         fontSize: 14,
                                         fontWeight: '600',
                                     },
                                     heightWeight: {
                                         flexDirection: "row",
                                     }
                                 });