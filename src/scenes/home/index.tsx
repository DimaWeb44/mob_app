import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';


export const HomeScreen = ({navigation }: any) => {

    return(
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Settings')}
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
                                 });