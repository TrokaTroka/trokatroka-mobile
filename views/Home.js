import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
	SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import Rating from "../components/Rating";

const Home = ({ navigation, route }) => {
	const [bookList, setBookList] = React.useState([
		{
			id: "1",
			title: "Harry Potter",
			author: "teste",
			description: "Trocando pq quero outro",
			user: { name: "Lucas", rating: 4.9 },
		},
		{
			id: "2",
			title: "Código Limpo",
			author: "Teste01",
			description: "Quero ler outros livros",
			user: { name: "Pedro", rating: 4.6 },
		},
		{
			id: "3",
			title: "Como fazer amigos e influenciar pessoas",
			author: "Tchola Souza",
			description: "Trocando pq já li",
			user: { name: "Rodrigo", rating: 2.4 },
		},
		{
			id: "4",
			title: "Harry Potter",
			author: "teste",
			description: "Trocando pq quero outro",
			user: { name: "Lucas", rating: 4.9 },
		},
		{
			id: "5",
			title: "Código Limpo",
			author: "Teste01",
			description: "Quero ler outros livros",
			user: { name: "Pedro", rating: 4.6 },
		},
		{
			id: "6",
			title: "Como fazer amigos e influenciar pessoas",
			author: "Tchola Souza",
			description: "Trocando pq já li",
			user: { name: "Rodrigo", rating: 2.4 },
		},
		{
			id: "7",
			title: "Harry Potter",
			author: "teste",
			description: "Trocando pq quero outro",
			user: { name: "Lucas", rating: 4.9 },
		},
		{
			id: "8",
			title: "Código Limpo",
			author: "Teste01",
			description: "Quero ler outros livros",
			user: { name: "Pedro", rating: 4.6 },
		},
		{
			id: "9",
			title: "Como fazer amigos e influenciar pessoas",
			author: "Tchola Souza",
			description: "Trocando pq já li",
			user: { name: "Rodrigo", rating: 2.4 },
		},
		{
			id: "10",
			title: "Harry Potter",
			author: "teste",
			description: "Trocando pq quero outro",
			user: { name: "Lucas", rating: 4.9 },
		},
		{
			id: "11",
			title: "Código Limpo",
			author: "Teste01",
			description: "Quero ler outros livros",
			user: { name: "Pedro", rating: 4.6 },
		},
		{
			id: "12",
			title: "Como fazer amigos e influenciar pessoas",
			author: "Tchola Souza",
			description: "Trocando pq já li",
			user: { name: "Rodrigo", rating: 2.4 },
		},
	]);

	const [filtered, setFiltered] = React.useState(null);

	const showDetails = (id) => {
		navigation.navigate("TradeDetails", id);
	};

	const renderItem = ({ item }) => {
		return (
			<Card onPress={() => showDetails(item)}>
				<View style={styles.userDetails}>
					<Text style={styles.userName}>{item.user.name}</Text>
					<Rating value={item.user.rating} />
				</View>
				<Text style={styles.bookTitle}>{item.title}</Text>
				<Text style={styles.bookDescription}>{item.description}</Text>
			</Card>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.searchSection}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search for a book"
					onChangeText={(value) => setFiltered(value)}
				/>
				<Ionicons
					style={styles.searchIcon}
					name="search-outline"
					size={24}
					color={"#000"}
				/>
			</View>
			<SafeAreaView style={styles.list}>
				<FlatList
					initialNumToRender={5}
					style={styles.flatList}
					keyExtractor={(item) => item.id}
					data={bookList.filter((item) => {return (filtered != null && filtered != '') ? item.title.toLowerCase().includes(filtered.toLowerCase()) : true})}
					renderItem={renderItem}
					contentContainerStyle={styles.bookList}
				/>
			</SafeAreaView>
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
		zIndex: 1000,
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
		marginTop: 50,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	userDetails: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	userName: {
		marginRight: 5,
	},
	bookTitle: {
		fontWeight: "bold",
		fontSize: 12,
		width: "50%",
		flex: 2,
		marginTop: 3,
	},
	bookDescription: {
		flex: 3,
	},
	flatList: {
		flex: 1,
		width: "100%",
	},
	list: {
		flex: 1,
		height: "100%",
	},
});

export default Home;
