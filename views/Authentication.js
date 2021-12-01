import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image} from "react-native";
import Button from "../components/Button"
import logo from '../assets/logo.svg'

const Authentication = ({ navigation, route }) => {
	const [username, onChangeUsername] = useState(null);
	const [password, onChangePassword] = useState(null);

	const handleLogin = () => {
		console.log(`Username ${username} password: ${password}`);
		navigation.navigate("HomeTabs", { username: username });
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputSection}>
				<Image source={logo} />
				<TextInput style={styles.input} placeholder="E-mail" onChangeText={onChangeUsername}/>
				<TextInput style={styles.input} placeholder="Password" onChangeText={onChangePassword} secureTextEntry={true}/>
				<Pressable title="Sign In"/>
				<Button onPress= {handleLogin} style={styles.btn} color="white" title="Sign In"/>
				<Button name="secondary" onPress= {() => {console.log("teste")}} style={styles.btn} color="#EF5D60" title="Sign Up"/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
		width: "100%",
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	inputSection: {
		backgroundColor: "#fff",
		height: "50%",
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		marginBottom: "100%",
		marginTop: "25%"
	},
	input: {
		height: 50,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: "#a8a8a8",
		fontSize: 16,
		color: "#1f1f1f",
		padding: 5,
		width: 300,
		margin: 5,
		textAlign: "left",
	},
	btn: {
		margin: 10,
		height: 50
	},

});

export default Authentication;