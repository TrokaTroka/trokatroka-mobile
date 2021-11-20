import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";

import Home from "./views/Home";
import TradeHistory from "./views/TradeHistory";
import BookForm from "./views/BookForm";
import { theme } from './styles/theme.js';

import {Ionicons} from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const routeIconConfig = {
	Home: {
		getIcon: (focused) => {
			return focused ? 'home-sharp' : 'home-outline' 
		}
	},
	TradeHistory: {
		getIcon: (focused) => {
			return focused ? 'swap-horizontal' : 'swap-horizontal' 
		}
	},
	BookForm: {
		getIcon: (focused) => {
			return focused ? 'add-circle' : 'add-circle-outline'
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
				<Tab.Screen name="BookForm" component={BookForm} />
				<Tab.Screen name="TradeHistory" component={TradeHistory} />
			</Tab.Navigator>
	);
};


const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: theme.colors.red100,
	}
});



export default HomeTabs;