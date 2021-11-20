import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer } from "redux-persist"

import reducers from "./reducers";

import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
	key: "@trokatroka:appState",
	storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers);


const store = createStore(persistedReducer,{}, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export {store, persistor};
