import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { theme } from '../styles/theme.js';

const defaultProps = {
	width: 300,
	height: 40,
};

const Button = ({ onPress, title, name, style, textStyle, color, children}) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				{
					...btnStyles[name ? name : "primary"],
				},
				style,
			]}
		>
			{children ? children : (<Text style={[textStyle, color ? {color: color} : {color:  btnStyles[name ? name : "primary"].textColor}]} >{title}</Text>)}
		</Pressable>
	);
};

const btnStyles = {
	primary: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.red100,
		borderWidth: "1px",
		borderColor: theme.colors.red100,
		borderRadius: "5px",
		color: "white",
		width: defaultProps.width,
		height: defaultProps.height,
		textColor: "white",
	},
	secondary: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderWidth: "1px",
		borderColor: theme.colors.red100,
		borderRadius: "5px",
		color: "white",
		width: defaultProps.width,
		height: defaultProps.height,
		textColor: theme.colors.red100,
	},
	icon: {
		padding: 0
	}
};


export default Button;
