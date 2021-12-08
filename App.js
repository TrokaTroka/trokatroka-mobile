import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "./views/Authentication";
import HomeTabs from "./HomeTabs";
import TradeDetails from "./views/TradeDetails";
import BookCamera from "./views/BookCamera";
//Redux
import {Provider} from "react-redux";
import {store, persistor} from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from "react-native";
import { theme } from "./styles/theme";

const Stack = createNativeStackNavigator();
const App = () => {

	return (
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator color={theme.colors.red100}/>} persistor={persistor} >
				<NavigationContainer>
					<Stack.Navigator initialRouteName= "Authentication" screenOptions={{headerShown: false}}>
							<Stack.Screen name="Authentication" component={Authentication} />
							<Stack.Screen name="HomeTabs" component={HomeTabs} />
							<Stack.Screen name="TradeDetails" component={TradeDetails} options={{headerShown: true, headerTitle: "Detalhes"}} />
							<Stack.Screen name="BookCamera" component={BookCamera} options={{headerShown: true, headerTitle: "Fotos livro"}} />
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;