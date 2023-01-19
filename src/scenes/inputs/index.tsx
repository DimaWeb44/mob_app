import React from 'react';
import {
    Alert,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import {Formik} from 'formik';
import {useAppDispatch, useAppSelector} from "../../bll/hooks";
import * as ImagePicker from "expo-image-picker";
import {changeItem, changeItemTC, setItemTC} from "../../bll/appReducer";
import {useNavigation} from "@react-navigation/native";

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height

export const InputsScreen = () => {
    const dispatch = useAppDispatch()
    const item = useAppSelector(state => state.app.item)
    const navigation = useNavigation()
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

    const values = {
        age: '',
        weight: '',
        height: '',
        photo: '',
    }

    React.useEffect(() => {
        return navigation.addListener('blur', () => {
            if (item) {
                dispatch(changeItem(null ))
            }
        });
    }, [item]);

    return (
        <Formik
            enableReinitialize={true}
            initialValues={item ? item : values}
            onSubmit={(values, {resetForm}) => {
                item
                    ? dispatch(changeItemTC(item.id, {
                        id: uuid.v4(),
                        weight: values.weight,
                        height: values.height,
                        photo: values.photo,
                        age: values.age
                    }))
                    : dispatch(setItemTC({
                                             id: uuid.v4(),
                                             weight: values.weight,
                                             height: values.height,
                                             photo: values.photo,
                                             age: values.age
                                         }))
                resetForm()
                Alert.alert('Данные сохранены успешно')
            }
            }
        >
            {({handleChange, setFieldValue, handleSubmit, values}) => (
                <SafeAreaView style={styles.container}>
                    <View style={styles.photoBox}>
                        {values.photo
                            ? <Image style={styles.photo} source={{uri: `${values.photo}`}}/>
                            : <MaterialIcons name="child-care" size={120} color="#C0C0C0"/>}
                        <TouchableOpacity style={styles.photoBtn} onPress={() => pickImage(setFieldValue)}>
                            <MaterialIcons name="photo-camera" size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputsBox}>
                        <View style={styles.itemBox}>
                            <Text style={styles.title}>Возраст</Text>
                            <TextInput
                                style={styles.input}
                                value={values.age}
                                onChangeText={handleChange('age')}
                                placeholder="мес"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.itemBox}>
                            <Text style={styles.title}>Вес</Text>
                            <TextInput
                                style={styles.input}
                                value={values.weight}
                                onChangeText={handleChange('weight')}
                                placeholder="кг"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.itemBox}>
                            <Text style={styles.title}>Рост</Text>
                            <TextInput
                                style={styles.input}
                                value={values.height}
                                onChangeText={handleChange('height')}
                                placeholder="см"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.bmi}>
                        <Text style={styles.titleBmi}>ИМТ</Text>
                        <Text
                            style={styles.numberBmi}>{values.weight && values.height
                            ? (Math.round(+values.weight / ((+values.height / 100) * (+values.height / 100)))).toString().length > 2
                                ? <Text style={{color: '#a22828', fontSize: 12}}>некорректные данные</Text>
                                : (Math.round(+values.weight / ((+values.height / 100) * (+values.height / 100))))
                            : 0}</Text>
                    </View>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity onPress={() => {
                            values.height && values.age && values.weight
                                ? handleSubmit()
                                : Alert.alert('Заполните все поля')
                        }}
                                          style={styles.button}>
                            <Text style={styles.titleBti}>СОХРАНИТЬ</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            )}
        </Formik>
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
                                         borderRadius: 240,
                                         alignItems: "center",
                                         justifyContent: "center",
                                         backgroundColor: '#F5F5F5',
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
