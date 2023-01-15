import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InputsScreen} from "../scenes/inputs";
import {ChartsScreen} from "../scenes/charts";
import {GalleryScreen} from "../scenes/gallery";
import {HomeScreen} from "../scenes/home";
import {TabBar} from "./TabBar";
import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBar={props => <TabBar {...props} />}
                backBehavior={"history"}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                    },
                    headerTintColor: '#21191A',
                    headerTitleStyle: {
                        fontWeight: '200',
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 21}} onPress={() => {}}>
                            <AntDesign name="arrowleft" size={24} color="#21191A" />
                        </TouchableOpacity>
                    ),
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Главная' }}
                />
                <Tab.Screen
                    name='Inputs'
                    component={InputsScreen}
                    options={{ title: 'Внести данные' }}
                />
                <Tab.Screen
                    name='Charts'
                    component={ChartsScreen}
                    options={{ title: 'Графики' }}
                />
                <Tab.Screen
                    name='Gallery'
                    component={GalleryScreen}
                    options={{ title: 'Галерея' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
