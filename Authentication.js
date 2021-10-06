import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Authentication = ({ navigation, route }) => {
	const [username, onChangeUsername] = useState(null);
	const [password, onChangePassword] = useState(null);

	const handleLogin = () => {
		console.log(`Username ${username} password: ${password}`);
		navigation.navigate("Profile", { username: username });
	};
	return (
		<View style={styles.bgDark}>
			<View style={styles.card}>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	bgDark: {
		backgroundColor: "#08164d",
		height: "100%",
		width: "100%",
		color: "white",
	},
	card: {
		backgroundColor: "#fff",
		height: "50%",
		width: "80%",
		marginTop: "25%",
		marginBottom: "25%",
		marginLeft: "10%",
		flex: 1,
		justifyContent: "center",
		textAlign: "left",
		alignItems: "center",
		borderRadius: 20,
		border: "none",
	},
	input: {
		height: 40,
		border: "none",
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 5,
		placeholderTextColor: "#08164d",
		textAlign: "left",
	},
	buttons: {
		marginTop: 30,
		width: 250
	},
});

export default Authentication;