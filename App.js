import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "./views/Authentication";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown: false}}>
					<Stack.Screen name="Authentication" component={Authentication} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;