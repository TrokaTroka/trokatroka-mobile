import React, { useState } from "react";
import {
	StyleSheet,
	FlatList,
	SafeAreaView,
} from "react-native";
//REDUX
import {bookFilter} from "../redux/filters/BookFilter";
import { connect } from "react-redux";
import { getBooks } from "../redux/actions/BookAction";

import Card from "../components/Card";
import Rating from "../components/Rating";


const BookList = ({getBooks, bookList}) => {

    React.useEffect(() => {
        getBooks();
    }, []);

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
		<SafeAreaView style={styles.list}>
			<FlatList
				initialNumToRender={5}
				style={styles.flatList}
				keyExtractor={(item) => item.id}
				data={bookList.filter((item) => {
					return filtered != null && filtered != ""
						? item.title.toLowerCase().includes(filtered.toLowerCase())
						: true;
				})}
				renderItem={renderItem}
				contentContainerStyle={styles.bookList}
			/>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
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
})

export default connect(bookFilter, {getBooks})(BookList);