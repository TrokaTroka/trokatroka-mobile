import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import Button from "../components/Button";
import { theme } from "../styles/theme";
import { connect } from "react-redux";
import { userFilter } from "../redux/filters/UserFilter";
import { login } from "../redux/actions/UserAction";

const Authentication = ({ login, userAuth, navigation }) => {
	const [username, onChangeUsername] = useState("string");
	const [password, onChangePassword] = useState("string");
	const [loading, setLoading] = useState(false);
	const handleLogin = () => {
		if(!loading) {
			setLoading(true);
			login(username, password)
			.then(() => navigation.navigate("HomeTabs"))
		}
	};

	useEffect(() => {
		if(userAuth !== null) {
			navigation.navigate("HomeTabs")
		}	
	}, []);

	const handleSignup = () => {
		navigation.navigate("Signup");
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputSection}>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					onChangeText={onChangeUsername}
					defaultValue={"string"}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					onChangeText={onChangePassword}
					secureTextEntry={true}
					defaultValue={"string"}
				/>
				<Pressable title="Sign In" />
				<Button
					onPress={handleLogin}
					style={styles.btn}
					color="white"
					title="Sign In"
				/>
				<Button
					name="secondary"
					onPress={() => {
						handleSignup();
					}}
					style={styles.btn}
					color="#EF5D60"
					title="Sign Up"
				/>
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
		marginTop: "25%",
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
		height: 50,
	},
});

export default connect(userFilter, { login })(Authentication);
