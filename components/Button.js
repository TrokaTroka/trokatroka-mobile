import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const defaultProps = {
	width: 300,
	height: 40,
};

const Button = ({ onPress, title, name, style, textStyle, color}) => {
	return (
		<Pressable
			onPress={onPress}
			style={StyleSheet.flatten([
				{
					...btnStyles[name ? name : "primary"],
				},
				style,
			])}
		>
			<Text style={StyleSheet.flatten([textStyle, color ? {color: color} : {}])} >{title}</Text>
		</Pressable>
	);
};

const btnStyles = {
	primary: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#Ef5D60",
		borderWidth: "1px",
		borderColor: "#EF5D60",
		borderRadius: "5px",
		color: "white",
		width: defaultProps.width,
		height: defaultProps.height,
	},
	secondary: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderWidth: "1px",
		borderColor: "#EF5D60",
		borderRadius: "5px",
		color: "white",
		width: defaultProps.width,
		height: defaultProps.height,
	},
};


export default Button;
