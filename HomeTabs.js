import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";

import Home from "./views/Home";
import {Ionicons} from '@expo/vector-icons'; 
import TradeHistory from "./views/TradeHistory";

const Tab = createBottomTabNavigator();

const routeIconConfig = {
	Home: {
		getIcon: (focused) => {
			return focused ? 'home-sharp' : 'home-outline' 
		}
	},
	TradeHistory: {
		getIcon: (focused) => {
			return focused ? 'repeat-outline' : 'repeat-outline' 
		}
	}
}


const HomeTabs = () => {
	return (
			<Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({

                tabBarIcon: ({ focused, color, size }) => {
					return <Ionicons name={routeIconConfig[route.name].getIcon(focused)} size={size} color={color} />;
				},
				tabBarActiveTintColor: '#FFF',
          		tabBarInactiveTintColor: '#000',
				headerShown: false,
				tabBarStyle: styles.tabBarStyle,
				tabBarShowLabel: false})}>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="TradeHistory" component={TradeHistory} />
			</Tab.Navigator>
	);
};


const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: "#ef5d60",
	}
});



export default HomeTabs;