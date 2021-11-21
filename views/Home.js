import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
	SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BookList from "../components/BookList";

import { connect } from "react-redux";
import {bookFilter} from "../redux/filters/BookFilter";

const Home = ({ navigation }) => {

	const [filter, setFilter] = React.useState("");

	return (
		<View style={styles.container}>
			<View style={styles.searchSection}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search for a book"
					onChangeText={(value) => setFilter(value)}
				/>
				<Ionicons
					style={styles.searchIcon}
					name="search-outline"
					size={24}
					color={"#000"}
				/>
			</View>
			<BookList filter={filter} navigation={navigation}/>
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
});



export default connect(bookFilter, {})(Home);
