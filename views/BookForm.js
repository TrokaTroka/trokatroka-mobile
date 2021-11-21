import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import Card from "../components/Card";

import { theme } from "../styles/theme.js";

const BookForm = ({ id, navigation, route }) => {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.label}>Cadastre livros para trocar</Text>
				<Card>
					<View>
						<Text style={{alignItems: 'center', color: theme.colors.red80 }}>
							Clique aqui para adicionar fotos
						</Text>
					</View>
				</Card>
				<TextInput placeholder="Título" style={styles.input} multiline={true} maxLength={80}/>
				<TextInput placeholder="Motivo" style={styles.input} multiline={true} maxLength={100}/>
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
		justifyContent: "center",
		alignItems: "center",
	},
	form: {
		flex: 1,
		width: "80%",
		marginTop: 50,
		marginBottom: 20,
		alignItems: "center",
	},
	label: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
		color: theme.colors.darkRed,
	},
	input: {
		height: 50,
		width: "95%",
		backgroundColor: "#f9f9f9",
		padding: 5,
		margin: 5,
	},
});

export default BookForm;
