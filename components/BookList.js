import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	FlatList,
	View,
	Text,
	Image,
	Platform
} from "react-native";
//REDUX
import { bookFilter } from "../redux/filters/BookFilter";
import { getBooks } from "../redux/actions/BookAction";
import { connect, useSelector } from "react-redux";

import Card from "../components/Card";
import Rating from "../components/Rating";
import { useNavigation } from '@react-navigation/native';

const BookList = ( { getBooks, bookList, filter }) => {

	const navigation = useNavigation();

	useEffect(() => {
		getBooks();
	}, []);

	const showDetails = ({id}) => {
		navigation.navigate("TradeDetails", { id: id });
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
					<View style={styles.moreInfoContainer}>
						<Text style={styles.bookAuthor} numberOfLines={1}>{item.author}</Text>
						<Text style={styles.bookCategory} numberOfLines={1}>Categoria</Text>
					</View>
					<View style={styles.userDetails}>
						<Rating style={{justifyContent: "flex-end"}}value={item.user ? item.user.rating : 0} />
						<Text style={styles.userName} numberOfLines={1}>{item.user ? item.user.name : ''}</Text>
					</View>
				</View>
			</Card>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				initialNumToRender={5}
				style={styles.flatList}
				keyExtractor={(item) => item.id.toString()}
				data={bookList.filter((book) =>
					book.title.toLowerCase().includes(filter.toLowerCase())
				)}
				renderItem={renderItem}
				contentContainerStyle={styles.bookList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	bookList: {
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
	moreInfoContainer: {
		flexGrow: 1,
		width: '100%',
		alignItems: "flex-end",
		justifyContent: "space-around",
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
		display: "flex",
        overflow: "hidden",
		width: "70%",
		color: "#9e9e9e",
	},
	bookTitle: {
        overflow: "hidden",
		fontWeight: "bold",
		fontSize: 14,
		width: "100%",
		flex: 2,
		marginTop: 3,
	},
	bookAuthor: {
		overflow: "hidden",
		fontSize: 12,
	},
	bookCategory: {
		overflow: "hidden",
		fontSize: 12,
		fontStyle: "italic",
	},
	bookDescription: {
		flex: 3,
	},
	flatList: {
		flex: 1,
		width: "100%",
	},
	list: {
		marginTop: 110,
		flex: 1,
		height: "100%",
    	backgroundColor: "white",
    	paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	image: {
		alignSelf: "flex-end",
		width: 100,
		height: "100%",
		resizeMode: "contain",
	},
});

export default connect(bookFilter, { getBooks })(BookList);
