import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width} from "../inputs";
import {useAppSelector} from "../../bll/hooks";
import {MaterialIcons} from "@expo/vector-icons";

const Item = ({item}: any) => (
    <View style={styles.item}>
        <View style={styles.photoBox}>
            {item.photo
                ? <Image style={styles.photo} source={{uri: `${item.photo}`}}/>
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
    </View>
);

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
                                     },
                                     item: {
                                         width: width,
                                         marginVertical: 15,
                                         marginHorizontal: 20,
                                         flexDirection: "row"
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
                                     }
                                 });