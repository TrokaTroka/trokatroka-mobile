import React, { useState } from "react";
import {
	StyleSheet,
	FlatList,
	SafeAreaView,
	View,
	Text,
	Image,
} from "react-native";
//REDUX
import { bookFilter } from "../redux/filters/BookFilter";
import { getBooks } from "../redux/actions/BookAction";
import { connect } from "react-redux";

import Card from "../components/Card";
import Rating from "../components/Rating";

const BookList = ( { navigation, getBooks, bookList, filter }) => {
	React.useEffect(() => {
		getBooks();
	}, []);

	const showDetails = (id) => {
		navigation.navigate("TradeDetails", { user: { id: id } });
	};

	const renderItem = ({ item }) => {
		return (
			<Card onPress={() => showDetails(item)} style={styles.shadowProp}>
				<View styles={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{
							uri: "https://images-na.ssl-images-amazon.com/images/I/51tPnvC0xlS._SY344_BO1,204,203,200_QL70_ML2_.jpg",
						}}
					/>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
					<View style={styles.userDetails}>
						<Rating value={item.user.rating} />
						<Text style={styles.userName} numberOfLines={1}>{item.user.name}</Text>
					</View>
				</View>
			</Card>
		);
	};

	return (
		<SafeAreaView style={styles.list}>
			<FlatList
				initialNumToRender={5}
				style={styles.flatList}
				keyExtractor={(item) => item.id.toString()}
				data={bookList.filter((book) =>
					book.title.toLowerCase().includes(''.toLowerCase())
				)}
				renderItem={renderItem}
				contentContainerStyle={styles.bookList}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	bookList: {
		marginTop: 60,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	infoContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignSelf: "center",
		alignItems: "flex-start",
		width: "70%",
	},
	imageContainer: {
		width: "30%",
		justifyContent: "center",
		alignSelf: "flex-start",
		alignContent: "center",
		alignItems: "center",
		height: "90%",
	},
	userDetails: {
		flex: 1,
		flexDirection: "row-reverse",
		justifyContent: "space-around",
		width: "100%",
		alignItems: "flex-end",
		alignSelf: "flex-end",
	},
	userName: {
        overflow: "hidden",
		width: "70%",
		color: "#9e9e9e"
	},
	bookTitle: {
        overflow: "hidden",
		fontWeight: "bold",
		fontSize: 12,
		width: "100%",
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
	image: {
		alignSelf: "flex-end",
		width: 100,
		height: "100%",
		resizeMode: "contain",
	},
});

export default connect(bookFilter, { getBooks })(BookList);
