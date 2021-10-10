import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image} from "react-native";
import Button from "../components/Button"
import logo from '../assets/logo.svg'

const Home = ({ navigation, route }) => {
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

export default Home;