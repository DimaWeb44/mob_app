import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width} from "../inputs";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        age: 1,
        weight: 6,
        height: 55,
        photo: 'http://www.lenprezdravie.sk/album/titulka/thumbnail-5-pravidiel-na-ceste-k-babatku-201315.jpg',
    },
    {
        id: 'bd7acfghfgxbea-c1b1-46c2-aeggd5-3ad53abb28ba',
        age: 1,
        weight: 5,
        height: 55,
        photo: 'https://i.pinimg.com/140x140_RS/a5/89/4b/a5894b2fefde882fb17d09dbec8b0ea5.jpg',
    },
    {
        id: 'bd7acbgnxgnea-c1b1-46c2-aed5-3ad53abb28ba',
        age: 1,
        weight: 5,
        height: 55,
        photo: 'https://img0cf.b8cdn.com/images/uploads/user_photos/99/15301999_20140811152501.jpg',
    },
    {
        id: 'bd7acbxnsrgtnrsea-c1b1-46c2-aed5-3ad53abb28ba',
        age: 1,
        weight: 5,
        height: 55,
        photo: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkkK12DKjtZQMxVi_NkjHBBqaKTM5SRkZCeTgDn6uOyic',
    },
    {
        id: 'bd7atrjrtjsrcbea-c1b1-46c2-aeeed5-3ad53abb28ba',
        age: 1,
        weight: 5,
        height: 55,
        photo: 'https://img0cf.b8cdn.com/images/uploads/user_photos/41/12600841_20120806213938.jpg',
    },
    {
        id: 'bd7acbea-c1ffb1-46c2-aeewffd5-3ad53abb28ba',
        age: 1,
        weight: 5,
        height: 55,
        photo: 'https://itsaschorrthing.com/wp-content/uploads/2018/05/Bailey-hands-3-140x140.jpg',
    },
];

const Item = ({item}: any) => (
    <View style={styles.item}>
        <Image
            style={styles.photo}
            source={{
                uri: item.photo,
            }}
        />
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

    const renderItem = ({item}: any) => (
        <Item item={item}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
                                     textBox:{
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