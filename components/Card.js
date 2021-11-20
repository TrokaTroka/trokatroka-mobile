import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

const Card = ({ children, onPress, style }) => {
	return (
		<View style={[styles.card, styles.shadowProp]}>
			<Pressable style={styles.pressable} onPress={onPress}>
				{children}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
        backgroundColor: "white",
		margin: 5,
		borderWidth: 1,
		borderColor: "#c8c8c8",
		borderRadius: 3,
		padding: 15,
		alignItems: "center",
		justifyContent: "center",
		width: "95%",
		height: 150,
	},
    pressable: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
		justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    shadowProp: {
		borderWidth: 0,
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	  }
});

export default Card;
