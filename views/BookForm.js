import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { Card, CategorySelector, Button } from "../components/";
import { useNavigation } from "@react-navigation/core";
import { theme } from "../styles/theme.js";
import { Ionicons } from "@expo/vector-icons";

const BookForm = ({}) => {
	const navigation = useNavigation();
	const [categoriesId, setCategoriesId] = useState([]);

	const toggleCategory = (id) => {
		if (categoriesId.includes(id)) {
			setCategoriesId(categoriesId.filter((categoryId) => categoryId !== id));
		} else {
			setCategoriesId([...categoriesId, id]);
		}
		console.log(categoriesId);
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.label}>Cadastre livros para trocar</Text>
				<Card onPress={() => navigation.navigate("BookCamera")}>
					<View>
						<Text style={{ alignItems: "center", color: theme.colors.red80 }}>
							Clique aqui para adicionar fotos
						</Text>
					</View>
				</Card>
				<TextInput
					placeholder="Título"
					style={styles.input}
					multiline={true}
					maxLength={80}
				/>
				<TextInput
					placeholder="Motivo"
					style={styles.input}
					multiline={true}
					maxLength={100}
				/>
				<Text style={styles.text}>Selecione as categorias do livro:</Text>
				<CategorySelector onToggleCategory={toggleCategory} />
				<View style={styles.buttonOptions}>
					<Button style={{ width: 50, alignSelf: "center" }}>
						<Ionicons name="barcode-outline" size={24} color="white" />
					</Button>
					<Button title="continue" style={{ width: 50, alignSelf: "flex-end" }}>
						<Ionicons name="arrow-forward" size={25} color="white" />
					</Button>
				</View>
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
		display: "flex",
		width: "80%",
		marginTop: 50,
		marginBottom: 20,
		alignItems: "center",
		justifyContent: "space-between",
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
	text: {
		fontSize: 18,
		fontWeight: "bold",
		alignItems: "center",
		color: theme.colors.darkRed,
		marginTop: 20,
		marginBottom: 10,
	},
	buttonOptions: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	}
});

export default BookForm;
