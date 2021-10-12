import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image} from "react-native";
import Rating from "../components/Rating"
import logo from '../assets/logo.svg'

const TradeHistory = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});

export default TradeHistory;