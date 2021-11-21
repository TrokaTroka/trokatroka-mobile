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
		getIcon: (focused, color, size) => {
			return <Ionicons name={focused ? 'home-sharp' : 'home-outline'  } size={size} color={color}/>
		}
	},
	TradeHistory: {
		getIcon: (focused, color, size) => {
			return <Ionicons name={focused ? 'swap-vertical' : 'swap-horizontal' } size={size}  color={color}/>
		}
	},
	BookForm: {
		getIcon: (focused, color, size) => {
			return <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={size}  color={color}/>
		}
	}
}


const HomeTabs = () => {
	return (
			<Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({

                tabBarIcon: ({ focused, color, size }) => (routeIconConfig[route.name].getIcon(focused, color, size)),
				tabBarActiveTintColor: "#fff",
          		tabBarInactiveTintColor: "#fff",
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
	},
});



export default HomeTabs;