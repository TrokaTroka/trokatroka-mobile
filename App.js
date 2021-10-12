import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "./views/Authentication";
import HomeTabs from "./HomeTabs";
import TradeDetails from "./views/TradeDetails";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown: false}}>
					<Stack.Screen name="Authentication" component={Authentication} />
					<Stack.Screen name="HomeTabs" component={HomeTabs} />
					<Stack.Screen name="TradeDetails" component={TradeDetails} options={{headerShown: true, headerTitle: "Detalhes"}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;