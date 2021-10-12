import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import Rating from "../components/Rating";

const Home = ({ navigation, route }) => {
	const [bookList, setBookList] = React.useState([
		{ title: "Harry Potter", author: "teste", description: "Trocando pq quero outro", user: { name: "Lucas", rating: 4.9 } },
		{
			title: "Código Limpo",
			author: "Teste01",
			description: "Quero ler outros livros",
			user: { name: "Pedro", rating: 4.6 },
		},
		{
			title: "Como fazer amigos e influenciar pessoas",
			author: "Tchola Souza",
			description: "Trocando pq já li",
			user: { name: "Rodrigo", rating: 2.4 },
		},
	]);


	const showDetails = (id) => {
		navigation.navigate('TradeDetails', id)
	}

	return (
		<View style={styles.container}>
			<View style={styles.searchSection}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search for a book"
					onChangeText={(value) => console.log(value)}
				/>
				<Ionicons
					style={styles.searchIcon}
					name="search-outline"
					size={24}
					color={"#000"}
				/>
			</View>
			<View style={styles.bookList}>
				{bookList.map((book) => (
					<Card onPress={() => showDetails(book)}>
						<View style={styles.userDetails}>
							<Text style={styles.userName}>{book.user.name}</Text>
							<Rating value={book.user.rating} />
						</View>
						<Text style={styles.bookTitle}>{book.title}</Text>
						<Text style={styles.bookDescription}>{book.description}</Text>
					</Card>
				))}
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
	searchSection: {
		position: "absolute",
		top: 40,
		left: 0,
		flex: 1,
		padding: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#e8e8e8",
		width: "100%",
	},
	searchIcon: {
		padding: 10,
	},
	searchInput: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		backgroundColor: "#fff",
		color: "#424242",
	},
	bookList: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	userDetails: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start"
	},
	userName: {
		marginRight: 5,
	},
	bookTitle: {
		fontWeight: "bold",
		fontSize: 12,
		width: "50%",
		flex: 2,
		marginTop: 3
	},
	bookDescription: {
		flex: 3,
	}
});

export default Home;
