import React from "react";
import {TabNavigator} from "./src/navigation/TabNavigator";
import {FirstScreen} from "./src/scenes/first-screen";

const data = []

export default function App() {
    return (
        data.length > 0 ? <TabNavigator/> : <FirstScreen/>
    )
}

