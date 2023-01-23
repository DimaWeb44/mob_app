import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {width} from "../inputs";
import {useAppDispatch, useAppSelector} from "../../bll/hooks";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";
import Modal from "react-native-modal";
import {changeItem, deleteItemTC} from "../../bll/appReducer";
import {useNavigation} from "@react-navigation/native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Item = ({item}: any) => {
    const navigation = useNavigation()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalDelRef, setIsModalDelRef] = useState(false)

    const handleModal = () => setIsModalVisible(() => !isModalVisible)
    const handleModalDelRef = () => setIsModalDelRef(() => !isModalDelRef)
    const dispatch = useAppDispatch()

    return (
        <View style={styles.item}>
            <Modal isVisible={isModalVisible}
                   onBackButtonPress={handleModal}
                   animationIn={"fadeIn"}>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.modalClose} onPress={handleModal}>
                        <AntDesign name="close" size={34} color="black"/>
                    </TouchableOpacity>
                    <Image style={styles.modalPhoto} source={{uri: `${item.photo}`}}/>
                </View>
            </Modal>
            <Modal isVisible={isModalDelRef}
                   onBackButtonPress={handleModalDelRef}
                   animationIn={"fadeIn"}
                   animationOut={"fadeOut"}
                   animationOutTiming={100}
                   backdropTransitionOutTiming={100}>
                <View style={styles.modalDelRef}>
                    <TouchableOpacity style={styles.modalClose} onPress={handleModalDelRef}>
                        <AntDesign name="close" size={26} color="black"/>
                    </TouchableOpacity>
                    <Text style={{...styles.values, fontSize: 16}}>Выберите действие</Text>
                    <View style={styles.modalBox}>
                        <TouchableOpacity style={styles.modalBtn} onPress={() => {
                            handleModalDelRef()
                            dispatch(changeItem(item))
                            navigation.navigate('Inputs' as never, {} as never)
                        }}>
                            <Text style={styles.btnTitle}>Изменить запись</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.modalBtn, backgroundColor: '#a22828'}}
                                          onPress={() => {
                                              handleModalDelRef()
                                              dispatch(deleteItemTC(item.id))
                                          }}>
                            <Text style={styles.btnTitle}>Удалить запись</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.photoBox}>
                {item.photo
                    ? <TouchableOpacity onPress={handleModal}>
                        <Image style={styles.photo} source={{uri: `${item.photo}`}}/>
                    </TouchableOpacity>
                    : <MaterialIcons name="child-care" size={70} color="#C0C0C0"/>}
            </View>
            <View style={styles.textContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.title}>Возраст</Text>
                    <Text style={styles.title}>Вес</Text>
                    <Text style={styles.title}>Рост</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.values}>{item.age} мес</Text>
                    <Text style={styles.values}>{item.weight} кг</Text>
                    <Text style={styles.values}>{item.height} см</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.dots} onPress={handleModalDelRef}>
                <Entypo name="dots-three-vertical" size={20} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

export const GalleryScreen = () => {
    const data = useAppSelector(state => state.app.data)
    const dataSort = data && data.sort(function (a: any, b: any) {
        if (+a.age > +b.age) {
            return -1;
        }
        if (+a.age < +b.age) {
            return 1;
        }
        return 0;
    });

    const renderItem = ({item}: any) => (
        <View style={styles.containerItem}>
            <Item item={item}/>
        </View>
    );

    return (
        <View style={styles.container}>
            {dataSort
                ? <FlatList
                    data={dataSort}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                : <Text style={styles.title}>Нет данных</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         backgroundColor: '#FFFFFF',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         position: "relative",
                                         width: width,
                                     },
                                     containerItem:{
                                         width: wp('100%'),
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     item: {
                                         width: wp('95%'),
                                         marginTop: hp('2%'),
                                         flexDirection: "row",
                                     },
                                     photoBox: {
                                         width: wp('35%'),
                                         height: wp('35%'),
                                         borderRadius: wp('35%'),
                                         backgroundColor: '#F5F5F5',
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     photo: {
                                         width: wp('35%'),
                                         height: wp('35%'),
                                         borderRadius: wp('35%')
                                     },
                                     textContainer: {
                                         marginLeft: wp('10%'),
                                         justifyContent: "center",
                                         flexDirection: "row",
                                         alignItems: "center",
                                     },
                                     textBox: {
                                         marginRight: wp('7%'),
                                     },
                                     dots: {
                                         position: "absolute",
                                         top: 5,
                                         right: 0
                                     },
                                     title: {
                                         fontWeight: '400',
                                         fontSize: 14,
                                         lineHeight: 16,
                                         color: '#968286',
                                         marginVertical: hp('0.7%'),
                                     },
                                     values: {
                                         fontWeight: '400',
                                         fontSize: 14,
                                         lineHeight: 16,
                                         marginVertical: hp('0.7%'),
                                         color: '#000000',
                                     },
                                     modalPhoto: {
                                         width: wp('95%'),
                                         height: wp('95%'),
                                         borderRadius: 25,
                                         borderWidth: 1,
                                         borderColor: "#000",
                                         borderStyle: "solid",
                                     },
                                     modal: {
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         position: "relative"
                                     },
                                     modalClose: {
                                         position: "absolute",
                                         top: 10,
                                         right: 10,
                                         zIndex: 2
                                     },
                                     modalDelRef: {
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         width: wp('90%'),
                                         backgroundColor: '#fff',
                                         height: hp('20%'),
                                         borderRadius: 25
                                     },
                                     modalBtn: {
                                         backgroundColor: "#585CCF",
                                         borderRadius: 10,
                                         marginHorizontal: 10,
                                         marginTop: hp('3%')
                                     },
                                     btnTitle: {
                                         color: '#fff',
                                         margin: wp('2.5%')
                                     },
                                     modalBox: {
                                         flexDirection: "row"
                                     }
                                 });