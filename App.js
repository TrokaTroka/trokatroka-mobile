import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "./Authentication";

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Authentication">
					<Stack.Screen name="Authentication" component={Authentication} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;