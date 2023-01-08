import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export const width = Dimensions.get('window').width

export const InputsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.photoBox}>
                <Image
                    style={styles.photo}
                    source={{
                        uri: 'https://i.pinimg.com/originals/e7/39/24/e73924d665c828a3abff536e37bb5742.jpg',
                    }}
                />
                <TouchableOpacity style={styles.photoBtn}>
                    <MaterialIcons name="photo-camera" size={24} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.inputsBox}>
                <View style={styles.itemBox}>
                    <Text style={styles.title}>Возраст</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={() => {
                        }}
                        placeholder="мес"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.itemBox}>
                    <Text style={styles.title}>Вес</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={() => {
                        }}
                        placeholder="кг"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.itemBox}>
                    <Text style={styles.title}>Рост</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={() => {
                        }}
                        placeholder="см"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style={styles.bmi}>
                <Text style={styles.titleBmi}>ИМТ</Text>
                <Text style={styles.numberBmi}>22</Text>
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
                                         marginVertical: 20,
                                         width: 240,
                                         height: 240,
                                     },
                                     photo: {
                                         width: 240,
                                         height: 240,
                                         borderRadius: 240,
                                     },
                                     photoBtn: {
                                         position: "absolute",
                                         width: 44,
                                         height: 44,
                                         borderRadius: 44,
                                         backgroundColor: '#585CCF',
                                         alignItems: "center",
                                         justifyContent: "center",
                                         bottom: 10,
                                         right: 17
                                     },
                                     inputsBox: {
                                         width: width - 40,
                                         justifyContent: "space-between",
                                         flexDirection: "row",
                                         marginBottom: 20
                                     },
                                     itemBox: {},
                                     title: {
                                         color: "#000000FF",
                                         fontSize: 12,
                                         lineHeight: 16,
                                         fontWeight: "400",
                                         textAlign: "center",
                                         marginBottom: 10
                                     },
                                     input: {
                                         height: 60,
                                         width: 80,
                                         margin: 12,
                                         borderWidth: 1,
                                         fontSize: 14,
                                         borderRadius: 10,
                                         borderColor: "#BBBBBB",
                                         textAlign: "center",
                                         color: '#9E9E9E'
                                     },
                                     bmi: {
                                         width: 162,
                                         height: 162,
                                         borderRadius: 162,
                                         borderWidth: 5,
                                         borderColor: "#79CD5B",
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     titleBmi: {
                                         fontWeight: '600',
                                         fontSize: 20,
                                         lineHeight: 27,
                                         color: '#A5A5A5',
                                         marginBottom: 10
                                     },
                                     numberBmi: {
                                         fontWeight: '400',
                                         fontSize: 80,
                                         lineHeight: 80,
                                         color: '#79CD5B',
                                     },
                                     buttonBox: {
                                         flex: 1,
                                     },
                                     button: {
                                         width: 240,
                                         marginTop: 20,
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
