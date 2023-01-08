import {TouchableOpacity, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {width} from "../scenes/inputs";

export const TabBar = ({state, navigation}: any) => {

    const visible = true;

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#FCE0E5',
            maxHeight: visible ? 64 : 0,
            width: width,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50
        }}>
            {state.routes.map((route: any, index: any) => {
                const label = route.name
                const isFocused = state.index === index
                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name)
                    }
                }

                return (
                    <TouchableOpacity
                        onPress={onPress}
                        activeOpacity={1}
                        key={label}
                        style={[{
                            minHeight: 48,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 2
                        }]}
                    >
                        {label === 'Home' &&
                        <AntDesign name="home" size={24} color={isFocused ? '#21191A' : '#968b8b'}/>}
                        {label === 'Inputs' &&
                        <AntDesign name="addfile" size={24} color={isFocused ? '#21191A' : '#968286'}/>}
                        {label === 'Charts' &&
                        <AntDesign name="barschart" size={24} color={isFocused ? '#21191A' : '#968286'}/>}
                        {label === 'Gallery' &&
                        <AntDesign name="bars" size={24} color={isFocused ? '#21191A' : '#968286'}/>}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
