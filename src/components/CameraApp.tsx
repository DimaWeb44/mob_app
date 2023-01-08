import {Camera, CameraType} from 'expo-camera';
import {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {width} from "../scenes/inputs";


export default function CameraApp({setOpenCamera, setImage}: any) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);

    if (!permission) {
        // Camera permissions are still loading
        return <ActivityIndicator size="large" color="#de3c5a"/>
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission"/>
            </View>
        );
    }


    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back))
    }

    const takePicture = async () => {
        if (camera) {
            // @ts-ignore
            const data = await camera.takePictureAsync(null);
            setImage(data.uri)
            setOpenCamera(false)
        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={ref => setCamera(ref as any)} ratio={'3:2'}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 20}}>
                    <TouchableOpacity
                        onPress={() => takePicture()}
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}>
                        <FontAwesome
                            name="camera"
                            style={{color: "#fff", fontSize: 40}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toggleCameraType}
                        style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}>
                        <MaterialCommunityIcons
                            name="camera-switch"
                            style={{color: "#fff", fontSize: 40}}
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
                                     container: {
                                         width: width,
                                         height: 250
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
                                     button: {
                                         flex: 1,
                                         alignSelf: 'flex-end',
                                         alignItems: 'center',
                                     },
                                     text: {
                                         fontSize: 24,
                                         fontWeight: 'bold',
                                         color: 'white',
                                     },
                                 });
