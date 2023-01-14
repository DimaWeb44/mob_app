import React from "react";
import {Provider} from 'react-redux';
import {store} from "./src/bll/store";
import {InitApp} from "./src/components/InitApp";

export default function App() {

    return (
        <Provider store={store}>
            <InitApp/>
        </Provider>
    )
}

