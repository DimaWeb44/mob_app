/*
import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import CameraApp from "../../components/CameraApp";
import {Chart} from "../../components/Chart";
import {StatusBar} from "expo-status-bar";

export const width = Dimensions.get('window').width
const imageBg = "https://phonoteka.org/uploads/posts/2021-05/1621850694_8-phonoteka_org-p-detskie-foni-dlya-malishei-8.jpg"
const photo = "https://i.pinimg.com/280x280_RS/c2/e0/91/c2e091f6a5ddbba405180bb916134bf6.jpg"

export const InputsScreen = ({}) => {
    const [text, onChangeText] = useState('');
    const [openCamera, setOpenCamera] = useState(false);
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
                                                                   mediaTypes: ImagePicker.MediaTypeOptions.All,
                                                                   allowsEditing: true,
                                                                   aspect: [4, 3],
                                                                   quality: 1,
                                                               });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri as any);
        }
    };


    return (openCamera
            ? <CameraApp setImage={setImage} setOpenCamera={setOpenCamera}/>
            : <SafeAreaView style={styles.container}>
                <ImageBackground source={{uri: ''}} resizeMode="cover" style={styles.image}>
                    <Text style={styles.title}>Трекер роста и веса ребенка</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Выберите возраст"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Ведите рост"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Введите вес"
                        keyboardType="numeric"
                    />
                    <View style={styles.containerPhoto}>
                        <Image source={{uri: image ? image : photo}}
                               resizeMode="cover"
                               style={styles.photo}/>
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            style={styles.buttonLeft}
                            onPress={pickImage}
                        >
                            <Text style={styles.titleBtnPhoto}>Вставить фото</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonRight}
                            onPress={() => setOpenCamera(true)}
                        >
                            <Text style={styles.titleBtnPhoto}>Сделать фото</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        }}
                    >
                        <Text style={styles.titleBtn}>Сохранить</Text>
                    </TouchableOpacity>

                </ImageBackground>
                <StatusBar style="auto"/>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         backgroundColor: '#FFFFFF',
                                     },
                                     image: {
                                         flex: 1,
                                     },
                                     photo: {
                                         borderColor: "#de3c5a",
                                         borderWidth: 1,
                                         width: width-20,
                                         height: 250,
                                         borderRadius: 30,
                                     },
                                     containerBtn: {
                                         marginHorizontal: 10,
                                         marginTop: 30,
                                         flexDirection: "row",
                                         justifyContent: "center",
                                     },
                                     titleBtnPhoto: {
                                         color: "white",
                                         fontSize: 20,
                                         fontWeight: '500',
                                         textAlign: "center",
                                     },
                                     buttonLeft: {
                                         padding: 10,
                                         marginLeft: 10,
                                         borderBottomLeftRadius: 30,
                                         borderTopLeftRadius: 30,
                                         backgroundColor: "#3e8641",
                                         width: '50%',
                                         borderRightWidth: 2,
                                         borderRightColor: 'black'
                                     },
                                     buttonRight: {
                                         padding: 10,
                                         marginRight: 10,
                                         borderBottomRightRadius: 30,
                                         borderTopRightRadius: 30,
                                         backgroundColor: "#3e8641",
                                         width: '50%',
                                         borderLeftWidthWidth: 2,
                                         borderLeftColor: 'black'
                                     },
                                     containerPhoto: {
                                         marginTop: 20,
                                         width: width,
                                         height: 'auto',
                                         alignItems: "center",
                                     },
                                     title: {
                                         color: "white",
                                         fontSize: 25,
                                         lineHeight: 90,
                                         fontWeight: "bold",
                                         textAlign: "center",
                                         backgroundColor: "#000000c0",
                                         marginBottom: 25
                                     },
                                     titleBtn: {
                                         color: "white",
                                         fontSize: 25,
                                         fontWeight: '600',
                                         textAlign: "center",
                                     },
                                     input: {
                                         height: 45,
                                         margin: 12,
                                         borderWidth: 1,
                                         padding: 10,
                                         paddingHorizontal: 15,
                                         fontSize: 16,
                                         borderRadius: 30,
                                         borderColor: "#de3c5a",
                                     },
                                     button: {
                                         marginTop: 30,
                                         alignItems: "center",
                                         backgroundColor: "#de3c5a",
                                         padding: 10,
                                         borderRadius: 30,
                                         marginHorizontal: 10
                                     },
                                     camera: {
                                         flex: 1,
                                     },
                                     buttonContainer: {
                                         flex: 1,
                                         flexDirection: 'row',
                                         backgroundColor: 'transparent',
                                         margin: 64,
                                     },
                                     text: {
                                         fontSize: 24,
                                         fontWeight: 'bold',
                                         color: 'white',
                                     },
                                 });
*/
