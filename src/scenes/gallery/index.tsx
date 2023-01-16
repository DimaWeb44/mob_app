import React, {useState} from 'react';
import {Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {width} from "../inputs";
import {useAppDispatch, useAppSelector} from "../../bll/hooks";
import {Entypo, MaterialIcons} from "@expo/vector-icons";
import Modal from "react-native-modal";
import {deleteItemTC} from "../../bll/appReducer";


const Item = ({item}: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const dispatch = useAppDispatch()

    return (
        <View style={styles.item}>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <Image style={styles.modalPhoto} source={{uri: `${item.photo}`}}/>
                    <Button title="Закрыть фото" onPress={handleModal}/>
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
            <TouchableOpacity style={styles.dots} onPress={() => {}}>
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
        <Item item={item}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            {dataSort
                ? <FlatList
                    data={dataSort}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                : <Text style={styles.title}>Нет данных</Text>}
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
                                         width: width,
                                     },
                                     item: {
                                         width: width-30,
                                         marginVertical: 15,
                                         flexDirection: "row",
                                     },
                                     photoBox: {
                                         width: 140,
                                         height: 140,
                                         borderRadius: 140,
                                         backgroundColor: '#F5F5F5',
                                         alignItems: "center",
                                         justifyContent: "center"
                                     },
                                     photo: {
                                         width: 140,
                                         height: 140,
                                         borderRadius: 140
                                     },
                                     textContainer: {
                                         marginLeft: 30,
                                         justifyContent: "center",
                                         flexDirection: "row",
                                         alignItems: "center",
                                     },
                                     textBox: {
                                         marginRight: 30,
                                     },
                                     dots:{
                                         position: "absolute",
                                         top: 5,
                                         right: 0
                                     },
                                     title: {
                                         fontWeight: '400',
                                         fontSize: 14,
                                         lineHeight: 16,
                                         color: '#968286',
                                         marginVertical: 5,
                                     },
                                     values: {
                                         fontWeight: '400',
                                         fontSize: 14,
                                         lineHeight: 16,
                                         marginVertical: 5,
                                         color: '#000000',
                                     },
                                     modalPhoto: {
                                         width: width - 20,
                                         height: width,
                                         borderRadius: 25,
                                         borderWidth: 1,
                                         borderColor: "#000",
                                         borderStyle: "solid",
                                     },
                                     modal: {
                                         flex: 1,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     },
                                 });