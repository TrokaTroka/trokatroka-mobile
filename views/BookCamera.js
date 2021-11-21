import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { theme } from "../styles/theme";
import Button from "../components/Button";

const BookCamera = ({ active }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [ready, setReady] = useState(false);

	const camRef = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>Sem acesso a camera</Text>;
	}

	async function takePicture() {
		if (!ready) {
			return;
		}
		if (camRef) {
			const photo = await camRef.current.takePictureAsync();
			console.log(photo);
		}
	}
	return (
		<View style={[styles.container, { width: "100%" }]}>
			<Camera
				ref={camRef}
				style={styles.camera}
				type={type}
				onCameraReady={() => {
					setReady(true);
				}}
			>
                <View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
							);
						}}
						title={"Flip"}
						textStyle={styles.text}
					/>
					<Button
						style={styles.button}
						onPress={takePicture}
						title="Tirar"
						textStyle={styles.text}
					/>
					<Button
						style={styles.button}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
							);
						}}
						title={"Flip"}
						textStyle={styles.text}
					/>
				</View>
			</Camera>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	camera: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	buttonContainer: {
		position: "absolute",
		bottom: 0,
		height: 100,
		width: "100%",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		alignSelf: "center",
        backgroundColor: theme.colors.red100
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		width: 50,
	},
	text: {
		color: "#fff",
	}
});
export default BookCamera;
