import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Image, Dimensions} from "react-native";
import { Asset } from "expo-asset";
import { Button } from "../components";
import { theme } from "../styles/theme";
import { connect } from "react-redux";
import { userFilter } from "../redux/filters/UserFilter";
import { login, setLoading } from "../redux/actions/UserAction";
import Loading from "./Loading";

const Authentication = ({
	isLoading,
	setLoading,
	login,
	userAuth,
	navigation,
}) => {
	const [username, onChangeUsername] = useState("teste@gmail.com");
	const [password, onChangePassword] = useState("doidera");
	const handleLogin = () => {
		setLoading(true);
		login(username, password).then(() => navigation.navigate("HomeTabs"));
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	const handleSignup = () => {
		navigation.navigate("Signup");
	};

	return isLoading ? (
		<Loading />
	) : (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Image
					style={{ width: 250, height: 250 }}
					source={Asset.fromModule(require("../assets/images/logo512.png"))}
				/>
			</View>
			<View style={styles.inputSection}>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					onChangeText={onChangeUsername}
					defaultValue={"teste@gmail.com"}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					onChangeText={onChangePassword}
					secureTextEntry={true}
					defaultValue={"doidera"}
				/>
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
		display: "flex",
		backgroundColor: "#fff",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	logo: {
		
	},
	inputSection: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		height: "50%",
		width: "100%",
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

export default connect(userFilter, { login, setLoading })(Authentication);
